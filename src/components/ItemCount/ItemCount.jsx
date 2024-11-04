import { useState } from "react"

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickRest = () => {
        if (count > 1) {
            setCount( count - 1 )
        }
    }

    const handleClickAdd = () => {
        if (count < stock) {
            setCount( count + 1 )       
        }
    }

  return (
    <div className="d-flex flex-column align-items-center my-3">
      <div className="d-flex align-items-center mb-3">
        <button onClick={handleClickRest} className="btn btn-outline-danger mx-2">
          -
        </button>
        <p className="mb-0 h5">{count}</p>
        <button onClick={handleClickAdd} className="btn btn-outline-danger mx-2">
          +
        </button>
      </div>
      <button
        onClick={() => addProduct(count)}
        className="btn btn-danger">
        Agregar al Carrito
      </button>
    </div>

  )
}

export default ItemCount
