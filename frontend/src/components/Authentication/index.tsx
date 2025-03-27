import { Link } from "react-router-dom"
import { useState } from "react"

function Authentication() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        try {
            // Aqui você pode adicionar a chamada para sua API de autenticação
            console.log("Tentando fazer login com:", { email, senha })
            
            // Exemplo de validação básica
            if (!email || !senha) {
                alert("Por favor, preencha todos os campos")
                return
            }

            // Aqui você pode adicionar a lógica de autenticação
            // Por exemplo, chamar uma API de login

            let response = await fetch('http://localhost:3000/usuario/login', {
                method: 'POST',
                body: JSON.stringify({ email, senha }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())

            if (response.id) {
                alert("Login realizado com sucesso")
                localStorage.setItem('usuario', JSON.stringify(response))
                window.location.href = '/perfil';
            } else {
                alert("Login inválido")
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error)
            alert("Erro ao fazer login. Tente novamente.")
        }
    }

    return (
        <>
            <div>
                <form className="authentication" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
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