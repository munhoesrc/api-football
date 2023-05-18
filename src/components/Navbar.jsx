import React from "react";
import "../styles/navbar.css"
import logo from "../assets/img/Logo.png"

const Navbar = () => {
  return (
    <nav className="navBar">
      
        <img src={logo} className="img-logo-nav" alt="logo bola" />
      
    </nav>
  );
};

export default Navbar;
