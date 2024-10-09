import NavBar from "./components/NavBar/Navbar"
import imagenes from "./assets/Gato.jpg"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import Contador from "./components/Ejemplos/Contador"
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Holaaa, Bienvenido"} />

      {/* <Contador /> */}
    </div>
  )
}

export default App
