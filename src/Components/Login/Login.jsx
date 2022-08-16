import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import ROLES from "../../Roles/Roles";
import axios from "../../api/axios";
import Preloader from "../Preloader/Preloader";
const LOGIN_URL = "/auth";

export default function Login() {
  const { setAuth } = useAuth();
  const [preloader, setPreloader] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    // activar el preloader
    setPreloader(true);

    if (!email || !pwd) {
      setErrMsg("Entradas inválidas");
      return;
    }
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user: email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user: email, roles, accessToken });
      setEmail("");
      setPwd("");

      let urlP = "";
      for (const prop in ROLES) {
        if (roles.includes(ROLES[prop].clave)) {
          urlP = ROLES[prop].url;
          break;
        }
      }

      const from = location.state?.from?.pathname || `/${urlP}`;
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sin respuesta del servidor");
      } else if (err.response?.status === 400) {
        setErrMsg("Falta nombre de usuario y contraseña");
      } else if (err.response?.status === 401) {
        setErrMsg("Vuelva a intentarlo");
      } else {
        setErrMsg("Error de inicio de sesión");
      }
      errRef.current.focus();
    } finally {
      // desactivar el preloader
      setPreloader(false);
    }
  };
  return (
    <div className="container-form" id="form_login">
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
                value={email}
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
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
          </div>
          <div className="container-form-button-send">
            <button type="submit">Ingresar</button>
          </div>
          {preloader && <Preloader></Preloader>}
        </div>
      </form>
    </div>
  );
}
