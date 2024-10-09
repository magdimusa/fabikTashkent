import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Collection from "../pages/Collection"; // to'g'ri holatda (kichik harf)
import NotFound from "../pages/NotFound"; // to'g'ri holatda (kichik harf)
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import NewCart from "../pages/NewCart";
import About from "../pages/About";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/element/:id" element={<Cart />} />
        <Route path="/news/:id" element={<NewCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
