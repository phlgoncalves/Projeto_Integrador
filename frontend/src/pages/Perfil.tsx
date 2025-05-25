import { useContext, useEffect, useState } from 'react';
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UsuarioLogadoContext } from '../contexts/contextAuth';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

interface Usuario {
    nome: string;
    email: string;
    dataNascimento: string;
    cpf: string;
    celular: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    complemento: string;
    cidade: string;
}

export default function Perfil() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [formData, setFormData] = useState<Usuario | null>(null);
    const [editando, setEditando] = useState(false);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');
    const usuarioCtx = useContext(UsuarioLogadoContext);
    const navigate = useNavigate();

    useEffect(() => {
        const carregarDados = async () => {
            if (!usuarioCtx?.userId) {
                navigate('/login'); // se não estiver logado
                return;
            }

            try {
                const dados = await api.CarregarUsuarioPorId(usuarioCtx.userId);
                setUsuario(dados);
                setFormData(dados);
            } catch (err: any) {
                setErro('Erro ao carregar perfil');
            } finally {
                setLoading(false);
            }
        };

        carregarDados();
    }, [usuarioCtx?.userId, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (formData) {
            setFormData(prev => ({ ...prev!, [name]: value }));
        }
    };

    const handleSalvar = async () => {
        if (!usuarioCtx?.userId || !formData) return;

        try {
            await api.AtualizarUsuario(
                usuarioCtx.userId,
                formData.nome,
                formData.dataNascimento,
                formData.email,
                formData.cep,
                formData.rua,
                formData.numero,
                formData.bairro,
                formData.complemento,
                formData.cidade,
                formData.cpf,
                formData.celular
            );
            setUsuario(formData);
            setEditando(false);
        } catch (error: any) {
            setErro(error.message || 'Erro ao salvar dados');
        }
    };

    if (loading) return <p>Carregando perfil...</p>;
    if (erro) return <p>{erro}</p>;
    if (!usuario || !formData) return null;

    return (
        <>
            <Header />
            <div className="perfil-page">
                <div className="perfil-card">
                    <h2>Meu Perfil</h2>
                    {editando ? (
                        <div className="perfil-info">
                            <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} placeholder="Data de Nascimento" />
                            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" />
                            <input type="text" name="celular" value={formData.celular} onChange={handleChange} placeholder="Celular" />
                            <input type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" />
                            <input type="text" name="rua" value={formData.rua} onChange={handleChange} placeholder="Rua" />
                            <input type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="Número" />
                            <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Bairro" />
                            <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} placeholder="Complemento" />
                            <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" />
                        </div>
                    ) : (
                        <table className="perfil-tabela">
                            <tbody>
                                <tr><th>Nome:</th><td>{usuario.nome}</td></tr>
                                <tr><th>Email:</th><td>{usuario.email}</td></tr>
                                <tr><th>Data de Nascimento:</th><td>{usuario.dataNascimento}</td></tr>
                                <tr><th>CPF:</th><td>{usuario.cpf}</td></tr>
                                <tr><th>Celular:</th><td>{usuario.celular}</td></tr>
                                <tr><th>CEP:</th><td>{usuario.cep}</td></tr>
                                <tr><th>Rua:</th><td>{usuario.rua}</td></tr>
                                <tr><th>Número:</th><td>{usuario.numero}</td></tr>
                                <tr><th>Bairro:</th><td>{usuario.bairro}</td></tr>
                                <tr><th>Complemento:</th><td>{usuario.complemento}</td></tr>
                                <tr><th>Cidade:</th><td>{usuario.cidade}</td></tr>
                            </tbody>
                        </table>
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
//     const [editando, setEditando] = useState(false);
//     const [formData, setFormData] = useState<Usuario>({
//         nome: '',
//         email: '',
//         dataNascimento: '',
//         cpf: '',
//         celular: '',
//         cep: '',
//     });

//     useEffect(() => {
//         // Simula chamada API
//         const usuarioExemplo: Usuario = {
//             nome: 'João da Silva',
//             email: 'joao@gmail.com',
//             dataNascimento: '1990-01-01',
//             cpf: '123.456.789-00',
//             celular: '(11) 91234-5678',
//             cep: '12345-678',
//         };
//         setUsuario(usuarioExemplo);
//         setFormData(usuarioExemplo);
//     }, []);

//     if (!usuario) return <p>Carregando perfil...</p>;

//     function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     }

//     function handleSalvar() {
//         setUsuario(formData);
//         setEditando(false);
//     }

//     return (
//         <>
//             <Header />
//             <div className="perfil-page">
//                 <div className="perfil-card">
//                     <h2>Meu Perfil</h2>
//                     {editando ? (
//                         <div className="perfil-info">
//                             <input
//                                 type="text"
//                                 name="nome"
//                                 value={formData.nome}
//                                 onChange={handleChange}
//                                 placeholder="Nome"
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Email"
//                             />
//                             <input
//                                 type="date"
//                                 name="dataNascimento"
//                                 value={formData.dataNascimento}
//                                 onChange={handleChange}
//                                 placeholder="Data de Nascimento"
//                             />
//                             <input
//                                 type="text"
//                                 name="cpf"
//                                 value={formData.cpf}
//                                 onChange={handleChange}
//                                 placeholder="CPF"
//                             />
//                             <input
//                                 type="text"
//                                 name="celular"
//                                 value={formData.celular}
//                                 onChange={handleChange}
//                                 placeholder="Celular"
//                             />
//                             <input
//                                 type="text"
//                                 name="cep"
//                                 value={formData.cep}
//                                 onChange={handleChange}
//                                 placeholder="CEP"
//                             />
//                         </div>
//                     ) : (
//                         <table className="perfil-tabela">
//                             <tbody>
//                                 <tr>
//                                     <th>Nome:</th>
//                                     <td>{usuario.nome}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Email:</th>
//                                     <td>{usuario.email}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Data de Nascimento:</th>
//                                     <td>{usuario.dataNascimento}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>CPF:</th>
//                                     <td>{usuario.cpf}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Celular:</th>
//                                     <td>{usuario.celular}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>CEP:</th>
//                                     <td>{usuario.cep}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     )}

//                     {editando ? (
//                         <button className="editar-btn" onClick={handleSalvar}>Salvar</button>
//                     ) : (
//                         <button className="editar-btn" onClick={() => setEditando(true)}>Editar Perfil</button>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }
