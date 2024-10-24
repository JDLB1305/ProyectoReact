import { Link } from "react-router-dom"
import "./itemListContainer.css"

const Item = ({ product }) => {
  return (
    <Link to={"/detail/" + product.id} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Precio: ${product.price}</p>
      </div>
    </Link>
  )
}

export default Item
