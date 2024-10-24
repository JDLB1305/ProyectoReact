import NavBar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
//import ItemListContainerWithHoc from "./components/itemListContainer/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import Contador from "./components/Ejemplos/Contador"
import ComponentePadre from "./components/Ejemplos/ComponentePadre"
import ComponenteHijo from "./components/Ejemplos/ComponenteHijo"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
           <Route path="/" element={<ItemListContainer saludo={"Holaaa, Bienvenido"} /> } /> 
           <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Holaaa, Bienvenido"} />} />  
           <Route path="/detail/:idProduct" element={ <ItemDetailContainer />} />
          {/* <ItemDetailContainer /> */}
        </Routes>
      </BrowserRouter>

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
