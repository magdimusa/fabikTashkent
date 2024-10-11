import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18nextdan foydalanish
import "./navbar.scss";
import logo from "../../../public/pngwing.com.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // i18n hookni olish

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Tilni o'zgartirish funksiyasi
  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage); // Tanlangan tilga o'tkazish
    localStorage.setItem("selectedLanguage", selectedLanguage); // Tanlangan tilni localStorage'da saqlash
  };

  // Sahifa yuklanganida localStorage'dan oxirgi tilni yuklash
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    i18n.changeLanguage(savedLanguage); // Oxirgi tanlangan tilni yuklash
  }, [i18n]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Bukhara Natural Product" />
      </div>
      <ul className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
        <li className="navbar__item">
          <NavLink to={"/"}>
            <a href="/">{t("home")}</a> {/* Tilga mos tarjimani ko'rsatish */}
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/collection"}>
            <a href="/collection">{t("collection")}</a>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/about"}>
            <a href="/about">{t("about")}</a>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={"/contact"}>
            <a href="/contacts">{t("contacts")}</a>
          </NavLink>
        </li>
      </ul>

      {/* Tilni tanlash select elementi */}
      <div className="navbar__language">
        <select
          className="navbar__language-select"
          onChange={changeLanguage}
          value={i18n.language} // Joriy tilni ko'rsatish
        >
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
