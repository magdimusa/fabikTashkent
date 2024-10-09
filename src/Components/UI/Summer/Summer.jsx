import React from "react";
import summer from "../../../assets/summer";
import Card from "../Card/Card";

const Summer = () => {
  return (
    <div className="winter-collection">
      {summer.map((item, index) => (
        <Card key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default Summer;