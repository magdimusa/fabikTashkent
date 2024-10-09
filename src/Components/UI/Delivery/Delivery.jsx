import React from "react";
import "./delivery.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MoneyIcon from "@mui/icons-material/Money";

const Delivery = () => {
  const deliveryItems = [
    {
      icon: LocalShippingOutlinedIcon,
      title: "Free shipping",
      description: "Free shipping on all orders",
    },
    {
      icon: AssignmentTurnedInOutlinedIcon,
      title: "On-time Delivery",
      description: "We guarantee on-time delivery",
    },
    {
      icon: HeadsetMicIcon,
      title: "24/7 Support",
      description: "Customer support all day",
    },
    {
      icon: MoneyIcon,
      title: "Secure Payment",
      description: "100% secure payment methods",
    },
  ];

  return (
    <section className="delivery">
      <div className="delivery__container">
        {deliveryItems.map((item, index) => (
          <div key={index} className="delivery__item">
            <h3 className="delivery__title">{item.title}</h3>
            <p className="delivery__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
