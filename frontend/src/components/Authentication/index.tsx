// import { ChangeEvent, useState } from "react"
// import { Link } from "react-router-dom"
// import { api } from "../../api";
// import { useNavigate } from "react-router-dom";

// function Authentication() {

//     const [fUser, setfUser] = useState('');
//     const handleAddEmail = (e: ChangeEvent<HTMLInputElement>) => {
//         setfUser(e.target.value)
//     }
//     const [fSenha, setfSenha] = useState('');
//     const handleAddSenha = (e: ChangeEvent<HTMLInputElement>) => {
//         setfSenha(e.target.value)
//     }

//     const [msgApi, setmsgApi] = useState('');
//     const navigate = useNavigate();

//     const RealizarLogin = async () => {
//         {
//             let json = await api.Logar(fUser, fSenha);

//             if (json.status) {
//                 alert('Bem vindo');
//                 // UsuarioLogadoCtx?.setName(json.usuario);

//                 navigate('/perfil');
//             } else {
//                 setmsgApi(json.message);
//             }
//         }
//     }

//     const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         RealizarLogin();
//     };


//     return (
//         <>
//             <div>
//                 <form className="authentication" >
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         onChange={handleAddEmail}
//                         required
//                     />
//                     <label>Senha</label>
//                     <input
//                         type="password"
//                         name="senha"
//                         id="senha"
//                         onChange={handleAddSenha}
//                         required
//                     />
//                     <button type="submit" className="button-login" onClick={(e) => { handleLoginClick }}>
//                         Entrar
//                     </button>
//                     <div>
//                     Não tem conta ainda?
//                     <br />
//                     <Link to={'/registro'} className="botao-registro"> Registre-se aqui</Link>
//                     <br />
//                     <Link to={'/registro'} className="botao-registro">Esqueci minha senha</Link>
//                     </div>
//                 </form>
//             </div >
//         </>
//     )
// }

// export default Authentication


import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { api } from "../../api";

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


  const RealizarLogin = () => {
    // Simulação de um login falso
    if (fUser === 'admin@teste.com' && fSenha === '123') {
      localStorage.setItem('token', 'token-falso-123');
      alert('Login bem-sucedido (falso)');
      navigate('/denuncia');
    } else {
      setmsgApi('Usuário ou senha inválidos.');
    }
  };

//   const RealizarLogin = async () => {
//     const json = await api.Logar(fUser, fSenha);

//     if (json.status) {
//       localStorage.setItem('token', json.token); // aqui é onde salva o token
//       alert('Bem vindo');
//       navigate('/perfil');
//     } else {
//       setmsgApi(json.message || 'Erro ao fazer login');
//     }
//   };

  const handleLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await RealizarLogin();
  };

  return (
    <div>
      <form className="authentication">
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

        <button
          type="submit"
          className="button-login"
          onClick={(e) => handleLoginClick(e)}
        //   onClick={handleLoginClick}
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
    </div>
  );
}

export default Authentication;
