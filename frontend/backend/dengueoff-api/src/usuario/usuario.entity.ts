/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as bcrypt from 'bcrypt';

export class UsuarioEntity {
  id: string;
  nome: string;
  dataNasc: Date;
  email: string;
  telefone: string;
  senha: string;
  constructor(
    id: string,
    nome: string,
    dataNasc: Date,
    email: string,
    telefone: string,
    senha: string,
  ) {
    const saltOrRounds = 10;

    this.id = id;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.email = email;
    this.telefone = telefone;
    this.senha = bcrypt.hashSync(senha, saltOrRounds);
  }

  trocarSenha(senhaNova) {
    const saltOrRounds = 10;
    this.senha = bcrypt.hashSync(senhaNova, saltOrRounds);
  }

  login(senha) {
    return bcrypt.compareSync(senha, this.senha);
  }
}
