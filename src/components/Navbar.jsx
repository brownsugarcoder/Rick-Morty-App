import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/style/NavBar.css";

   
const NavBar = () => {
  return (
      <nav className="navbar">
          <Link to="/">
            Home
          </Link>
          <Link to="/search">
            Search
          </Link>
          <Link to="/search">
          About
        </Link>
      </nav>
    );
  };


export default NavBar;




