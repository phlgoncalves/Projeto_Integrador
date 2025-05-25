// import Menu from "../Menu";
import Dengueimg from "../../assets/logo-white.png";
import { Link } from "react-router-dom";

function Header() {
  
  return (
<header className="top-header">
    <div> 
          <Link to="/"> 
            <img src={Dengueimg} alt="Logo Dengue" className="logo-img" /> 
          </Link>
    </div>


  <nav className ="nav-links">
    <a href="quem-somos">Quem Somos</a>
    <a href="perfil">Perfil</a>
    <a href="login">Login</a>
    <button id="btnDenunciaHeader"><a href="denuncia">Fazer Denúncia</a></button>
  </nav>
</header>
  );
}

// Não apagar, vou usar na sala para refatoração
// {usuarioCtx?.isLogged && (
//     <Link to="/perfil" className="header-link">Perfil</Link>
// )}

export default Header;
