import React from "react";
import "../styles/home.scss";
import Intro from "../Components/UI/Intro/Intro";
import Delivery from "../Components/UI/Delivery/Delivery";
import Product from "../Components/UI/Intro/Intro";
import Intro2 from "../Components/UI/Intro2/Intro2";
import Winter from "../Components/UI/Winter/Winter";
import Autumn from "../Components/UI/Autumn/Autumn";
import Intro3 from "../Components/UI/Intro3/Intro3";
import Intro4 from "../Components/UI/Intro4/Intro4";
import Summer from "../Components/UI/Summer/Summer";
import Cloth from "../Components/UI/Cloth/Cloth";
import Email from "../Components/UI/Email/Email";
export default function Home() {
  return (
    <div>
      <Intro />
      <Delivery />
      <Intro2 />
      <Winter />
      <Intro3 />
      <Autumn />
      <Intro4 />
      <Summer />
      <Cloth />
      <Email />
    </div>
  );
}
