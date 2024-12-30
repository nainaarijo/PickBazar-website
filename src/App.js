import React from "react";
import HeroSection from "./components/HeroSection";
import SwiperSlide from "./components/SwiperSlide";
import SideDrawer from "./components/SideDrawer";
import Product from "./components/Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      
      <HeroSection />
      <SwiperSlide />
      <SideDrawer />
      <Product />
    </>
  );
}

export default App;
