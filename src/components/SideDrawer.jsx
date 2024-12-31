import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, addItem } from "../components/slice/Add-Cart/AddCartSlice";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function PageDrawer() {
  const { items } = useSelector((state) => state.cart);

  const totalPrice = items.reduce((acc, item) => {
    const price = item.Price || 0; 
    const quantity = item.quantity || 0; 
    return acc + price * quantity;
  }, 0);

  const totalItems = items.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const [state, setState] = useState({
    right: false,
  });

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleCheckout = () => {
    if (totalPrice === 0) {
      setMessage('Your cart is empty. Please add items to proceed.');
    } else {
      setMessage('Your order has been placed successfully!');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      display="flex"
      flexDirection="column"
    >
      <Typography
        variant="h6"
        sx={{
          padding: '16px',
          textAlign: 'center',
          backgroundColor: '#f1f1f1',
          borderBottom: '1px solid #ddd',
        }}
      >
        <AddShoppingCartIcon /> {totalItems} Items
      </Typography>
      <Box
        sx={{
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={item.Image}
                alt=""
                style={{ width: '60px', height: '60px', borderRadius: '8px' }}
              />
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography>${item.Price ? item.Price.toFixed(2) : '0.00'}</Typography>
                <Typography variant="caption">{item.quantity} x</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconButton
                size="small"
                color="primary"
                onClick={() => dispatch(removeItem(item))}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton
                size="small"
                color="primary"
                onClick={() => dispatch(addItem(item))}
              >
                <AddIcon />
              </IconButton>
              <Button
                size="small"
                variant="text"
                color="error"
                onClick={() => dispatch(removeItem(item))}
              >
                ✕
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          padding: '16px',
          backgroundColor: '#fff',
          borderTop: '1px solid #ddd',
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ padding: '12px', borderRadius: '8px' }}
          onClick={handleCheckout}
        >
          Checkout - ${totalPrice.toFixed(2)}
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          backgroundColor: "#00A86B",
          color: "white",
          borderRadius: "8px",
          padding: "6px 10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "90px",
          height: "90px",
          gap: "4px",
        }}
        onClick={toggleDrawer("right", true)}
      >
        <AddShoppingCartIcon sx={{ fontSize: 22 }} />
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            fontSize: "13px", 
          }}
        >
          {totalItems} Items
        </Typography>

        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              color: "#00A86B",
            }}
          >
            ${(totalPrice || 0).toFixed(2)} 
          </Typography>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>

      {message && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#000',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1500,
          }}
        >
          {message}
        </Box>
      )}
    </div>
  );
}

export default PageDrawer;
