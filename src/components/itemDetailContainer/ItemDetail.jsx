import "./itemDetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail-container">
      <img src={product.image} alt={product.name} className="item-detail-image" />
      <div className="item-detail-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="item-detail-price">Precio: ${product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail
