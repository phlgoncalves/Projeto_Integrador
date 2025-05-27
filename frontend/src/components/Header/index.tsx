import Dengueimg from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function Header() {
  const usuarioCtx = useContext(UsuarioLogadoContext);

  const handleLogout = () => {
    if (usuarioCtx) {
      usuarioCtx.logout();
      // Redireciona para a página inicial após logout (opcional)
      window.location.href = "/"; // Usamos window.location para recarregar a página e limpar estados
    }
  };

  return (
    <header className="top-header">
      <div>
        <Link to="/">
          <img src={Dengueimg} alt="Logo Dengue" className="logo-img" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/quem-somos">Quem Somos</Link>
        
        {/* Mostra Perfil e Denúncia apenas se estiver logado */}
        {usuarioCtx?.isLogged ? (
          <>
            <Link to="/perfil">Perfil</Link>
            <Link to="/denuncia">Fazer Denúncia</Link>
            <button onClick={handleLogout} className="logout-button">
              Sair
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;

// // import Menu from "../Menu";
// import { useContext } from "react";
// import Dengueimg from "../../assets/logo-white.png";
// import { Link } from "react-router-dom";
// import { UsuarioLogadoContext } from "../../contexts/contextAuth";

// function Header() {
//   const usuarioCtx = useContext(UsuarioLogadoContext);
  

//   return (
//     <header className="top-header">
//       <div>
//         <Link to="/">
//           <img src={Dengueimg} alt="Logo Dengue" className="logo-img" />
//         </Link>
//       </div>


//       <nav className="nav-links">
//         <Link to="/quem-somos">Quem Somos</Link>

//         {usuarioCtx?.isLogged && (
//           <>
//             <Link to="/perfil">Perfil</Link>
//             <Link to="/denuncia">Fazer Denúncia</Link>
//           </>
//         )}

//         {!usuarioCtx?.isLogged && (
//           <Link to="/login">Login</Link>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Header;
