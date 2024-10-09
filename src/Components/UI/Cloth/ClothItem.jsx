import React from "react";
import "./clothitem.scss";

const ClothItem = ({ title, date, imgSrc }) => {
  return (
    <div className="news-item">
      <img src={imgSrc} alt={title} className="news-item__image" />
      <div className="news-item__details">
        <span className="news-item__date">{date}</span>
        <h2 className="news-item__title">{title}</h2>
        <p className="news-item__description">
          Go'zal vodiy atrofimda bug'lanib, quyoshning choqqi nurlari
          daraxtlarimning qalin barglariga tushga...
        </p>
      </div>
    </div>
  );
};

export default ClothItem;
