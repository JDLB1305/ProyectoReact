import { useState, useEffect } from "react"
import ItemList from "./itemList.jsx"
import useProducts from "../../hooks/useProducts.jsx"
import Loading from "../Loading/Loading.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2';
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemListContainer.css"

const ItemListContainer = ( { saludo } ) => {
    const [ products, setProducts ] = useState([])
    //const { products, loading } = useProducts()
    //const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    const getProducts = () =>{
        const productsRef = collection( db, "products" )
        getDocs(productsRef)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })

                setProducts(productsDb)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection( db, "products" )
        const queryCategories = query( productsRef, where("category", "==", idCategory) )
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })

                setProducts(productsDb)
            })
    }

    useEffect(() =>{
        //setLoading(true)

        /* Swal.fire({
            title: 'Cargando...',
            text: 'Por favor espera un momento',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        }); */
        if (idCategory) {
            getProductsByCategory()
        } else {
            getProducts()
        }
/*             .then((data) => {
                if (idCategory) {
                    const filterProducts = data.filter( (product)=> product.category === idCategory)
                    setProducts(filterProducts)
                } else {
                    setProducts(data)
                }
            })
            .catch((error) =>{
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
                Swal.close();
            })     */
    }, [idCategory])

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )
}

/* const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc */
export default ItemListContainer