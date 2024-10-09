import React from "react";
import "./cloth.scss";
import news1 from "../../../../public/news1.png";
import news2 from "../../../../public/news2.png";
import news3 from "../../../../public/news3.png";
import ClothItem from "./ClothItem";

const Cloth = () => {
  const newsItems = [
    {
      id: 1,
      title: "Ideal gadjetlarni qanday tanlash mumkin",
      date: "10/05/2019",
      imgSrc: news1, // Bu yerni moslashtirish kerak
    },
    {
      id: 2,
      title: "Ideal gadjetlarni qanday tanlash mumkin",
      date: "10/05/2019",
      imgSrc: news2, // Bu yerni moslashtirish kerak
    },
    {
      id: 3,
      title: "Ideal gadjetlarni qanday tanlash mumkin",
      date: "10/05/2019",
      imgSrc: news3, // Bu yerni moslashtirish kerak
    },
  ];

  return (
    <section className="news-section">
      <div className="news-section__header">
        <h1 className="news-section__title">Yangiliklar</h1>
        <p className="news-section__subtitle">Buxoro tabiiy mahsuloti</p>
      </div>
      <div className="news-section__content">
        {newsItems.map((item) => (
          <ClothItem
            key={item.id}
            title={item.title}
            date={item.date}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Cloth;
