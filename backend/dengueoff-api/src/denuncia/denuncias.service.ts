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
            denuncia.COMPLEMENTO,
            denuncia.USUARIO.NOME
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

        Object.entries(dados).forEach(
            async ([chave, valor]) => {
                if (chave === 'ID') {
                    return;
                }

                if (chave === 'USUARIO') {
                    denuncia['USUARIO'] = await this.usuarioService.localizarID(valor);
                    return;
                }

                if (valor)
                    denuncia[chave] = valor;

            }
        )

        return this.denunciaRepository.save(denuncia)
            .then((result) => {
                return <RetornoCadastroDTO>{
                    id: denuncia.ID,
                    message: "denuncia alterada!"
                };
            })
            .catch((error) => {
                return <RetornoCadastroDTO>{
                    id: "",
                    message: "Houve um erro ao alterar." + error.message
                };
            });
    }
    // denuncia(): string {
    //   const agora = new Date()
    //   return this.descricao +
    //     '\nEndereço: ' + this.endereco + (this.complemento ? ', ' + this.complemento : '') +
    //     ' - CEP ' + this.cep +
    //     '\nEmail: ' + this.usuario.email +
    //     '\nFoto: ' + this.fotos +
    //     '\n' + agora;

    // #denuncias: DenunciaEntity[] = [];


    // AdicionarDenuncia(denuncia: DenunciaEntity) {
    //     this.#denuncias.push(denuncia)
    // }

    // listarDenuncias(): ListaDenunciaDTO[] {
    //     return this.#denuncias.map(this.mapDenunciaToDTO);
    // }

    // private mapDenunciaToDTO(denuncia: DenunciaEntity): ListaDenunciaDTO {
    //     return new ListaDenunciaDTO(
    //         denuncia.id,
    //         denuncia.descricao,
    //         denuncia.fotos,
    //         denuncia.cep,
    //         denuncia.endereco,
    //         denuncia.complemento,
    //         denuncia.anonimato ? 'Anônimo' : denuncia.usuario.nome,
    //     );
    // }

    // buscarPorId(id: string): DenunciaEntity {
    //     const denuncia = this.#denuncias.find((d) => d.id === id);
    //     if (!denuncia) {
    //         throw new Error('Denúncia não encontrada');
    //     }

    //     return denuncia;
    // }

    // buscarTextoDenuncia(id: string): string {
    //     const denuncia = this.#denuncias.find((d) => d.id === id);
    //     if (!denuncia) {
    //         throw new Error('Denúncia não encontrada');
    //     }

    //     return denuncia.denuncia();
    // }

    // atualizador(id: string, dadosAtualizacao: Partial<DenunciaEntity>) {
    //     const denuncia = this.buscarPorId(id);

    //     Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
    //         if (valor === undefined) {
    //             return
    //         }
    //         if (chave === 'id') {
    //             (denuncia as any)[chave] = valor;
    //         }
    //     })
    // }

    // atualizarDenuncia(id: string, dados: AlteraDenunciaDto) {
    //     const denuncia = this.buscarPorId(id);

    //     denuncia.descricao = dados.DESCRICAO;
    //     denuncia.fotos = dados.FOTOS;
    //     denuncia.cep = dados.CEP;
    //     denuncia.complemento = dados.COMPLEMENTO;
    //     denuncia.anonimato = dados.ANONIMATO;

    //     return {
    //         mensagem: 'Denúncia atualizada com sucesso',
    //         denuncia,
    //     };
    // }



    // removerDenuncia(id: string) {
    //     const denuncia = this.buscarPorId(id);

    //     const index = this.#denuncias.findIndex((d) => d.id === id);
    //     this.#denuncias.splice(index, 1);

    //     return {
    //         mensagem: 'Denúncia removida com sucesso',
    //         id: denuncia.id,
    //     };
    // }


}