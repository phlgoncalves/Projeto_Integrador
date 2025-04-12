import { useEffect, useState } from 'react';
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Usuario {
    nome: string;
    email: string;
    dataNascimento: string;
    cpf: string;
    celular: string;
    cep: string;
}

export default function Perfil() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        //  chamada a API fake
        const usuarioExemplo: Usuario = {
            nome: 'João da Silva',
            email: 'joao@gmail.com',
            dataNascimento: '1990-01-01',
            cpf: '123.456.789-00',
            celular: '(11) 91234-5678',
            cep: '12345-678',
        };
        setUsuario(usuarioExemplo);
    }, []);

    if (!usuario) return <p>Carregando perfil...</p>;

    return (
        <>
            <Header />
            <div className="perfil-container">
                <h2>Meu Perfil</h2>
                <div className="perfil-card">
                    <p><strong>Nome:</strong> {usuario.nome}</p>
                    <p><strong>Email:</strong> {usuario.email}</p>
                    <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
                    <p><strong>CPF:</strong> {usuario.cpf}</p>
                    <p><strong>Celular:</strong> {usuario.celular}</p>
                    <p><strong>CEP:</strong> {usuario.cep}</p>
                </div>
                <button className="editar-btn">Editar Perfil</button>
            </div>
            <Footer />
        </>
    );
}