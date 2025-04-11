import { Link } from "react-router-dom"

function Authentication() {
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