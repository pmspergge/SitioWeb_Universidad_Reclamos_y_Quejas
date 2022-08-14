import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ROLES from "../../Roles/Roles";
import axios from "../../api/axios";
const LOGIN_URL = "/auth";

export default function Login() {
  const { auth, setAuth } = useAuth();

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
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user: email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");

      let urlPrincipate = "";
      for (const prop in ROLES) {
        if (ROLES[prop].clave === roles[0]) {
          urlPrincipate = ROLES[prop].url;
        }
      }
      const from = location.state?.from?.pathname || "/" + urlPrincipate;
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
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
            <Link to={"/user"}>User</Link>
            <Link to={"/admin"}>Admin</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
