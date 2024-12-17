import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import heroImage from '../assests/grocery.webp'
const HeroSection = () => {
  return (
    <div
    className="hero-section  d-flex align-items-center text-center text-white"
    style={{
      backgroundImage: `url(${heroImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
    }}
  >
      <div className="container">
       
        <h1 className="fw-bold mb-3 display-4 text-black">
          Groceries Delivered in 90 Minutes
        </h1>
        <p className="lead mb-4 text-black">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>

    
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-10 col-12">
            <div className="input-group shadow-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Search your products from here"
              />
              <button className="btn btn-success px-4" type="button">
                <SearchIcon/>
                 Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
