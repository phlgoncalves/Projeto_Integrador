// import { useEffect, useState } from 'react';
// import '../styles/style.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// interface Usuario {
//     nome: string;
//     email: string;
//     dataNascimento: string;
//     cpf: string;
//     celular: string;
//     cep: string;
// }

// export default function Perfil() {
//     const [usuario, setUsuario] = useState<Usuario | null>(null);

//     useEffect(() => {
//         //  chamada a API fake
//         const usuarioExemplo: Usuario = {
//             nome: 'João da Silva',
//             email: 'joao@gmail.com',
//             dataNascimento: '1990-01-01',
//             cpf: '123.456.789-00',
//             celular: '(11) 91234-5678',
//             cep: '12345-678',
//         };
//         setUsuario(usuarioExemplo);
//     }, []);

//     if (!usuario) return <p>Carregando perfil...</p>;

//     return (
//         <>
//             <Header />
//             <div className="perfil-container">
//                 <h2>Meu Perfil</h2>
//                 <div className="perfil-card">
//                     <p><strong>Nome:</strong> {usuario.nome}</p>
//                     <p><strong>Email:</strong> {usuario.email}</p>
//                     <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
//                     <p><strong>CPF:</strong> {usuario.cpf}</p>
//                     <p><strong>Celular:</strong> {usuario.celular}</p>
//                     <p><strong>CEP:</strong> {usuario.cep}</p>
//                 </div>
//                 <button className="editar-btn">Editar Perfil</button>
//             </div>
//             <Footer />
//         </>
//     );
// }



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
    const [editando, setEditando] = useState(false);
    const [formData, setFormData] = useState<Usuario>({
        nome: '',
        email: '',
        dataNascimento: '',
        cpf: '',
        celular: '',
        cep: '',
    });

    useEffect(() => {
        // Simula chamada API
        const usuarioExemplo: Usuario = {
            nome: 'João da Silva',
            email: 'joao@gmail.com',
            dataNascimento: '1990-01-01',
            cpf: '123.456.789-00',
            celular: '(11) 91234-5678',
            cep: '12345-678',
        };
        setUsuario(usuarioExemplo);
        setFormData(usuarioExemplo);
    }, []);

    if (!usuario) return <p>Carregando perfil...</p>;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSalvar() {
        setUsuario(formData);
        setEditando(false);
    }

    return (
        <>
            <Header />
            <div className="perfil-page">
                <div className="perfil-card">
                    <h2>Meu Perfil</h2>
                    {editando ? (
                        <div className="perfil-info">
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder="Nome"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <input
                                type="date"
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                                placeholder="Data de Nascimento"
                            />
                            <input
                                type="text"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                placeholder="CPF"
                            />
                            <input
                                type="text"
                                name="celular"
                                value={formData.celular}
                                onChange={handleChange}
                                placeholder="Celular"
                            />
                            <input
                                type="text"
                                name="cep"
                                value={formData.cep}
                                onChange={handleChange}
                                placeholder="CEP"
                            />
                        </div>
                    ) : (
                        <div className="perfil-info">
                            <p><strong>Nome:</strong> {usuario.nome}</p>
                            <p><strong>Email:</strong> {usuario.email}</p>
                            <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
                            <p><strong>CPF:</strong> {usuario.cpf}</p>
                            <p><strong>Celular:</strong> {usuario.celular}</p>
                            <p><strong>CEP:</strong> {usuario.cep}</p>
                        </div>
                    )}

                    {editando ? (
                        <button className="editar-btn" onClick={handleSalvar}>Salvar</button>
                    ) : (
                        <button className="editar-btn" onClick={() => setEditando(true)}>Editar Perfil</button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}