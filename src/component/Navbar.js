import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover,
  Link,
  Box,
} from "@mui/material";
import { Link as Link2 } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [contactAnchorEl, setContactAnchorEl] = useState(null);

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

  const handleContactClick = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactClose = () => {
    setContactAnchorEl(null);
  };
  const handleCall = () => {
    window.location.href = `tel:+918708351536`;
  };
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
  ];

  const isContactOpen = Boolean(contactAnchorEl);
  const contactPopoverId = isContactOpen ? "contact-popover" : undefined;

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", color: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          edge="start"
          color="primary"
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
            color: "blue",
            fontWeight: "bold",
          }}>
          {/* Menu Items */}
          {menuItems.map((item, i) => (
            <>
              <Button
                key={i}
                sx={{ color: "rgba(199, 199, 3, 0.836)" }}
                component={Link2}
                to={item.link}>
                {item.label}
              </Button>
            </>
          ))}
          <Button
            sx={{ color: "rgba(199, 199, 3, 0.836)" }}
            onClick={handleContactClick}>
            Contact me
          </Button>
        </List>
        <Drawer
          sx={{ display: { xs: "block", sm: "none" } }}
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}>
          {/* Drawer Items */}
          {menuItems.map((item, i) => (
            <ListItem
              sx={{ textAlign: "center" }}
              key={i}
              component={Link2}
              to={item.link}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <Button color="inherit" onClick={handleContactClick}>
            Contact me
          </Button>
        </Drawer>

        <Popover
          id={contactPopoverId}
          open={isContactOpen}
          anchorEl={contactAnchorEl}
          onClose={handleContactClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              p: "5px",
            }}>
            <Link
              sx={{ color: "#0A66C2" }}
              href="https://www.linkedin.com/in/mohitsaini80"
              target="_blank"
              rel="noopener noreferrer">
              <LinkedInIcon />
            </Link>
            <Link
              sx={{ color: "#171515" }}
              href="https://github.com/MohitKasithal"
              target="_blank"
              rel="noopener noreferrer">
              <GitHubIcon />
            </Link>
            <Link
              sx={{ color: " #BB001B" }}
              href="mailto:mohitkasithal80@gmail.com">
              <EmailOutlinedIcon />
            </Link>
            <IconButton color="primary" aria-label="Call" onClick={handleCall}>
              <PhoneIcon />
            </IconButton>
          </Box>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
