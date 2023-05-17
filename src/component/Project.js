import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Container,
  Link,
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
              <Card key={index} sx={{ marginBottom: "1rem" }}>
                <CardContent>
                  <Typography variant="h4" component="h3">
                    {project.name}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {project.description}
                  </Typography>
                  <Link
                    href={project.link}
                    target="_blank"
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      marginTop: "15px",
                      display: "block",
                      textAlign: "end",
                      color: "blue",
                      textDecoration: "none",
                    }}>
                    Vist site
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Project;
