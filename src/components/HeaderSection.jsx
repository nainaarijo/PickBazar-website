import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppleIcon from '@mui/icons-material/Apple';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from "../assests/Logo.png"; 
import AuthModal from './auth/LoginPage';
import SearchIcon from '@mui/icons-material/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const SearchBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  padding: '5px 10px',
  borderRadius: '5px',
  width: '100%',
  maxWidth: '400px',
});

const SearchInput = styled(InputBase)( {
  marginLeft: '10px',
  flex: 1,
});

const HeaderSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
      setIsLoggedIn(true);
    }
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleOpenModal = () => setOpenModal(true);
  const toggleSearch = () => setShowSearch(!showSearch);

  const searchHandler = (e) => {
    console.log("Searching for:", e.target.value);
  };

  const handleLogin = (email) => {
    const userData = { email };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData); 
    setIsLoggedIn(true);
    setOpenModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); 
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} className="py-2">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
         
          <img src={logo} alt="PickBazar Logo" style={{ height: 40, marginRight: 8 }} />
        
          <Box>
            <Button
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: '#019376',
                border: '1px solid #019376',
              }}
              startIcon={<AppleIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              Grocery
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit">Shops</Button>
          <Button color="inherit">Offers</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit" endIcon={<ExpandMoreIcon />} onClick={handleMenuOpen}>
            Pages
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Page 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Page 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Page 3</MenuItem>
          </Menu>
          <IconButton onClick={toggleSearch} color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1">{user.email}</Typography>
              <Button onClick={handleLogout} color="inherit">Logout</Button>
            </Box>
          ) : (
            <Button
              sx={{
                textTransform: 'none',
                background: '#019376',
                color: 'white',
                display: { xs: 'none', md: 'flex' },
                '&:hover': { background: '#017a5f' },
              }}
              variant="contained"
              onClick={handleOpenModal}
            >
              Join
            </Button>
          )}
          <Button
            sx={{
              textTransform: 'none',
              background: '#019376',
              color: 'white',
              display: { xs: 'none', md: 'flex' },
              '&:hover': { background: '#017a5f' },
            }}
            variant="contained"
          >
            Become a Seller
          </Button>
        </Box>

        {showSearch && (
          <SearchBox>
            <SearchIcon style={{ color: 'gray' }} />
            <SearchInput
              onChange={searchHandler}
              placeholder="Search items..."
              size="small"
              autoFocus
            />
          </SearchBox>
        )}

        <AuthModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          isRegister={isRegister}
          setIsRegister={setIsRegister}
          handleLogin={handleLogin}
        />
        <ToastContainer />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSection;
