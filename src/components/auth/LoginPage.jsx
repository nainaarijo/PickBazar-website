import React from "react";
import { Modal, Box, Typography, TextField, Button, Link, Stack } from "@mui/material";
import logo from "../../assests/Logo.png";

// Modal Styling
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function AuthModal({ openModal, setOpenModal, isRegister, setIsRegister }) {
  const handleClose = () => {
      setOpenModal(false);
  };

  const toggleForm = () => {
      setIsRegister(!isRegister);
  };

  return (
      <Modal open={openModal} onClose={handleClose}>
          <Box sx={modalStyle}>
              <Box sx={{ display: "flex", alignItems: "center" }} className="my-4 pb-3 justify-content-center">
                  <img src={logo} alt="PickBazar Logo" style={{ height: 40 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                      PickBazar
                  </Typography>
              </Box>
              <Stack spacing={2}>
                  <TextField label="Email" variant="outlined" fullWidth />
                  <TextField label="Password" type="password" variant="outlined" fullWidth />
                  <Button variant="contained" color={isRegister ? "primary" : "success"} fullWidth>
                      {isRegister ? "Register" : "Login"}
                  </Button>
                  <Typography align="center">OR</Typography>
                  {isRegister ? (
                      <>
                          <Button variant="outlined" color="primary" fullWidth>
                              Register with Google
                          </Button>
                          <Button variant="outlined" color="secondary" fullWidth>
                              Register with Mobile Number
                          </Button>
                      </>
                  ) : (
                      <>
                          <Button variant="outlined" color="primary" fullWidth>
                              Login with Google
                          </Button>
                          <Button variant="outlined" color="secondary" fullWidth>
                              Login with Mobile Number
                          </Button>
                      </>
                  )}
                  <Typography align="center">
                      {isRegister ? (
                          <>
                              Already have an account?{" "}
                              <Link component="button" onClick={toggleForm} sx={{ textDecoration: "none" }}>
                                  Login
                              </Link>
                          </>
                      ) : (
                          <>
                              Don't have an account?{" "}
                              <Link component="button" onClick={toggleForm} sx={{ textDecoration: "none" }}>
                                  Register
                              </Link>
                          </>
                      )}
                  </Typography>
              </Stack>
          </Box>
      </Modal>
  );
}