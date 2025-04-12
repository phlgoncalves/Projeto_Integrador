import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

function Authentication() {
    const [email, setEmail] = useState('');
    const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [senha, setSenha] = useState('');
    const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value)
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
                    <button type="submit" className="button-login" >
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