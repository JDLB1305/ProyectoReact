import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    const getProductById =() => {
      const docRef = doc( db, "products", idProduct )
      getDoc(docRef)
        .then((dataDb)=> {
          const productDb = { id: dataDb.id, ...dataDb.data() }

          setProduct(productDb)
        })

    }


    useEffect( ()=> {
      getProductById()
/*         setLoading(true)

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
        }) */
    }, [idProduct])

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer
