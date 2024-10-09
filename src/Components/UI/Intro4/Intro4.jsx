import React from "react";
import intro2 from "../../../../public/intro2.png";

const Intro4 = () => {
  return (
    <section className="intro2" id="intro3">
      <div className="intro2__content">
        <div className="intro2__info">
          <h2 className="intro2__title">
            100% <br /> Mahsulot sifati
          </h2>
          <p className="intro2__description">
            Buxoro tabiiy mahsuloti ko'p yillar davomida butun dunyo uchun paxta
            matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
          </p>
          <button className="intro2__button">To'plam</button>
        </div>
        <div className="intro2__image">
          <img src={intro2} alt="Qishki kolleksiya" />
        </div>
      </div>
      <h2 className="intro2__main-title">Yozgi kollektsiya</h2>
      <p className="intro2__subtitle">Buxoro tabiiy mahsuloti</p>
    </section>
  );
};

export default Intro4;