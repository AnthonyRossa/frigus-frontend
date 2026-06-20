import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Página Inicial
          </Link>
        </li>
      </ul>
    </nav>
  );
}
