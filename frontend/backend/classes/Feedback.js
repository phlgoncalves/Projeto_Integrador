export default class Feedback{
    constructor(comentario, resposta){
        this.comentario = comentario;
        this.resposta = resposta;
    }

    post(){
        return 'Comentário: ' + this.comentario
    }
}