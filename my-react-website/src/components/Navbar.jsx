import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo Image */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="PixelAgenix Logo" />
            <h4>PixelAgenix</h4>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/about">About Us</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/contact" className="btn">Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
