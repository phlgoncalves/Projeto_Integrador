export class ListaDenunciaDTO {
  constructor(
    readonly ID: string,
    readonly DESCRICAO: string,
    readonly FOTOS: string,
    readonly CEP: string,
    readonly RUA: string,
    readonly NUMERO: string,
    readonly COMPLEMENTO: string,
    readonly USUARIO: string,
  ) {}
}