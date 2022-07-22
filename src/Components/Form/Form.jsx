import React from "react";
import "./form.css";
export default function Form() {
  return (
    <div className="container-form">
      <form className="container-form-main">
        <div className="container-form-information">
          <h1 className="title-form">Crear una cuenta</h1>
          <div className="container-form-details-person">
            <div className="container-form-date-per container-input-duo">
              <div className="container-input-name">
                <label htmlFor="inputName">Nombres</label>
                <input type="text" id="inputName" placeholder="Tu nombre" />
              </div>
              <div className="container-input-lastname">
                <label htmlFor="inputApellidos">Apellidos</label>
                <input
                  type="text"
                  id="inputApellidos"
                  placeholder="Tu apellido"
                />
              </div>
            </div>
            <div className="container-form-date-per">
              <label htmlFor="inputEmail">Correo electrónico</label>
              <input
                type="email"
                id="inputEmail"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="container-form-date-per">
              <label htmlFor="inputPass">Contraseña</label>
              <input
                type="password"
                id="inputPass"
                placeholder="Ingrese una contraseña"
              />
            </div>
          </div>
          <div className="container-form-terms">
            <input type="checkbox" />
            <span className="text-conditions-form">
              Aceptar terminos y condiciones, Ver aqui.
            </span>
          </div>
          <div className="container-form-button-send">
            <button type="submit">Registrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
