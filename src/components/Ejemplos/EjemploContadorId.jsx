import { useEffect, useState } from "react"

const EjemploContadorId = () => {
    const [count, SetCount] = useState(1)

    const handleClickButton = () => {
        SetCount( (prevCount) => prevCount + 1 )
    }

    useEffect(()=> {
        const buttomAdd = document.getElementById("buttonAdd")
        
        buttomAdd.addEventListener("click", handleClickButton)

        return () => {
            buttomAdd.removeEventListener("click", handleClickButton)
        }
    },[])


    return (
        <div>
            <p>{count}</p>
            <button id="buttonAdd">+</button>
        </div>
  )
}

export default EjemploContadorId