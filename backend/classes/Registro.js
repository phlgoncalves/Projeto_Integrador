export default class Registro{
    constructor(nome, telefone, cpf, cidade, rua, numero, bairro, email, senha ){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.email = email;
        this.senha = senha;
    }

    cadastro(){
        return 'Usuario '+ this.nome + ' do CPF' + this.cpf + ' cadastrado com sucesso \n'+'Seu telefone é: ' + this.telefone +
        '\nSeu endereço é: rua ' + this.rua + ' numero ' + this.numero + ', bairro ' + this.bairro + ', ' + this.cidade +
        '\nSeu email é: ' + this.email + ' e a senha cadastrada foi: ' + this.senha
    }

    login(email, senha){
        if (email === this.email) {
            if (senha === this.senha) {
                return 'Logado com sucesso'
            } else{
                return 'login inválido'
            }
        } else {
            return 'login inválido'
        }
    }
}