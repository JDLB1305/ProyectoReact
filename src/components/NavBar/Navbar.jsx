import CartWidget from "./CarWidget"
import logo from "../../assets/logo.avif" 
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <Link to="/" className="brand">
            <img className="logo" src={ logo } alt="" />
                <h2> Slayer Store</h2>
            </Link>
            
            <ul>
                <li>
                    <Link to="/category/Shirts">Shirts</Link>
                </li>
                <li>
                    <Link to="/category/Hoddies">Hoddies</Link>
                </li>
                <li>
                    <Link to="/category/Socks">Sock's</Link>
                </li>
                <li>Accesories</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar
//export { NavBar }