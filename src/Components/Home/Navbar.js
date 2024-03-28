import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="Start-logo">
        <h1>Logo</h1>
      </div>
      <div className="right-nav">

        <Link to="/destinations">Destinations</Link>

        <Link to="/about-us">About Us</Link>

        <Link to="/login">LOG IN</Link>
      </div>
    </nav>
  );
};

export default NavBar;