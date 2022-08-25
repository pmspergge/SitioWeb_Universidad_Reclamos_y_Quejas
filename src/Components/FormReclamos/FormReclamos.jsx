import React from "react";

const FormReclamos = () => {
  return (
    <div className="card p-3">
      <h2>PRESENTA TUS RECLAMOS</h2>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">
          Presenta tus reclamos mediante el siguiente formulario
        </li>
      </ol>
      <form>
        <div className="row g-3">
          <div className="col-sm-4">
            <label htmlFor="firstName" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              required
            />
            <div className="invalid-feedback">
              Se requiere un nombre válido.
            </div>
          </div>
          <div className="col-sm-4">
            <label htmlFor="lastName" className="form-label">
              Apellido Paterno
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
          <div className="col-sm-4">
            <label htmlFor="lastName" className="form-label">
              Apellido Materno
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
          <div className="col-md-4">
            <label htmlFor="address" className="form-label">
              Número / Teléfono
            </label>
            <input type="text" className="form-control" id="" required />
            <div className="invalid-feedback">
              Por favor introduce tu direccion de envio. Please enter your
              shipping address.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              Doc. de Identificación
            </label>
            <select className="form-select" id="state" required="">
              <option>DNI</option>
              <option>Libreta Militar</option>
              <option>Carnet de Extranjería</option>
            </select>
            <div className="invalid-feedback">
              Proporciona un estado válido.
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="zip" className="form-label">
              Núm. de Identificación
            </label>
            <input type="text" className="form-control" id="zip" required />
            <div className="invalid-feedback">
              Documento de identificación requerido.
            </div>
          </div>
          <div class="col-12">
            <label for="exampleFormControlTextarea1" class="form-label">
              Decripción del Reclamo
            </label>
            <textarea
              class="form-control"
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
