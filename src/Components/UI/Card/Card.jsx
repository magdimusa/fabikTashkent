import React from "react";

export default function Card({ img, name }) {
  return (
    <div className="winter-collection__item">
      <img src={img} alt={name} className="winter-collection__image" />
      <p className="winter-collection__name">{name}</p>
    </div>
  );
}
