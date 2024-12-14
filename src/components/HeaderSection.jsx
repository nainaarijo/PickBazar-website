import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
          PickBazar
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Typography>Shops</Typography>
          <Typography>Offers</Typography>
          <Typography>Contact</Typography>
          <Button variant="contained" color="success">
            Join
          </Button>
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
  );
};

export default Navbar;

