import React from "react";
import "./email.scss";
import logo from "../../../../public/pngwing.com.png";

const Email = () => {
  return (
    <footer className="footer" id="email">
      <div className="footer__container">
        <div className="footer__about">
          <div className="footer__logo">
            <img src={logo} alt="Logo" />
          </div>
          <p className="footer__text">
            'Buxoro Natural Product' ko'p yillar davomida butun dunyo uchun
            paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan.
          </p>
        </div>

        {/* Menyu */}
        <div className="footer__menu">
          <h3 className="footer__menu-title">Menyu</h3>
          <ul className="footer__menu-list">
            <li>Bosh Sahifa</li>
            <li>Biz Haqimizda</li>
            <li>To'plam</li>
            <li>Aloqa</li>
          </ul>
        </div>

        {/* Kontakt ma'lumotlari */}
        <div className="footer__contacts">
          <h3 className="footer__contacts-title">Kontaktlar</h3>
          <div className="footer__contacts-details">
            Bukhara, st. Alpomysh 80.
            <br />
            Bnpuz@bk.ru
            <br />
            bnp_fabrik
            <br />
            info@bnpfabric.com
            <br />
            +998 93 383 75 85
            <br />
            +998 93 960 78 00
          </div>
        </div>

        {/* Email obuna */}
        <div className="footer__subscribe">
          <h3 className="footer__subscribe-title">
            Bizning emailimizga obuna bo'ling
          </h3>
          <form className="footer__subscribe-form">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="footer__subscribe-input"
            />
            <button className="footer__subscribe-button">Obuna Bo'lish</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Email;
