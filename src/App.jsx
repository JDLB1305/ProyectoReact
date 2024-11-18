import NavBar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
//import ItemListContainerWithHoc from "./components/itemListContainer/itemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import Contador from "./components/Ejemplos/Contador"
import ComponentePadre from "./components/Ejemplos/ComponentePadre"
import ComponenteHijo from "./components/Ejemplos/ComponenteHijo"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EjemploContadorId from "./components/Ejemplos/EjemploContadorId"
import EjemploFormulario from "./components/Ejemplos/EjemploFormulario"
import { CartContext, CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider> 
         <NavBar />

         <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Holaaa, Bienvenido"} /> } /> 
            <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Holaaa, Bienvenido"} />} />  
            <Route path="/detail/:idProduct" element={ <ItemDetailContainer />} />
            <Route path="/ejemplos" element={<EjemploFormulario /> } />
            <Route path="/carrito" element={<Cart />} />
           {/* <ItemDetailContainer /> */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
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
