import "./FormCheckout.css";

const FormCheckout = ({ dataForm, handleChnageInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="checkout-form">
      <h2>Completa tus datos para finalizar la compra</h2>

      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChnageInput}
          placeholder="Ingresa tu nombre completo"
          required
        />
      </div>

      <div className="form-group">
        <label>Teléfono:</label>
        <input
          type="number"
          name="phone"
          value={dataForm.phone}
          onChange={handleChnageInput}
          placeholder="Ingresa tu número de teléfono"
          required
        />
      </div>

      <div className="form-group">
        <label>Correo:</label>
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChnageInput}
          placeholder="Ingresa tu correo electrónico"
          required
        />
      </div>

      <div className="form-group">
        <label>Confirmar Correo:</label>
        <input
          type="email"
          name="confirmEmail"
          value={dataForm.confirmEmail}
          onChange={handleChnageInput}
          placeholder="Repite tu correo electrónico"
          required
        />
      </div>

      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default FormCheckout;
