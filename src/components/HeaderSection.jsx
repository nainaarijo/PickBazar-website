import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import Logo from '../assests/Logo.png';
import AuthModal from './auth/LoginPage';
import Profile from '../assests/man-thumbnail.webp';
import { ToastContainer } from 'react-toastify';

const  HeaderSection = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState();
    console.log(user, 'user');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('users'));
        console.log(loggedInUser, 'loggedInUser');
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleOpenModal = () => setOpenModal(true);
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
        setUser(null);
        navigate('/');
    };
    

    const handleNavigateHome = () => {
        navigate('/'); 
    };

    return (
        <AppBar position="sticky" color="default" elevation={0} className="py-2">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                 
                    <Typography
                        variant="h4"
                        component="div"
                        onClick={handleNavigateHome} 
                        sx={{ fontWeight: 'bold', color: '#333', marginRight: '20px', cursor: 'pointer' }} 
                    >
                        PickBazar
                    </Typography>
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

                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    {user ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Button

                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img className='' src={Profile} alt="" srcset="" width={40} />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link to='/profile'>Profile</Link> </MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>

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
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            background: '#019376',
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        Become a Seller
                    </Button>
                </Box>

                <AuthModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    isRegister={isRegister}
                    setIsRegister={setIsRegister}
                />
                <ToastContainer />
            </Toolbar>
        </AppBar >
    );
};
export default HeaderSection;

