import * as bcrypt from 'bcrypt';

export class UsuarioEntity {
  id: string;
  nome: string;
  dataNasc: Date;
  email: string;
  endereco: string;
  cep: string;
  complemento: string;
  telefone: string;
  senha: string;
  constructor(
    id: string,
    nome: string,
    dataNasc: Date,
    email: string,
    endereco: string,
    cep: string,
    complemento: string,
    telefone: string,
    senha: string,
  ) {
    const saltOrRounds = 10;

    this.id = id;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.email = email;
    this.endereco = endereco;
    this.cep = cep;
    this.complemento = complemento;
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
