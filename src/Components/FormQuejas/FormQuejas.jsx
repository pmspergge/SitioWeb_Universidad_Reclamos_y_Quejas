import React from "react";

const FormReclamos = () => {
  return (
    <div className="card p-3">
      <h2>PRESENTA TUS QUEJAS</h2>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">
          Presenta tus quejas mediante el siguiente formulario.
        </li>
      </ol>
      <form>
        <div className="row g-3">
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
              Correo electrónico
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
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Escribir..."
            ></textarea>
          </div>
        </div>
        <button
          className="w-100 btn btn-success btn-lg mt-3 fs-6"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormReclamos;
