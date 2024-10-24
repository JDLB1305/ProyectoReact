import { useState, useEffect } from "react"
import ItemList from "./itemList.jsx"
import { getProducts } from "../../data/data.js"
import useProducts from "../../hooks/useProducts.jsx"
import Loading from "../Loading/Loading.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import { useParams } from "react-router-dom"
import "./itemListContainer.css"

const ItemListContainer = ( { saludo } ) => {
    const [ products, setProducts ] = useState([])
    //const { products, loading } = useProducts()
    const { idCategory } = useParams()

    useEffect(() =>{
        getProducts()
            .then((data) => {
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
                console.log("finalizo la promesa")
            })    
    }, [idCategory])

    return (
        <div>
            <h2>{saludo}</h2>
            {/* {
                loading === true ? <Loading /> : <ItemList products={products} />
            } */}
            <ItemList products={products} />
        </div>
    )
}

/* const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc */
export default ItemListContainer