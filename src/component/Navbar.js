import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  // Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const menuItems = [
    { label: "Home", link: "#Home" },
    { label: "Projects", link: "#" },
    { label: "Contact Us", link: "#" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        color: "black",
      }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}>
          <h2 className="logo">&lt; div</h2>
          <h2 className="logo">/&gt;</h2>
        </motion.div>

        <List
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {menuItems.map((item) => (
            <Button key={item.label} color="inherit" href={item.link}>
              {item.label}
            </Button>
          ))}
        </List>
        <Drawer
          sx={{ display: { xs: "block", sm: "none" } }}
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}>
          <List
            sx={{ width: 200 }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            {menuItems.map((item) => (
              <ListItem
                button
                sx={{ textAlign: "center" }}
                key={item.label}
                href={item.link}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
