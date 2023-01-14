import React, { useRef, useState, useEffect } from "react";
import "./form.css";
import Preloader from "../Preloader/Preloader";
// REGEX
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

import axios from "../../api/axios";
const REGISTER_URL = "/register";

export default function Form() {
  const emailRef = useRef();
  const errRef = useRef();
  const [preloader, setPreloader] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPreloader(true);
    if (!email || !pwd || !EMAIL_REGEX.test(email) || !PWD_REGEX.test(pwd)) {
      setErrMsg("Entradas inválidas");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user: email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
      //limpiar todos los inputs
      setEmail("");
      setPwd("");
      alert("Se registro el usuario");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sin respuesta del servidor");
      } else if (err.response?.status === 409) {
        setErrMsg("El email ya se encuentra registrado");
      } else {
        setErrMsg("El registro ha fallado");
      }
      errRef.current.focus();
    } finally {
      setPreloader(false);
    }
  };
  return (
    <div className="container-form" id="form_register">
      <form className="container-form-main" onSubmit={handleSubmit}>
        <div className="container-form-information">
          <p
            className={
              errMsg
                ? "container_msg_error msg_err_active"
                : "container_msg_error"
            }
            ref={errRef}
            aria-live="assertive"
          >
            <span>&#128226; </span>
            {errMsg}
          </p>
          <h1 className="title-form">Crear una cuenta</h1>
          <div className="container-form-details-person">
            <div className="container-form-date-per">
              <label htmlFor="inputEmail">
                Correo electrónico
                {validEmail || !email ? "" : <span>&#10060;</span>}
                {validEmail ? <span>&#9989;</span> : ""}
              </label>
              <input
                type="email"
                id="inputEmail"
                autoComplete="off"
                placeholder="Ingresa tu correo electrónico"
                required
                aria-describedby="emailnote"
                aria-invalid={validEmail ? "false" : "true"}
                value={email}
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              {emailFocus && !validEmail ? (
                <p className="note_input" id="emailnote">
                  ¡Formato solicitado example@gmail.com!
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="container-form-date-per">
              <label htmlFor="inputPass">
                Contraseña
                {validPwd || !pwd ? "" : <span>&#10060;</span>}
                {validPwd ? <span>&#9989;</span> : ""}
              </label>
              <input
                type="password"
                id="inputPass"
                placeholder="Ingrese una contraseña"
                required
                aria-describedby="pwdnote"
                aria-invalid={validPwd ? "false" : "true"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              {pwdFocus && !validPwd ? (
                <p className="note_input" id="pwdnote">
                  ¡Debe contener mínusculas, mayúsculas, números y uno de estos
                  caracteres especiales (!@#$%)!
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="container-form-button-send">
            <button type="submit">Registrar</button>
          </div>
          {preloader && <Preloader></Preloader>}
        </div>
      </form>
    </div>
  );
}
