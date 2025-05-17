export class listaUsuarioDTO {
  constructor(
    readonly ID: string,
    readonly NOME: string,
    readonly EMAIL: string,
  ) {}
}

export class ListagemUsuariosDTO{
    constructor(
        readonly usuario: listaUsuarioDTO[],
    ){}
}