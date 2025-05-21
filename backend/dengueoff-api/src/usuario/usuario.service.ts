import { Inject, Injectable } from '@nestjs/common';
import { USUARIO } from './usuario.entity';
import { Repository } from 'typeorm';
import { criaUsuarioDTO } from './DTO/usuario.dto';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { v4 as uuid } from 'uuid';
import { alteraUsuarioDTO } from './DTO/altera.usuario';


@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<USUARIO>,
  ) { }

  async inserir(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO> {
    let usuario = new USUARIO();
    usuario.ID = uuid();
    usuario.NOME = dados.NOME;
    usuario.CPF = dados.CPF;
    usuario.DATANASC = dados.DATANASC;
    usuario.EMAIL = dados.EMAIL;
    usuario.CEP = dados.CEP;
    usuario.RUA = dados.RUA;
    usuario.NUMERO = dados.NUMERO;
    usuario.BAIRRO = dados.BAIRRO;
    usuario.CIDADE = dados.CIDADE;
    usuario.COMPLEMENTO = dados.COMPLEMENTO;
    usuario.TELEFONE = dados.TELEFONE;
    usuario.trocaSenha(dados.SENHA)

    return this.usuarioRepository.save(usuario)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: usuario.ID,
          message: "USUARIO cadastrado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao cadastrar." + error.message
        };
      })


  }

  async listar(): Promise<USUARIO[]> {
    return this.usuarioRepository.find();
  }

  async localizarID(ID: string): Promise<USUARIO> {
    const objeto = await this.usuarioRepository.findOne({
      where: {
        ID,
      },
    });

    if (!objeto) {
      throw new Error(`PESSOA com ID ${ID} não encontrado`);
    }

    return objeto;
  }

  async localizarEmail(EMAIL: string): Promise<USUARIO> {
    const objeto = await this.usuarioRepository.findOne({
      where: {
        EMAIL,
      },
    });

    if (!objeto) {
      throw new Error(`PESSOA com EMAIL ${EMAIL} não encontrado`);
    }

    return objeto;
  }

  async Login(email: string, senha: string) {
    try {
      const possivelUsuario = await this.localizarEmail(email);

      if (!possivelUsuario) {
        return { usuario: null, status: false };
      }

      const senhaValida = possivelUsuario.login(senha);

      return {
        usuario: senhaValida ? possivelUsuario : null,
        status: senhaValida
      };
    } catch (error) {
      return { usuario: null, status: false };
    }
  }

  async validaEmail(emailNovo: string): Promise<boolean> {
    try {
      await this.localizarEmail(emailNovo);
      return false;
    } catch (error) {
      return true;
    }
  }


  async remover(id: string): Promise<RetornoObjDTO> {
    const usuario = await this.localizarID(id);

    return this.usuarioRepository.remove(usuario)
      .then((result) => {
        return <RetornoObjDTO>{
          return: usuario,
          message: "USUARIO excluido!"
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: usuario,
          message: "Houve um erro ao excluir." + error.message
        };
      });
  }

  async alterar(id: string, dados: alteraUsuarioDTO): Promise<RetornoCadastroDTO> {
    const pessoa = await this.localizarID(id);

    Object.entries(dados).forEach(
      ([chave, valor]) => {
        if (chave === 'id') {
          return;
        }

        pessoa[chave] = valor;
      }
    )

    return this.usuarioRepository.save(pessoa)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: pessoa.ID,
          message: "Pessoa alterado!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao alterar." + error.message
        };
      });
  }
}