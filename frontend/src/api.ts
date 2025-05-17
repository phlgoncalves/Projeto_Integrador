export const api = {
    AdicionarUsuarios: async (name: string, dataNasc: string, email: string, cep: string, complemento: string, cpf: string, cel: string, senha: string, confirmSenha: string) => {
        const response = await fetch('##',
            {
                method: 'POST',
                body: JSON.stringify({
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

        const json = await response.json()

        console.log(json);
        return json


    },
    
    CarregarTodosUsuarios: async () => {
        const response = await fetch(`##`)
        const json = await response.json();
        return json;
    },

    AdicionarDenuncia: async (descricao: string, fotos: string, cep: string, complemento: string, anonimato: boolean, usuarioId: string) => {
        const response = await fetch('##',
            {
                method: 'POST',
                body: JSON.stringify({
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

        const json = await response.json()

        console.log(json);
        return json


    },

    CarregarTodasDenuncias: async () => {
        const response = await fetch(`##`)
        const json = await response.json();
        return json;
    },

    CarregarDenunciaUnica: async (param: string) => {
        const response = await fetch(`##/${param}`)
        const json = await response.json();
        return json;
    },

    Logar: async (email: string, senha: string) => {
        const response = await fetch('http://localhost:3000/usuarios/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({ email, senha })
        });
    
        if (!response.ok) {
          throw new Error('Falha no login');
        }
    
        return await response.json();
      }
    };