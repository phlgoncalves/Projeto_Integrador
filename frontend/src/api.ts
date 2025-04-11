export const api = {
    AdicionarUsuarios: async (name: string, dataNasc: string, email: string, cep: string, complemento: string, cpf: string, cel: string, senha: string, confirmSenha: string) => {
        let response = await fetch('##',
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        name,
                        dataNasc,
                        email,
                        cep,
                        complemento,
                        cpf,
                        cel,
                        senha,
                        confirmSenha,
                        userId: 1
                    }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        let json = await response.json()

        console.log(json);
        return json


    },

    Login: async (email: string, senha: string) => {
        let response = await fetch('##',
            {
                method: 'POST',
                body: JSON.stringify
                    ({

                        email,
                        senha,
                    }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        let json = await response.json()

        console.log(json);
        return json


    },

    CarregarTodosUsuarios: async () => {
        let response = await fetch(`##`)
        let json = await response.json();
        return json;
    },

    AdicionarDenuncia: async (descricao: string, fotos: string, cep: string, complemento: string, anonimato: boolean, usuarioId: string) => {
        let response = await fetch('##',
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        descricao,
                        fotos,
                        cep,
                        complemento,
                        anonimato,
                        usuarioId
                    }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        let json = await response.json()

        console.log(json);
        return json


    },

    CarregarTodasDenuncias: async () => {
        let response = await fetch(`##`)
        let json = await response.json();
        return json;
    },

    CarregarDenunciaUnica: async (param: string) => {
        let response = await fetch(`##/${param}`)
        let json = await response.json();
        return json;
    },
    Logar: async (username: string, password: string) => {
        {
            let response = await fetch('##',
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({
                            email: username,
                            senha: password
                        }),
                    headers: {
                        'Content-Type': 'application/json; charset-utf-8'
                    }
                }
            );
            let json = await response.json();

            console.log(json);
            return json;

        }
    }

}