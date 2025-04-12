import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

function Authentication() {

    const [fUser, setfUser] = useState('');
    const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setfUser(e.target.value)
    }
    const [fSenha, setfSenha] = useState('');
    const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setfSenha(e.target.value)
    }

    const [msgApi, setmsgApi] = useState('');
    const navigate = useNavigate();

    const RealizarLogin = async () => {
        {
            let json = await api.Logar(fUser, fSenha);

            if (json.status) {
                alert('Bem vindo');
                // UsuarioLogadoCtx?.setName(json.usuario);

                navigate('/perfil');
            } else {
                setmsgApi(json.message);
            }
        }
    }

    const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        RealizarLogin();
    };


    return (
        <>
            <div>
                <form className="authentication" >
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleAddEmail}
                        required
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        onChange={handleAddSenha}
                        required
                    />
                    <button type="submit" className="button-login" onClick={(e) => { handleLoginClick }}>
                        Entrar
                    </button>
                    <Link to={'/registro'} className="botao-registro">Não tem conta ainda? <br />Registre-se aqui</Link>
                    <br />
                    Esqueci minha senha
                </form>
            </div >
        </>
    )
}

export default Authentication