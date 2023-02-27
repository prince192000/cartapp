import React from "react";
import "./Navbar.css";

const Navbar = ({ parentToChild }) => {
  return (
    <>
      <nav className="navbar-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="cart-png">
          <a href="#">
            {" "}
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <h2 className="cart-total">{parentToChild} </h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
