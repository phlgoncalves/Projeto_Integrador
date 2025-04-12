import { useState } from "react";
import { Link } from "react-router-dom"
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

function Authentication() {

    const [fUser, setfUser] = useState('');
    const [fSenha, setfSenha] = useState('');
    const [msgApi, setmsgApi] = useState('');
    const navigate = useNavigate();
    
    const RealizarLogin = async () => {
        {
            let json = await api.Logar(fUser, fSenha);

            if (json.status){
                alert('Bem vindo');
                //UsuarioLogadoCtx?.setName(json.usuario);

                navigate('/home');
            }else{
                setmsgApi(json.message);
            }
        }   
    }
    return (
        <>
            <div>
                <form className="authentication" >
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required
                    />
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha"
                        required
                    />
                    <button type="submit" className="button-login">
                        Entrar
                    </button>
                    <Link to={'/registro'} className="botao-registro">Não tem conta ainda? <br />Registre-se aqui</Link>
                    <br />
                    Esqueci minha senha
                </form>
            </div>
        </>
    )
}

export default Authentication