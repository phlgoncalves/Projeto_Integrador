export default class Denuncias {
    constructor(descricao, fotos, rua, bairro, anonimato) {
        this.descricao = descricao;
        this.fotos = fotos;
        this.rua = rua;
        this.bairro = bairro;
        this.anonimato = anonimato;
    }

    denuncia() {
        return 'DENUNCIA: ' + this.descricao + 'localizado na rua ' + this.rua + ' no bairro ' + this.bairro
    }

    anonimo() {
        if (this.anonimato == true) {
            return 'Essa denúncia é anônima'
        } else {
            return 'Essa denúncia não será anônima'
        }
    }
}