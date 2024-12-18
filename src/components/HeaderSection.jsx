// import React from "react";
// import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
//  // Login Modal
//  const handleOpenLogin = () => setOpenLogin(true);
//  const handleCloseLogin = () => setOpenLogin(false);
//  const [openLogin, setOpenLogin] = React.useState(false);
//   const [openRegister, setOpenRegister] = React.useState(false);



// const Navbar = () => {
//   return (
//     <AppBar position="static" color="inherit" elevation={0}>
//       <Toolbar sx={{ justifyContent: "space-between" }}>
       
//         <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
//           PickBazar
//         </Typography>

//         <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
//           <Typography>Shops</Typography>
//           <Typography>Offers</Typography>
//           <Typography>Contact</Typography>
//           {/* <Button variant="contained" color="success">
//             Join
//           </Button> */}
//            <Button variant="contained" color="success" onClick={handleOpenLogin}>
//            Join
//                 </Button>
//           <Button variant="outlined" color="success">
//             Become a Seller
//           </Button>

         
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <ShoppingBagIcon color="success" />
//             <Typography>0 Item</Typography>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginRegisterModal from "./LoginPage"; // Import modal

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
            PickBazar
          </Typography>

          {/* Navigation Items */}
          <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Typography>Shops</Typography>
            <Typography>Offers</Typography>
            <Typography>Contact</Typography>

            {/* Join Button */}
            <Button variant="contained" color="success" onClick={handleOpenLogin}>
              Join
            </Button>

            {/* Become a Seller Button */}
            <Button variant="outlined" color="success">
              Become a Seller
            </Button>

            {/* Cart */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ShoppingBagIcon color="success" />
              <Typography>0 Item</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login/Register Modal */}
      <LoginRegisterModal openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </>
  );
};

export default Navbar;
