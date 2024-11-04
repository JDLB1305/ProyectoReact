import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="text-center my-5">
                <h2>No hay productos aún</h2>
                <Link to="/" className="btn btn-primary mt-3">Seguir Comprando</Link>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Productos en el Carrito</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unidad</th>
                        <th scope="col">Precio Total</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((productCart) => (
                        <tr key={productCart.id}>
                            <td>
                                <img src={productCart.image[0]} width={100} alt={productCart.name} />
                            </td>
                            <td>{productCart.name}</td>
                            <td>{productCart.quantity}</td>
                            <td>${productCart.price.toFixed(2)}</td>
                            <td>${(productCart.quantity * productCart.price).toFixed(2)}</td>
                            <td>
                                <button onClick={() => deleteProductById(productCart.id)} className="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end">
                <h5>Total Compra: ${totalPrice().toFixed(2)}</h5>
                <button onClick={deleteCart} className="btn btn-warning">Eliminar Productos</button>
            </div>
        </div>
    );
}

export default Cart;
