import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pngwing.com.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Bukhara Natural Product" />
      </div>
      <ul className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
        <li className="navbar__item">
          <NavLink to={"/"}>
            <a href="/">Home</a>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/collection"}>
            <a href="/collection">Collection</a>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/about"}>
            <a href="/about">About Us</a>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/contact"}>
            <a href="/contacts">Contacts</a>
          </NavLink>
        </li>
      </ul>

      {/* Tilni tanlash select elementi */}
      <div className="navbar__language">
        <select className="navbar__language-select">
          <option value="en">En</option>
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
          <option value="po">Po</option>
        </select>
      </div>

      {/* Burger tugmasi kichik ekranlar uchun */}
      <div className="navbar__burger" onClick={toggleMenu}>
        <span className="navbar__burger-line"></span>
        <span className="navbar__burger-line"></span>
        <span className="navbar__burger-line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
