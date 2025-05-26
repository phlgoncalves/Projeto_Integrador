import { useContext, useEffect, useState } from 'react';
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UsuarioLogadoContext } from '../contexts/contextAuth';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

interface Usuario {
    NOME: string;
    EMAIL: string;
    DATANASC: string;
    CPF: string;
    TELEFONE: string;
    CEP: string;
    RUA: string;
    NUMERO: string;
    BAIRRO: string;
    COMPLEMENTO: string;
    CIDADE: string;
}

export default function Perfil() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [formData, setFormData] = useState<Partial<Usuario> | null>(null);
    const [editando, setEditando] = useState(false);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const usuarioCtx = useContext(UsuarioLogadoContext);
    const navigate = useNavigate();

    useEffect(() => {
        const carregarDados = async () => {
            console.log('🔄 Iniciando carregamento de perfil...');

            if (!usuarioCtx?.userId) {
                console.log('⚠️ usuarioCtx.userId ainda não disponível.');
                return;
            }

            try {
                console.log('📡 Buscando dados do usuário com ID:', usuarioCtx.userId);
                const dados = await api.CarregarUsuarioPorId(usuarioCtx.userId);
                console.log('✅ Dados recebidos:', dados);
                setUsuario(dados);
                setFormData(dados);
            } catch (err: any) {
                console.error('❌ Erro ao carregar perfil:', err);
                setErro('Erro ao carregar perfil: ' + err.message);
                usuarioCtx.logout();
                navigate('/login');
            } finally {
                console.log('🔚 Finalizando carregamento');
                setLoading(false);
            }
        };

        carregarDados();
    }, [usuarioCtx?.userId, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev!, [name]: value }));
    };

    const handleSalvar = async () => {
        if (!usuarioCtx?.userId || !formData) return;

        try {
            await api.AtualizarUsuario(
                usuarioCtx.userId,
                formData.NOME || '',
                formData.DATANASC || '',
                formData.EMAIL || '',
                formData.CEP || '',
                formData.RUA || '',
                formData.NUMERO || '',
                formData.BAIRRO || '',
                formData.COMPLEMENTO || '',
                formData.CIDADE || '',
                formData.TELEFONE || ''
            );

            // Atualiza o contexto se o nome foi alterado
            if (formData.NOME && usuarioCtx.name !== formData.NOME) {
                localStorage.setItem('username', formData.NOME);
                setUsuario(prev => prev ? { ...prev, NOME: formData.NOME! } : null);
            }

            setUsuario(formData as Usuario);
            setEditando(false);
            setShowSuccessModal(true);

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
                            <input type="text" name="NOME" value={formData.NOME || ''} onChange={handleChange} placeholder="Nome" />
                            <input type="email" name="EMAIL" value={formData.EMAIL || ''} onChange={handleChange} placeholder="Email" />
                            <input type="date" name="DATANASC" value={formData.DATANASC || ''} onChange={handleChange} placeholder="Data de Nascimento" />
                            <input type="text" name="CPF" value={formData.CPF || ''} onChange={handleChange} placeholder="CPF" disabled />
                            <input type="text" name="TELEFONE" value={formData.TELEFONE || ''} onChange={handleChange} placeholder="Telefone" />
                            <input type="text" name="CEP" value={formData.CEP || ''} onChange={handleChange} placeholder="CEP" />
                            <input type="text" name="RUA" value={formData.RUA || ''} onChange={handleChange} placeholder="Rua" />
                            <input type="text" name="NUMERO" value={formData.NUMERO || ''} onChange={handleChange} placeholder="Número" />
                            <input type="text" name="BAIRRO" value={formData.BAIRRO || ''} onChange={handleChange} placeholder="Bairro" />
                            <input type="text" name="COMPLEMENTO" value={formData.COMPLEMENTO || ''} onChange={handleChange} placeholder="Complemento" />
                            <input type="text" name="CIDADE" value={formData.CIDADE || ''} onChange={handleChange} placeholder="Cidade" />
                        </div>
                    ) : (
                        <table className="perfil-tabela">
                            <tbody>
                                <tr><th>Nome:</th><td>{usuario.NOME}</td></tr>
                                <tr><th>Email:</th><td>{usuario.EMAIL}</td></tr>
                                <tr><th>Data de Nascimento:</th><td>{usuario.DATANASC}</td></tr>
                                <tr><th>CPF:</th><td>{usuario.CPF}</td></tr>
                                <tr><th>Telefone:</th><td>{usuario.TELEFONE}</td></tr>
                                <tr><th>CEP:</th><td>{usuario.CEP}</td></tr>
                                <tr><th>Rua:</th><td>{usuario.RUA}</td></tr>
                                <tr><th>Número:</th><td>{usuario.NUMERO}</td></tr>
                                <tr><th>Bairro:</th><td>{usuario.BAIRRO}</td></tr>
                                <tr><th>Complemento:</th><td>{usuario.COMPLEMENTO}</td></tr>
                                <tr><th>Cidade:</th><td>{usuario.CIDADE}</td></tr>
                            </tbody>
                        </table>
                    )}

                    {editando ? (
                        <div className="btn-edit">
                            <button className="editar-btn" onClick={handleSalvar}>Salvar</button>
                            <button className="editar-btn" onClick={() => setEditando(false)}>Cancelar</button>
                        </div>
                    ) : (
                        <button className="editar-btn" onClick={() => setEditando(true)}>Editar Perfil</button>
                    )}
                </div>
            </div>
            <Footer />
            {showSuccessModal && (
                <div className="modal-overlay-alteracao">
                    <div className="modal">
                        <h3>Sucesso!</h3>
                        <p>Seu perfil foi atualizado com sucesso.</p>
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

