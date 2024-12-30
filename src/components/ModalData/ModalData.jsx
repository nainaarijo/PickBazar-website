import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { addItem, removeItem } from "../components/slice/Add-Cart/AddCartSlice"; // Your action creators

export default function RightDrawer() {
    const [state, setState] = React.useState(false);
    const { items } = useSelector(({state}) => state.cart); // Getting cart items from Redux
    console.log(items, 'items');  // Check if items are being retrieved

    const dispatch = useDispatch();

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState(open);
    };

    const totalPrice = items.reduce((acc, item) => acc + item.Price * item.quantity, 0); // Calculate total price
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0); // Calculate total number of items

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {items.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <Box>
                                    <Box>{item.name}</Box>
                                    <Box>${item.Price.toFixed(2)}</Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '10px' }}>
                                    <Button onClick={() => dispatch(removeItem(item))}>-</Button>
                                    <Box>{item.quantity}</Box>
                                    <Button onClick={() => dispatch(addItem(item))}>+</Button>
                                </Box>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box sx={{ padding: '10px', fontWeight: 'bold' }}>
                <Box>Total Items: {totalItems}</Box>
                <Box>Total Price: ${totalPrice.toFixed(2)}</Box>
            </Box>
        </Box>
    );

    return (
        <div>
            <Button
                onClick={toggleDrawer(true)}
                style={{
                    backgroundColor: "#00A676",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "fixed",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    zIndex: 1000,
                }}
            >
                <ShoppingBagIcon sx={{ marginRight: "5px" }} />
                {totalItems} Item{totalItems !== 1 && 's'}
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        color: "#00A676",
                        padding: "5px 8px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                >
                    ${totalPrice.toFixed(2)}
                </Box>
            </Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
}
