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
    <a href="#quem-somos">Quem Somos</a>
    <a href="#login">Login</a>
    <button id="btnDenunciaHeader">Fazer Denúncia</button>
  </nav>
</header>
  );
}

export default Header;
