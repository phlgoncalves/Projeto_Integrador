import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function Authentication() {
  const [fUser, setfUser] = useState('');
  const [fSenha, setfSenha] = useState('');
  const [msgApi, setmsgApi] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setfUser(e.target.value);
  };

  const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setfSenha(e.target.value);
  };

  const usuarioCtx = useContext(UsuarioLogadoContext);

  const RealizarLogin = async () => {
    setLoading(true);
    try {
      const data = await api.Logar(fUser, fSenha);
      localStorage.setItem('token', data.access_token);

      if (usuarioCtx) {
        usuarioCtx.setName(data.nome); // salva o nome do usuário
      }
      
      alert('Login bem-sucedido!');
      navigate('/denuncia');
    } catch (error) {
      setmsgApi('Usuário ou senha inválidos.');
      console.error('Erro ao fazer login:', error);
    } finally {
      setLoading(false);
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
          disabled={loading}
        >
          {loading ? 'Enrtando...' : 'Entrar'}
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
