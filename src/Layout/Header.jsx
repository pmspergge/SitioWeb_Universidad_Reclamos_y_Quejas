import "../Style/header.css";
import Logo from "../../public/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container_logo">
        <a className="link_logo" href="">
          <img src={Logo} alt="Logo" title="Inicio"/>
        </a>
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
