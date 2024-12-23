import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
export default function RightDrawer() {
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {["", "", "", ""].map((_, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton></ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["", "", ""].map((_, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton></ListItemButton>
                    </ListItem>
                ))}
            </List>
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
                0 Item
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        color: "#00A676",
                        padding: "5px 8px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                >
                    $0.00
                </Box>
            </Button>
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>

    );
}
