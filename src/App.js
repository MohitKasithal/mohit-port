import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Project from "./component/Project";
import weather from "./images/weather-back.png";
import cart from "./images/cart.png";
import blog from "./images/blog.png";
import onday from "./images/onday.png";

const App = () => {
  const projects = [
    {
      name: "Weather",
      description:
        "For my weather project, I utilized React-Geolocater to fetch the user's current geolocation and provide real-time weather information. React Router was implemented to create different routes, allowing users to navigate between the home page, location-specific weather details, and a search page. Axios served as the HTTP client for making API requests to retrieve weather data from a weather API. Additionally, I incorporated a live clock feature to display the current time alongside the weather information. The project offers a user-friendly search option, enabling users to search for weather details for any desired location.",
      link: "https://weat-her.netlify.app",
      img: `${weather}`,
      color: "#fff",
      backlinear: " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
    },
    {
      name: "Shopping Cart",
      description:
        "In my shopping cart project, I utilized Bootstrap for an attractive UI, React Router for seamless navigation, and Redux Toolkit for efficient state management. The project featured multiple pages, including product listings, shopping cart view, and checkout. By integrating these technologies, I developed a user-friendly shopping cart application with responsive design and synchronized data updates.using YUP validations for login and register page.",
      link: "https://shoping-cart007.netlify.app",
      color: "#fff",
      backlinear: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      img: `${cart}`,
    },
    {
      name: "Blog Site",
      description:
        "In my blog project, I utilized Material-UI (MUI) for a modern and sleek user interface, and MUI Icons for visually appealing icons. Axios was used for making HTTP requests to retrieve blog data from an API. The project incorporated React Router to create multiple routes and enable seamless navigation between different components, such as blog posts, categories, and search results. Additionally, I implemented Yup for validation purposes in the login and register pages, ensuring data integrity and user input verification. This allowed for a secure and user-friendly experience throughout the application.",
      link: "https://personal-blog007.netlify.app",
      img: `${blog}`,
      color: "#fff",
      backlinear: " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
    },
    {
      name: "ONDay Boutique Studio",
      description:
        "In my boutique website project, I created a fully responsive webpage using React Router for seamless navigation between various components. The website featured multiple components that showcased different sections, such as product listings . I incorporated animations to enhance the user experience and added custom JSON data to populate the website with product information. Through this project, I demonstrated my proficiency in creating visually appealing and interactive websites suitable for freelancing.",
      link: "https://ondayboutique.netlify.app",
      color: "#fff",
      backlinear: " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      img: `${onday}`,
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project projects={projects} />} />
      </Routes>
    </Router>
  );
};

export default App;
