import { useContext, useState } from "react";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validateForm.js";
import Swal from 'sweetalert2';

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChnageInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    // Verificar si el email coinciden
    if (dataForm.email !== dataForm.confirmEmail) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Los e-mails no coinciden. Por favor, verifica e intenta nuevamente.',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#007bff',
          });
      return;
    }

    const order = {
      cliente: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    try {
      const response = await validateForm(dataForm);
      if (response.status === "error") throw new Error(response.message);

      console.log("👍");
      uploadOrder(order);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, newOrder)
      .then((response) => setIdOrder(response.id))
      .catch((error) => console.log(error))
      .finally(() => {
        updteStock();
      });
  };

  const updteStock = () => {
    cart.map(({ id, quantity, ...dataProduct }) => {
      const productRef = doc(db, "products", id);
      setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity });
    });

    deleteCart();
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChnageInput={handleChnageInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div className="card p-4 text-center shadow-sm bg-dark text-light">
          <h2 className="mb-4 text-success">¡Orden generada exitosamente!</h2>
          <div className="alert alert-info">
            <strong>Código de orden:</strong> {idOrder}
          </div>
          <Link to="/" className="btn btn-outline-danger mt-3">
            Volver al Inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
