import React from "react";
import { Button, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";
import { saveAs } from "file-saver";
import resumePdf from "../images/mohit-resume.pdf";

const Home = () => {
  const handleDownload = () => {
    saveAs(`${resumePdf}`, "mohit-resume.pdf");
  };

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
            <Typography
              variant="h4"
              sx={{ color: "rgb(248 213 3)", fontWeight: "600" }}>
              {" "}
              Hi,
            </Typography>

            <Typography
              variant="h4"
              sx={{ color: "rgb(248 213 3)", fontWeight: "600" }}>
              {" "}
              Welcome...
            </Typography>

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
          <Button
            sx={{
              background: "rgb(248 213 3)",
              color: "#333",
              fontWeight: "600",
              mt: "10px",
            }}
            onClick={handleDownload}>
            Resume
          </Button>
        </Container>
        <Box
          sx={{
            width: { sm: "25%", md: "35%" },
            // display: "flex",

            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "center",
          }}>
          <img
            src="./127422.jpg"
            alt=" "
            style={{
              border: "solid 3px rgb(248 213 3)",
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
