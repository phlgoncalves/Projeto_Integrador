import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/style.css"

export default function EsqueceuSenha() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro('');
        setMensagem('');

        if (!email) {
            setErro('Por favor, preencha o campo de e-mail.');
            return;
        }

        try {
            //  chamada para o backend
            const resposta = await fetch('http://localhost:3000/auth/recuperar-senha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (resposta.ok) {
                setMensagem('Instruções de redefinição de senha foram enviadas para seu e-mail.');
            } else {
                const data = await resposta.json();
                setErro(data.message || 'Erro ao enviar o e-mail.');
            }
        } catch (error) {
            setErro('Erro de conexão com o servidor.');
        }
    };

    return (
        <div className='container-esqueceuSenha'>
        <Header/>
            <div className="esqueci-senha-container">
                <h2>Esqueceu sua senha ?</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Digite seu e-mail cadastrado!</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {erro && <p className="erro">{erro}</p>}
                    {mensagem && <p className="sucesso">{mensagem}</p>}
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}