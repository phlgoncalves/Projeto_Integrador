export class ListaDenunciaDTO {
  constructor(
    readonly ID: string,
    readonly DESCRICAO: string,
    readonly FOTOS: string,
    readonly CEP: string,
    readonly ENDERECO: string,
    readonly COMPLEMENTO: string,
    readonly USUARIO: string,
  ) {}
}