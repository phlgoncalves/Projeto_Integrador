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
    usuario.COMPLEMENTO = dados.CEP;
    usuario.TELEFONE = dados.TELEFONE;
    usuario.SENHA = dados.SENHA;

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
    const possivelUsuario = await this.localizarEmail(email)

    return {
      usuario: possivelUsuario ? (possivelUsuario.login(senha) ? possivelUsuario : null) : null,
      status: possivelUsuario ? possivelUsuario.login(senha) : false
    };
  }

  async validaEmail(emailNovo: string) {
    const possivelUsuario = await this.localizarEmail(emailNovo)

    return (possivelUsuario == null)
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

/*#usuarios: UsuarioEntity[] = [];

AdicionarUsuario(usuario: UsuarioEntity) {
  this.#usuarios.push(usuario);
}

get Usuarios() {
  return this.#usuarios;
}

atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
  const usuario = this.buscaPorID(id);

  Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
    if (valor === undefined) {
      return;
    }
    if (chave === 'id') {
      return;
    } else if (chave === 'senha') {
      usuario.trocarSenha(valor);
      return;
    }

    usuario[chave] = valor;
  });

  return usuario;
}

private buscaPorID(id: string) {
  const prossivelUsuario = this.#usuarios.find(
    (usuarioSalvo) => usuarioSalvo.id === id,
  );

  if (!prossivelUsuario) {
    throw new Error('Usuario não encontrado');
  }
  return prossivelUsuario;
}

private buscaPorEmail(email: string) {
  const prossivelUsuario = this.#usuarios.find(
    (usuarioSalvo) => usuarioSalvo.email === email,
  );

  if (!prossivelUsuario) {
    throw new Error('Usuario não encontrado');
  }
  return prossivelUsuario;
}

validarLogin(email: string, senha: string) {
  const usuario = this.buscaPorEmail(email);
  return {
    login: usuario.login(senha),
    usuario: usuario,
  };
}

removeUsuario(id: string) {
  const usuario = this.buscaPorID(id);

  this.#usuarios = this.#usuarios.filter(
    (usuarioSalvo) => usuarioSalvo.id !== id,
  );

  return usuario;
}

async validaEmail(email: string): Promise<boolean> {
  const possivelUsuario = this.#usuarios.find(
    (usuario) => usuario.email === email,
  );
  return possivelUsuario !== undefined;
}

async findById(id: string): Promise<UsuarioEntity> {
  console.log('Lista de usuários:', this.#usuarios);
  return this.buscaPorID(id);
} */

