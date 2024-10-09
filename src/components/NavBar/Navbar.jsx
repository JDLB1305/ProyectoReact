import CartWidget from "./CarWidget"
import logo from "../../assets/logo.avif" 
import "./navbar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="brand">
            <img className="logo" src={ logo } alt="" />
                <h2> Slayer Store</h2>
            </div>
            
            <ul>
                <li>Shirts</li>
                <li>T-Shirths</li>
                <li>Sock's</li>
                <li>Accesories</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar
//export { NavBar }