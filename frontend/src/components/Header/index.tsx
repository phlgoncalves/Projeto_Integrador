import Menu from "../Menu"
import Dengueimg from "../../assets/logo-white.png"
import { Link } from "react-router-dom"


function Header() {
    
    return (
        <>
            <div className="container-header">
                <div className="logo-header">
                    <Link to={"/"}>
                        <img src={Dengueimg} alt="" className="logo-img" />
                    </Link>
                </div>
                <div className="menu-header">
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Header
