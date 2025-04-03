import { UsuarioEntity } from "src/usuario/usuario.entity";

export class DenunciaEntity {
  id: string;
  descricao: string;
  fotos: string;
  endereco: string;
  cep: string;
  complemento: string;
  anonimato: boolean;
  usuario: UsuarioEntity;
  constructor(
    id: string,
    descricao: string,
    fotos: string,
    endereco: string,
    cep: string,
    complemento: string,
    anonimato: boolean,
    usuario: UsuarioEntity,
  ) {
    this.id = id;
    this.descricao = descricao;
    this.fotos = fotos;
    this.endereco = endereco;
    this.cep = cep;
    this.complemento = complemento;
    this.anonimato = anonimato;
    this.usuario = usuario;
  }

  denuncia(): string {
    const agora = new Date()
    return this.descricao +
      '\nEndereço: ' + this.endereco + ' - CEP ' + this.cep + ' ' + this.complemento +
      '\nEmail' + this.usuario.email +
      '\nFoto: ' + this.fotos +
      '\n' + agora
  }
}
