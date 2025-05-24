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
  const usuarioCtx = useContext(UsuarioLogadoContext);

  const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setfUser(e.target.value);
  };

  const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
    setfSenha(e.target.value);
  };

  const RealizarLogin = async () => {
    setLoading(true);
    try {
      if (!usuarioCtx) {
        throw new Error("Contexto não encontrado");
      }

      const success = await usuarioCtx.login(fUser, fSenha);

      if (success) {
        navigate('/denuncia');
      } else {
        setmsgApi('Email ou senha inválidos');
      }
    } catch (error) {
      setmsgApi(error instanceof Error ? error.message : 'Erro ao fazer login');
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
          <br />
          Não tem conta ainda?
          <br />
          <Link to={'/registro'} className="botao-registro"> Registre-se aqui</Link>
          <br /><br />
          <Link to={'/esqueci-senha'} className="botao-registro">Esqueci minha senha!</Link>
        </div>
      </form>
    </div >
  );
}

export default Authentication;
