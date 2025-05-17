// import Menu from "../Menu"
// import Dengueimg from "../../assets/logo-white.png"
// import { Link } from "react-router-dom"


// function Header() {
    
//     return (
//         <>
//             <div className="container-header">
//                 <div className="logo-header">
//                     <Link to={"/"}>
//                         <img src={Dengueimg} alt="" className="logo-img" />
//                     </Link>
//                 </div>
//                 <div className="menu-header">
//                     <Menu />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header


import { Link } from "react-router-dom";
import Menu from "../Menu";
import Dengueimg from "../../assets/logo-white.png";

function Header() {
  return (
    <header className="container-header">
      <div className="logo-header">
        <Link to="/">
          <img src={Dengueimg} alt="Logo Dengue" className="logo-img" />
        </Link>
      </div>
      <nav className="menu-header">
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
