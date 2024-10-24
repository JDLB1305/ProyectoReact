import { useState, useEffect } from "react"
import ContadorView from "./ContadorView"

const Contador = () => {
  //console.log("Se monto o se actualizo el componente")
    const [ contador, setContador ] = useState(0)
    const [toggle, setToggle] = useState(true)

    //let contador = 0

    const aumentar = () => {
        if ( contador < 10 ) {
            setContador( contador + 1 )
        }

    }

    const alternarToggle = () => {
      setToggle( !toggle )
    }

    useEffect( ()=> {
      console.log("1er UseEffect")
    }, [])

    useEffect( ()=> {
      console.log("2do UseEffect")
    }, [contador])

   /* useEffect( ()=> {
      
      const fetchApi = () => {
        fetch('https://fakestoreapi.com/products')
        .then( (respuesta) => respuesta.json() )
        .then( (data)=> console.log(data))
      }
  
      fetchApi()

    }, [] )*/
    

  return (
    <>
      <ContadorView contador={contador} aumentar={aumentar}/>
      <div>
        <p>Valor Toggle: { toggle.toString() }</p>
        <button onClick={ alternarToggle }>Alternar valor</button>
      </div>
    </>
  )
}

export default Contador
