import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: { xs: " block", sm: "flex" },
          marginTop: "120px",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}>
        <Container className="home" sx={{ width: { sm: "100%", md: "65%" } }}>
          <Box>
            <motion.div
              style={{
                marginBottom: "10px",
                display: "inline-block",
                position: "relative",
                willChange: "transform",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: "rgba(199, 199, 3, 0.836)",
              }}
              animate={{ x: ["0%", "30%"] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}>
              <Typography variant="h4"> Welcome...</Typography>
            </motion.div>
            <hr style={{ marginBottom: "10px" }} />
            <Typography variant={{ sm: "p", md: "h5" }}>
              Hello, I am <strong>Mohit</strong>. I am a developer specializing
              in <b> React.js.</b> I am passionate about creating innovative
              solutions and crafting seamless user experiences. With a strong
              background in <b> React.js,Css3,html5,javascript,Rest Api's</b>.I
              have hands-on experience with frameworks like{" "}
              <b> Material-UI and Bootstrap</b>, which allow me to create
              beautiful and responsive user interfaces. Additionally, I am
              proficient in <b>Redux and Redux Toolkit</b>, enabling efficient
              state management and predictable data flow in my projects. Browse
              through my portfolio to explore my projects and get in touch with
              me for collaborations or inquiries.
            </Typography>
          </Box>
        </Container>
        <Box
          sx={{
            width: { sm: "25%", md: "35%" },
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "center",
          }}>
          <img
            src="./127422.jpg"
            alt=" "
            style={{
              border: "solid 3px rgba(199, 199, 3, 0.836)",
              width: "300px",
              height: "300px",
              borderRadius: "25%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
