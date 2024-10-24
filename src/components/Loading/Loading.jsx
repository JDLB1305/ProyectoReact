import { PacmanLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <PacmanLoader className="spinner" color="darkorange"/>
      <h2>Cargando...</h2>
    </div>
  )
}

export default Loading