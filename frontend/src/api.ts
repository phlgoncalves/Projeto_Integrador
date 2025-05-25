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

    CarregarUsuarioPorId: async (userId: string) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/usuarios/ID/${userId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Usuário não encontrado');

        const data = await response.json();
        return {
            NOME: data.NOME,
            EMAIL: data.EMAIL,
            DATANASC: data.DATANASC,
            CPF: data.CPF,
            TELEFONE: data.TELEFONE,
            CEP: data.CEP,
            RUA: data.RUA,
            NUMERO: data.NUMERO,
            BAIRRO: data.BAIRRO,
            COMPLEMENTO: data.COMPLEMENTO,
            CIDADE: data.CIDADE
        };
    },

    AtualizarUsuario: async (
        userId: string,
        nome: string,
        dataNascimento: string,
        email: string,
        cep: string,
        rua: string,
        numero: string,
        bairro: string,
        complemento: string,
        cidade: string,
        celular: string
    ) => {
        const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify({
                NOME: nome,
                DATANASC: dataNascimento,
                EMAIL: email,
                CEP: cep,
                RUA: rua,
                NUMERO: numero,
                BAIRRO: bairro,
                COMPLEMENTO: complemento,
                CIDADE: cidade,
                TELEFONE: celular
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao atualizar usuário');
        }

        return await response.json();
    },

    Logar: async (EMAIL: string, SENHA: string) => {
        const response = await fetch('http://localhost:3000/usuarios/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ EMAIL, SENHA })
        });

        if (!response.ok) throw new Error('Falha no login');

        return await response.json();
    },

    AdicionarDenuncia: async (
        descricao: string,
        fotos: string, // String fictícia
        cep: string,
        rua: string,
        numero: string,
        bairro: string,
        complemento: string,
        anonimato: boolean,
        usuarioId: string
    ) => {
        const response = await fetch('http://localhost:3000/denuncias', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token') || ''}`
            },
            body: JSON.stringify({
                DESCRICAO: descricao,
                FOTOS: fotos,
                CEP: cep,
                RUA: rua,
                NUMERO: numero,
                BAIRRO: bairro,
                COMPLEMENTO: complemento,
                ANONIMATO: anonimato,
                USUARIOID: usuarioId
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao cadastrar denúncia');
        }

        return await response.json();
    },

    CarregarTodasDenuncias: async () => {
        const response = await fetch('http://localhost:3000/denuncias');
        const data = await response.json();

        // Mapeia cada item para desserializar FOTOS e organizar campos
        return data.map((d: any) => ({
            id: d.ID,
            descricao: d.DESCRICAO,
            // fotos: JSON.parse(d.FOTOS),
            fotos: d.FOTOS, // Agora é tratado como string direta
            cep: d.CEP,
            rua: d.RUA,
            numero: d.NUMERO,
            bairro: d.BAIRRO,
            complemento: d.COMPLEMENTO,
            usuario: d.USUARIO,
            anonimato: d.ANONIMATO
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