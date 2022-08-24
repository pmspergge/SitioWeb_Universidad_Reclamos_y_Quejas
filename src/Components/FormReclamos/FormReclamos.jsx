import React from "react";

const FormReclamos = () => {
  return (
    <form>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Se requiere un nombre válido.</div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            required
          />
          <div className="invalid-feedback">Se requiere apellido válido.</div>
        </div>
        <div className="col-12">
          <label htmlFor="username" className="form-label">
            Nombre de usuario
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Nombre de usuario"
              required
            />
            <div className="invalid-feedback">
              Tu nombre de usuario es requerido.
            </div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email <span className="text-muted">(Opcional)</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="tu@example.com"
          />
          <div className="invalid-feedback">
            Ingresa una dirección de correo electrónico válida para
            actualizaciones de envío.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            required
          />
          <div className="invalid-feedback">
            Por favor introduce tu direccion de envio. Please enter your
            shipping address.
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="address2" className="form-label">
            Dirección 2 <span className="text-muted">(Opcional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Apartamento o suite"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="country" className="form-label">
            País
          </label>
          <select className="form-select" id="country" required="">
            <option>United States</option>
          </select>
          <div className="invalid-feedback">Selecciona un país válido.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            Estado
          </label>
          <select className="form-select" id="state" required="">
            <option>California</option>
          </select>
          <div className="invalid-feedback">Proporciona un estado válido.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Código postal
          </label>
          <input type="text" className="form-control" id="zip" required />
          <div className="invalid-feedback">Código postal requerido.</div>
        </div>
      </div>
      <button
        className="w-100 btn btn-primary btn-lg mt-3 mb-3 fs-6"
        type="submit"
      >
        Continuar con el pago
      </button>
    </form>
  );
};

export default FormReclamos;
