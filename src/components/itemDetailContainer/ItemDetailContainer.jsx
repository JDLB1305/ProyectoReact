import { useEffect, useState } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()


    useEffect( ()=> {
        setLoading(true)

        Swal.fire({
          title: 'Espera...',
          text: 'Cargando detalles del producto',
          allowOutsideClick: false,
          didOpen: () => {
              Swal.showLoading();
          }
      });

        getProducts()
        .then( (data)=> {
            const findProduct = data.find( (product)=> product.id === idProduct )
            setProduct(findProduct)
        })
        .finally(() => {
          setLoading(false) 
          Swal.close();
        })
    }, [idProduct])

  return (
    <>
      {
        loading === true ? ( <div></div> ) : <ItemDetail product={product} />
      }
    </>
  )
}

export default ItemDetailContainer
