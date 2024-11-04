import iconCart from "../../assets/carrito.png" 
import { BiAccessibility } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/carrito" className="compra">
            <img src={ iconCart } style={ quantity === 0 ? { backgroundColor: "blue"} : {backgroundColor: "lime"} } alt="" />
            <p>{ quantity >= 1 && quantity }</p>
            <BiAccessibility size={50} color="lime"/>
        </Link>
    )
}

export default CartWidget