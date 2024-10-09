import React from "react";
import "./winter.scss";
import winter from "../../../assets/winter";
import Card from "../Card/Card";

const WinterCollection = () => {
  return (
    <div className="winter-collection">
      {winter.map((item, index) => (
        <Card key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default WinterCollection;
