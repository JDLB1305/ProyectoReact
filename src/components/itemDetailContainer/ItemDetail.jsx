import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./itemDetail.css"
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image[0])

  const images = product.image.filter( (image) => image !== currentImage)

  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    setShowItemCount(false)
  }

  const [showItemCount, setShowItemCount] = useState(true)

  return (
    <div className="item-detail-container">
      <div className="item-detail-thumbnails">
        {
          images.map((image)=> (
            <img src={image} key={image} onClick={ () => setCurrentImage(image)} className="item-detail-image" alt="Imagen en Miniatura" />
          ))
        }
      </div>
      <div className="item-detail-content">
        <img src={currentImage} alt={product.name} className="item-detail-image" />
        <div className="detail-content">
          <h2>{product.name}</h2>
          <p className="item-detail-descrip">{product.description}</p>
          <p className="item-detail-price">Precio: ${product.price}</p>
          {
            showItemCount === true ? (
              <ItemCount stock={product.stock} addProduct={addProduct} />

            ) : (
              <Link to="/carrito">Terminar mi compra</Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
