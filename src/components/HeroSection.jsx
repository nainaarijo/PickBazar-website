// import React from "react";
// import { Box, Button, Container, InputBase, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/system";

// const Search = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   border: "1px solid #ddd",
//   borderRadius: "5px",
//   padding: "5px 10px",
//   backgroundColor: "#fff",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   width: "100%",
//   maxWidth: "500px",
//   margin: "20px auto",
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "column",
//     padding: "10px",
//   },
// }));

// const HeroSectionStyle = styled(Box)(({ theme }) => ({
//   background: "#f9f9f9",
//   minHeight: "500px",
//   textAlign: "center",
//   paddingTop: "80px",
//   position: "relative",
//   [theme.breakpoints.down("sm")]: {
//     paddingTop: "40px",
//     minHeight: "400px",
//   },
// }));

// const OverlayImages = styled("div")(({ theme }) => ({
//   position: "absolute",
//   width: "100%",
//   bottom: "0",
//   left: "0",
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "10px 50px",
//   [theme.breakpoints.down("md")]: {
//     padding: "10px 20px",
//   },
//   [theme.breakpoints.down("sm")]: {
//     display: "none", // Chhoti screens par images hide karna
//   },
// }));

// const HeroSection = () => {
//   return (
//     <HeroSectionStyle>
//       <Container>
//         {/* Heading */}
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: "bold",
//             marginBottom: "10px",
//             fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
//           }}
//         >
//           Groceries Delivered in 90 Minutes
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             color: "#777",
//             marginBottom: "20px",
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//             paddingX: { xs: "10px", sm: "0" },
//           }}
//         >
//           Get your healthy foods & snacks delivered at your doorsteps all day, everyday
//         </Typography>

//         {/* Search Bar */}
//         <Search>
//           <InputBase
//             placeholder="Search your products from here"
//             fullWidth
//             sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
//           />
//           <Button
//             variant="contained"
//             color="success"
//             startIcon={<SearchIcon />}
//             sx={{
//               marginLeft: { sm: "10px" },
//               marginTop: { xs: "10px", sm: "0" },
//               width: { xs: "100%", sm: "auto" },
//             }}
//           >
//             Search
//           </Button>
//         </Search>
//       </Container>

//       {/* Overlay Images */}
//       <OverlayImages>
//         <img src="" alt="Left Vegetables" width="200" />
      
//       </OverlayImages>
//     </HeroSectionStyle>
//   );
// };

// export default HeroSection;

import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import heroImage from '../assests/grocery.webp'
const HeroSection = () => {
  return (
    <div
    className="hero-section d-flex align-items-center text-center text-white"
    style={{
      backgroundImage: `url(${heroImage})`, // Corrected path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
    }}
  >
      <div className="container">
        {/* Heading */}
        <h1 className="fw-bold mb-3 display-4 text-black">
          Groceries Delivered in 90 Minutes
        </h1>
        <p className="lead mb-4 text-black">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>

        {/* Search Bar */}
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
