import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link, Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const footerStyles = {
  container: {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "primary",
    color: "primary.contrastText",
    paddingleft: "20px",
    position: "absolute",
    top: "80px",
    right: "10px",
  },
  iconsContainer: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    gap: "16px",
    // borderLeft: "solid 3px #333",
    // borderTop: "solid 3px #333",
    // borderBottom: "solid 3px #333",
    // borderStyle: "dashed",
    // padding: "8px",
    // marginBottom: "16px",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
};

const Footer = () => {
  const handleCall = () => {
    window.location.href = `tel:+918708351536`;
  };
  return (
    <Box sx={footerStyles.container}>
      <div style={footerStyles.iconsContainer}>
        <IconButton color="primary" aria-label="Call" onClick={handleCall}>
          <PhoneIcon />
        </IconButton>
        <Link
          href="https://www.linkedin.com/in/mohitsaini80"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedInIcon sx={{ fontSize: "30px" }} />
        </Link>
        <Link
          href="https://github.com/MohitKasithal"
          target="_blank"
          rel="noopener noreferrer">
          <GitHubIcon sx={{ fontSize: "30px" }} />
        </Link>
        <Link href="mailto:mohitkasithal80@gmail.com">
          <EmailIcon sx={{ fontSize: "30px" }} />
        </Link>
      </div>
    </Box>
  );
};

export default Footer;
