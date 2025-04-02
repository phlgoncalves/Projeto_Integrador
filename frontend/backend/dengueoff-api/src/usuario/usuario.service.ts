import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioService {
  #usuarios: UsuarioEntity[] = [];

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

  validaEmail(email: string): boolean {
    const possivelUsuario = this.#usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario !== undefined;
  }
}
