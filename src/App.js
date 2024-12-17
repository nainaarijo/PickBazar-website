import React from "react";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection"; 
import SlideCards from "./components/SlideCards";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <SlideCards />
    </>
  );
}

export default App;

