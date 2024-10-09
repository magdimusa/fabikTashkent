import React from "react";
import "./intro.scss"; // SCSS faylni ulaymiz
import intro1 from "../../../../public/intro1.png";

const Product = () => {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__image">
          <img src={intro1} alt="Bed Set" />
        </div>
        <div className="product__details">
          <h1 className="product__title">
            <span className="product__location">Buxoro</span>
            Tabiiy Mahsulot
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
