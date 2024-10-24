import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="contenedor">
      {
        products.map( (product)=> (
            <Item product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default ItemList
