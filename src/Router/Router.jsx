import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import NewCart from "../pages/NewCart";
import About from "../pages/About"; // yo'lni kichik harflar bilan to'g'irlash

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
