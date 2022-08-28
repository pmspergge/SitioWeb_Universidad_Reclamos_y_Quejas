import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useLogout from "../../../hooks/useLogout";
import "../styleLayout.css";
import "./LayoutAdmin.css";
import { Outlet } from "react-router-dom";
const LayoutAdmin = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const logout = useLogout();

  const signOut = async () => {
    await logout();
  };
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark">
        <div className="navbar-brand ps-3">
          <span className="name-university">UNIVERSITY</span>
        </div>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          to="#!"
          onClick={() => setButtonToggle(!buttonToggle)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className="navbar-nav ms-auto ms-md-6 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="#!">
                  Configuración
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" onClick={signOut}>
                  Salir de la cuenta
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div
          id="layoutSidenav_nav"
          className={buttonToggle ? "active-navbar" : undefined}
        >
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu container-menu-lateral">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Tablero</div>
                <NavLink className="nav-link item-link" to="" end>
                  <div className="sb-nav-link-icon d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </div>
                  PRINCIPAL
                </NavLink>

                <div className="sb-sidenav-menu-heading">Opciones</div>
                <NavLink className="nav-link item-link" to="reclamos">
                  <div className="sb-nav-link-icon d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-folder-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                    </svg>
                  </div>
                  RECLAMOS
                </NavLink>
                <NavLink className="nav-link item-link" to="quejas">
                  <div className="sb-nav-link-icon d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chat-square-text-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                    </svg>
                  </div>
                  QUEJAS
                </NavLink>
              </div>
            </div>
            <div className="sb-sidenav-footer container-user-admin-footer">
              <div className="small">Administrador:</div>
              Patrick Rios
            </div>
          </nav>
        </div>
        <div
          id="layoutSidenav_content"
          className={
            buttonToggle
              ? "container-layout-main active-content"
              : "container-layout-main"
          }
        >
          <div className="container-fluid px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
