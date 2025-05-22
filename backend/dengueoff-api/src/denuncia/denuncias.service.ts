import { Inject, Injectable } from "@nestjs/common";
import { DENUNCIA } from "./denuncia.entity";
import { ListaDenunciaDTO } from "./DTO/consulta.dto";
import { v4 as uuid } from 'uuid';
import { CriaDenunciaDto } from "./DTO/denuncia.dto";
import { AlteraDenunciaDto } from "./DTO/altera.denuncia";
import { UsuarioService } from "src/usuario/usuario.service";
import { Repository } from 'typeorm';
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";




@Injectable()
export class DenunciasService {
    constructor(
        @Inject('DENUNCIA_REPOSITORY')
        private denunciaRepository: Repository<DENUNCIA>,
        private readonly usuarioService: UsuarioService,
    ) { }

    async listar(): Promise<ListaDenunciaDTO[]> {
        var denunciaListados = await this.denunciaRepository.find({ relations: ['USUARIO'], });
        return denunciaListados.map(
            denuncia => new ListaDenunciaDTO(
                denuncia.ID,
                denuncia.DESCRICAO,
                denuncia.FOTOS,
                denuncia.CEP,
                denuncia.RUA,
                denuncia.NUMERO,
                denuncia.COMPLEMENTO,
                denuncia.USUARIO?.NOME || 'Usuario não encontrado'
            ))

    }

    async Denunciar(id: string) {
        const denuncia = await this.denunciaRepository
            .createQueryBuilder('denuncia')
            .select('denuncia.ID', 'ID')
            .addSelect('denuncia.DESCRICAO', 'DESCRICAO')
            .addSelect('denuncia.CEP', 'CEP')
            .addSelect('denuncia.RUA', 'RUA')
            .addSelect('denuncia.NUMERO', 'NUMERO')
            .addSelect('denuncia.COMPLEMENTO', 'COMPLEMENTO')
            .addSelect('usuario.NOME', 'NOME_USUARIO')
            .leftJoin('denuncia.USUARIO', 'usuario')
            .where('denuncia.ID = :ID', { ID: id })
            .getRawOne();

        if (!denuncia) {
            throw new Error(`Denúncia com ID ${id} não encontrada`);
        }

        return {
            message: `A denúncia feita por ${denuncia.NOME_USUARIO} relata: "${denuncia.DESCRICAO}". Local: ${denuncia.RUA},
             Nº ${denuncia.NUMERO}, ${denuncia.COMPLEMENTO || ''} - CEP ${denuncia.CEP}.`,
        };
    }

    async inserir(dados: CriaDenunciaDto): Promise<RetornoCadastroDTO> {
        let denuncia = new DENUNCIA();
        denuncia.ID = uuid();
        denuncia.DESCRICAO = dados.DESCRICAO,
            denuncia.FOTOS = dados.FOTOS,
            denuncia.CEP = dados.CEP,
            denuncia.RUA = dados.RUA,
            denuncia.NUMERO = dados.NUMERO,
            denuncia.COMPLEMENTO = dados.COMPLEMENTO,
            denuncia.ANONIMATO = dados.ANONIMATO,
            denuncia.USUARIO = await this.usuarioService.localizarID(dados.USUARIOID);

        return this.denunciaRepository.save(denuncia)
            .then((result) => {
                return <RetornoCadastroDTO>{
                    id: denuncia.ID,
                    message: "denuncia registrada!"
                };
            })
            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao registrar." + error.message
                };
            })
    }

    async localizarID(ID: string): Promise<DENUNCIA> {
        const denuncia = await this.denunciaRepository.findOne({
            where: {
                ID,
            },
        });

        if (!denuncia) {
            throw new Error(`Denuncia com ID ${ID} não encontrado`);
        }

        return denuncia;
    }

    async remover(id: string): Promise<RetornoObjDTO> {
        const denuncia = await this.localizarID(id);

        return this.denunciaRepository.remove(denuncia)
            .then((result) => {
                return <RetornoObjDTO>{
                    return: denuncia,
                    message: "denuncia excluida!"
                };
            })
            .catch((error) => {
                return <RetornoObjDTO>{
                    return: denuncia,
                    message: "Houve um erro ao excluir." + error.message
                };
            });
    }

    async alterar(id: string, dados: AlteraDenunciaDto): Promise<RetornoCadastroDTO> {
        const denuncia = await this.localizarID(id);

        Object.entries(dados).forEach(([chave, valor]) => {
            if (valor !== undefined && valor !== null) {
                denuncia[chave] = valor;
            }
        });

        return this.denunciaRepository.save(denuncia)
            .then(() => {
                return {
                    id: denuncia.ID,
                    message: 'Denúncia atualizada com sucesso!'
                };
            })
            .catch((error) => {
                return {
                    id: '',
                    message: 'Erro ao atualizar denúncia: ' + error.message
                };
            });
    }
}