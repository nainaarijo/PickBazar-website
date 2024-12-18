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

// import React, { useState, useEffect } from "react";
// import ProductList from "./components/Product/ProductList";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // API call
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Product Listing</h2>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default App;


