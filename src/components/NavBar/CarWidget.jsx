import iconCart from "../../assets/carrito.png" 
import { BiAccessibility } from "react-icons/bi";

const CartWidget = () => {
    return (
        <div className="compra">
            <img src={ iconCart } alt="" />
            <p>1</p>
            <BiAccessibility size={70} color="lime"/>
        </div>
    )
}

export default CartWidget