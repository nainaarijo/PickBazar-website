import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { someFunction } from '@react-spring/web';

const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) onEnter();
    },
    onRest: () => {
      if (!open && onExited) onExited();
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
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

const LoginRegisterModal = ({ openLogin, setOpenLogin }) => {
  const [openRegister, setOpenRegister] = React.useState(false);

  // Switch Between Login and Register Modal
  const handleOpenRegister = () => {
    setOpenLogin(false); // Close Login modal first
    setOpenRegister(true);
  };
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <>
      {/* Login Modal */}
      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openLogin}>
          <Box sx={style}>
            <Typography variant="h5" align="center" sx={{ mb: 2 }}>
              Login
            </Typography>
            <TextField label="Email" fullWidth margin="normal" />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            <Typography align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
              <Button onClick={handleOpenRegister}>Register</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={openRegister}
        onClose={handleCloseRegister}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openRegister}>
          <Box sx={style}>
            <Typography variant="h5" align="center" sx={{ mb: 2 }}>
              Register
            </Typography>
            <TextField label="Name" fullWidth margin="normal" />
            <TextField label="Email" fullWidth margin="normal" />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
            <Typography align="center" sx={{ mt: 2 }}>
              Already have an account?{" "}
              <Button onClick={() => setOpenLogin(true)}>Login</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default LoginRegisterModal;
