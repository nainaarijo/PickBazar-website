import React from "react";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import SwiperSlide from "./components/SwiperSlide";
import SideDrawer from "./components/SideDrawer";
import Product from "./components/Product/Product";
import { BrowserRouter as Router } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router> 
      <HeaderSection />
      <HeroSection />
      <SwiperSlide />
      <SideDrawer />
      <Product />
    </Router>
  );
}

export default App;







