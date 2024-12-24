import React from "react";
import  HeaderSection  from './components/HeaderSection';
import HeroSection from "./components/HeroSection";
import SwiperSlide from "./components/SwiperSlide";
import SideDrawer from "./components/SideDrawer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <SwiperSlide />
      <SideDrawer />
    </>
  );
}

export default App;




