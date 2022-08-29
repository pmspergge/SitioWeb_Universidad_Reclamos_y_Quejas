import "./header.css";
import Logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "./MenuButton";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <div className="container_logo">
        <div className="container_logo_image">
          <img src={Logo} alt="Logo" title="Inicio" />
        </div>
        <div className="container_logo_title">
          <p className="title_logo_text">UNIVERSITY</p>
        </div>
      </div>
      <div
        className={
          open ? "container_navegation active" : "container_navegation"
        }
      >
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/login">Iniciar Sesión</NavLink>
            </li>
            <li>
              <NavLink to="/form">Registrar</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container_button_toggle_menu">
        <MenuButton open={open} handleClick={handleClick}></MenuButton>
      </div>
    </header>
  );
}

export default Header;
