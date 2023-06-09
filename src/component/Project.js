import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Link,
  Container,
} from "@mui/material";
import Navbar from "./Navbar";

const Project = ({ projects }) => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center ",
          marginTop: "35px",
          gap: "10px",
          height: "100%",
        }}>
        <h3>My Projects</h3>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center ",
            width: { xs: "100", sm: "100%" },
          }}>
          <Box sx={{}}>
            {projects.map((project, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  alignItems: "center ",
                  marginBottom: "1rem",
                  backgroundImage: `${project.backlinear}, url(${project.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  border: "solid 2px rgb(248 213 3)",
                  color: `${project.color}`,
                  height: { xs: "auto", sm: "350px" },
                }}>
                <CardContent>
                  <Typography variant="h4" component="h3">
                    {project.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "block",
                      textAlign: "end",
                      marginTop: "25px",
                    }}>
                    <Link
                      href={project.link}
                      target="_blank"
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",

                        border: "solid 2px rgb(248 213 3) ",
                        borderRadius: "10px",
                        cursor: "pointer",
                        padding: "5px",
                        color: "rgb(248 213 3)",
                        textDecoration: "none",
                      }}>
                      Visit site
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        <Typography variant="body1" component="p" sx={{ textAlign: "center" }}>
          Visit my GITHUB account to explore more
        </Typography>
      </Container>
    </>
  );
};

export default Project;
