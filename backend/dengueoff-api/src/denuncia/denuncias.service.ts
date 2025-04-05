import { Injectable } from "@nestjs/common";
import { DenunciaEntity } from "./denuncia.entity";
import { ListaDenunciaDTO } from "./DTO/consulta.dto";
import { CriaDenunciaDto } from "./DTO/denuncia.dto";
import { AlteraDenunciaDto } from "./DTO/altera.denuncia";



@Injectable()
export class DenunciasService {

    #denuncias: DenunciaEntity[] = [];


    AdicionarDenuncia(denuncia: DenunciaEntity) {
        this.#denuncias.push(denuncia)
    }

    listarDenuncias(): ListaDenunciaDTO[] {
        return this.#denuncias.map(this.mapDenunciaToDTO);
    }

    private mapDenunciaToDTO(denuncia: DenunciaEntity): ListaDenunciaDTO {
        return new ListaDenunciaDTO(
            denuncia.id,
            denuncia.descricao,
            denuncia.fotos,
            denuncia.cep,
            denuncia.endereco,
            denuncia.complemento,
            denuncia.anonimato ? 'Anônimo' : denuncia.usuario.nome,
        );
    }

    buscarPorId(id: string): DenunciaEntity {
        const denuncia = this.#denuncias.find((d) => d.id === id);
        if (!denuncia) {
            throw new Error('Denúncia não encontrada');
        }

        return denuncia;
    }

    buscarTextoDenuncia(id: string): string {
        const denuncia = this.#denuncias.find((d) => d.id === id);
        if (!denuncia) {
            throw new Error('Denúncia não encontrada');
        }

        return denuncia.denuncia();
    }

    atualizador(id: string, dadosAtualizacao: Partial<DenunciaEntity>) {
        const denuncia = this.buscarPorId(id);

        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (valor === undefined) {
                return
            }
            if (chave === 'id') {
                (denuncia as any)[chave] = valor;
            }
        })
    }

    atualizarDenuncia(id: string, dados: AlteraDenunciaDto) {
        const denuncia = this.buscarPorId(id);

        denuncia.descricao = dados.descricao;
        denuncia.fotos = dados.fotos;
        denuncia.cep = dados.cep;
        denuncia.complemento = dados.complemento;
        denuncia.anonimato = dados.anonimato;

        return {
            mensagem: 'Denúncia atualizada com sucesso',
            denuncia,
        };
    }



    removerDenuncia(id: string) {
        const denuncia = this.buscarPorId(id);

        const index = this.#denuncias.findIndex((d) => d.id === id);
        this.#denuncias.splice(index, 1);

        return {
            mensagem: 'Denúncia removida com sucesso',
            id: denuncia.id,
        };
    }


}