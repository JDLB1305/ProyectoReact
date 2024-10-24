import NavBar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import Contador from "./components/Ejemplos/Contador"
import ComponentePadre from "./components/Ejemplos/ComponentePadre"
import ComponenteHijo from "./components/Ejemplos/ComponenteHijo"
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Holaaa, Bienvenido"} />

      {/* <Contador /> */}

{/*       <ComponentePadre>
        <h2>Jijija</h2>
        <p>huh?</p>
        <ComponenteHijo />
      </ComponentePadre> */}  
    </div>
  )
}

export default App
