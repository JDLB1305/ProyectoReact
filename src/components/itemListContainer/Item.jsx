const Item = ({ product }) => {
  return (
    <div>
    <img src={product.image} alt="" />
    <h2>{product.name}</h2>
    <p>Precio: ${product.price}</p>
</div>
  )
}

export default Item
