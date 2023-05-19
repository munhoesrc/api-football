import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        <img src={logo} className="img-logo-nav" alt="logo bola" />

        <li>
          <Link to="/home">HOME</Link>
        </li>
        <li>
          <Link to="/countries">PAISES</Link>
        </li>
        <li>
          <Link to="/seasons">TEMPORADA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
