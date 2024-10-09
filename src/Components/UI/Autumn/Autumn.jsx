import React from "react";
import autumn from "../../../assets/autumn";
import Card from "../Card/Card";

const Autumn = () => {
  return (
    <div className="winter-collection">
      {autumn.map((item, index) => (
        <Card key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default Autumn;
