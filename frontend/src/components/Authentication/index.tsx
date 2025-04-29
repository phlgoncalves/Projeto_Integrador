import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";

function Authentication() {
  const [fUser, setfUser] = useState('');
  const [fSenha, setfSenha] = useState('');
  const [msgApi, setmsgApi] = useState('');
  const navigate = useNavigate();

  const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setfUser(e.target.value);
  };

  const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setfSenha(e.target.value);
  };

  // const isDevMode = true;

  // const RealizarLogin = async () => {
  //   if (isDevMode) {
  //     // Código simulado
  //     if (fUser === 'admin@email.com' && fSenha === '12345') {
  //       localStorage.setItem('token', 'fake-token-123456');
  //       alert('Login simulado!');
  //       navigate('/denuncia');
  //     } else {
  //       setmsgApi('Usuário ou senha inválidos.');
  //     }
  //   } else {
  //     // Chamada real para API
  //     try {
  //       const response = await fetch('http://localhost:3000/usuarios/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ email: fUser, senha: fSenha })
  //       });

  //       if (!response.ok) throw new Error('Credenciais inválidas');

  //       const data = await response.json();
  //       localStorage.setItem('token', data.access_token);
  //       alert('Login bem-sucedido!');
  //       navigate('/denuncia');
  //     } catch (error) {
  //       setmsgApi('Usuário ou senha inválidos.');
  //       console.error('Erro ao fazer login:', error);
  //     }
  //   }
  // };

  const RealizarLogin = async () => {
    try {
      const data = await api.Logar(fUser, fSenha);
      localStorage.setItem('token', data.access_token);
      alert('Login bem-sucedido!');
      navigate('/denuncia');
    } catch (error) {
      setmsgApi('Usuário ou senha inválidos.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <form className="authentication">
        <label>Email</label>
        <input
          type="email"
          onChange={handleAddEmail}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          onChange={handleAddSenha}
          required
        />

        <button
          type="submit"
          className="button-login"
          onClick={(e) => {
            e.preventDefault();
            RealizarLogin();
          }}
        >
          Entrar
        </button>

        {msgApi && <p style={{ color: 'red' }}>{msgApi}</p>}

        <div>
          Não tem conta ainda?
          <br />
          <Link to={'/registro'} className="botao-registro"> Registre-se aqui</Link>
          <br /><br /><br />
          <Link to={'/esqueci-senha'} className="botao-registro">Esqueci minha senha!</Link>
        </div>
      </form>
    </div >
  );
}

export default Authentication;
