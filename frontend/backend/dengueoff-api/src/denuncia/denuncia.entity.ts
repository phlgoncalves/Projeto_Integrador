export class UsuarioEntity {
  id: string;
  descricao: string;
  fotos: string;
  email: string;
  endereco: string;
  cep: string;
  complemento: string;
  anonimato: boolean;
  constructor(
    id: string,
    descricao: string,
    fotos: string,
    email: string,
    endereco: string,
    cep: string,
    complemento: string,
    anonimato: boolean,
  ) {
    this.id = id;
    this.descricao = descricao;
    this.fotos = fotos;
    this.email = email;
    this.endereco = endereco;
    this.cep = cep;
    this.complemento = complemento;
    this.anonimato = anonimato;

  }

  denuncia(): string {
    const agora = new Date()
    return this.descricao +
      '\nEndereço: ' + this.endereco + ' - CEP ' + this.cep + ' ' + this.complemento +
      '\nEmail' + this.email +
      '\nFoto: ' + this.fotos +
      '\n' + agora
  }
}
