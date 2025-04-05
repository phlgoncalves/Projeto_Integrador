export class ListaDenunciaDTO {
  constructor(
    readonly id: string,
    readonly descricao: string,
    readonly fotos: string,
    readonly cep: string,
    readonly endereco: string,
    readonly complemento: string,
    readonly usuario: string,
  ) {}
}