import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CategoryProducts from "../../components/Organism/CategoryProducts";

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <CategoryProducts />
      <Featured />
      <Footer />
    </>
  );
}
