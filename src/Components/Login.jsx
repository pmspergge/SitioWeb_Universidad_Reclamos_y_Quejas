import React from 'react'

export default function Login() {
  return (
    <div className="container-form">
      <form className="container-form-main">
        <div className="container-form-information">
          <h1 className="title-form">Login Usuario</h1>
          <div className="container-form-details-person">
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
          <div className="container-form-button-send">
            <button type="submit">Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  )
}
