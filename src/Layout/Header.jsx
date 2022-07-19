import "../Style/header.css";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container_logo">
        <Link to="/" className="link_logo">
          <img src={Logo} alt="Logo" title="Inicio" />
        </Link>
      </div>
      <div className="container_navegation">
        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/form">Registrar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
