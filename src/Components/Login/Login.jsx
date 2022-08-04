import React from "react";
import { useRef, useState, useEffect } from "react";
export default function Login() {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      setErrMsg("Entradas inválidas");
      return;
    }
  };
  return (
    <div className="container-form">
      <form className="container-form-main" onSubmit={handleSubmit}>
        <div className="container-form-information">
          {errMsg ? (
            <p
              className="container_msg_error"
              ref={errRef}
              aria-live="assertive"
            >
              <span>&#128226; </span>
              {errMsg}
            </p>
          ) : (
            ""
          )}
          <h1 className="title-form">Iniciar Sesión</h1>
          <div className="container-form-details-person">
            <div className="container-form-date-per">
              <label htmlFor="inputEmail">Correo electrónico</label>
              <input
                type="email"
                id="inputEmail"
                placeholder="Ingresa tu correo"
                required
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="container-form-date-per">
              <label htmlFor="inputPass">Contraseña</label>
              <input
                type="password"
                id="inputPass"
                placeholder="Ingresa tu contraseña"
                required
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
          </div>
          <div className="container-form-button-send">
            <button type="submit">Ingresar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
