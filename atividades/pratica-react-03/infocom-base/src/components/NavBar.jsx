import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

  return (
    <header className="navbar">
      <h1 className="logo">
        <Link to="/">
          <span>Info</span>Com
        </Link>
      </h1>

      <nav>
        <Link to="/" className="cart-btn">
          <FaShoppingCart size={20} />
        </Link>

        <button className="login-btn">
          Entrar
        </button>
      </nav>
    </header>
  );
}