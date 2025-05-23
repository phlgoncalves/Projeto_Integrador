export const api = {
    AdicionarUsuarios: async (
        NOME: string,
        DATANASC: string,
        EMAIL: string,
        CEP: string,
        RUA: string,
        NUMERO: string,
        BAIRRO: string,
        COMPLEMENTO: string,
        CIDADE: string,
        CPF: string,
        TELEFONE: string,
        SENHA: string
    ) => {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                NOME,
                DATANASC,
                EMAIL,
                CEP,
                RUA,
                NUMERO,
                BAIRRO,
                COMPLEMENTO,
                CIDADE,
                CPF,
                TELEFONE,
                SENHA
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao cadastrar usuário');
        }

        return await response.json();
    },

    CarregarTodosUsuarios: async () => {
        const response = await fetch('http://localhost:3000/usuarios');
        const data = await response.json();

        const usuarios = data.map((u: any) => ({
            id: u.ID,
            nome: u.NOME,
            cpf: u.CPF,
            dataNascimento: u.DATANASC,
            email: u.EMAIL,
            cep: u.CEP,
            rua: u.RUA,
            numero: u.NUMERO,
            bairro: u.BAIRRO,
            complemento: u.COMPLEMENTO,
            cidade: u.CIDADE,
            telefone: u.TELEFONE
        }));
        return usuarios;
    },
    Logar: async (EMAIL: string, SENHA: string) => {
        const response = await fetch('http://localhost:3000/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ EMAIL, SENHA })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Falha no login: ${errorText}`);
        }

        return await response.json();
    },

    AdicionarDenuncia: async (
        descricao: string,
        fotos: string,
        cep: string,
        complemento: string,
        anonimato: boolean,
        usuarioId: string
    ) => {
        const response = await fetch('http://localhost:3000/denuncias', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                descricao,
                fotos,
                cep,
                complemento,
                anonimato,
                usuarioId
            })
        });
        return await response.json();
    },

    CarregarTodasDenuncias: async () => {
        const response = await fetch('http://localhost:3000/denuncias');
        const data = await response.json();

        // Mapeia cada item para desserializar FOTOS e organizar campos
        return data.map((d: any) => ({
            id: d.ID,
            descricao: d.DESCRICAO,
            fotos: JSON.parse(d.FOTOS), // transforma string JSON em array
            cep: d.CEP,
            rua: d.RUA,
            numero: d.NUMERO,
            complemento: d.COMPLEMENTO,
            usuario: d.USUARIO
        }));
    },

    CarregarDenunciaUnica: async (param: string) => {
        const response = await fetch(`http://localhost:3000/denuncias/${param}`);
        return await response.json();
    },

    DeletarDenunciaUnica: async (param: string) => {
        const response = await fetch(`http://localhost:3000/denuncias/${param}`, {
            method: 'DELETE',
        });
        return await response.json();
    }
};