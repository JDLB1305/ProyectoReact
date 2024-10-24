import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./itemList.jsx"

const ItemListContainer = ( { saludo } ) => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch((error) =>{
                console.error(error)
            })
            .finally(() => {
                console.log("finalizo la promesa")
            })    
    }, [])

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer