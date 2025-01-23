import React, { useState } from "react";
import "../components/css/header.css"; // Make sure to create this CSS file
import { LOGO_URL } from "/utils/constants.js";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              setBtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
