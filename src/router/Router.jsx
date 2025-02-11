import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Hero from "../Pages/Hero";
import AboutMe from "../Pages/AboutMe";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import ContactMe from "../Pages/ContactMe";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Home></Home>,
          children: [
            {
                path: "hero",
                element: <Hero></Hero>
            },
            {
                path: "aboutme",
                element: <AboutMe></AboutMe>
            },
            {
                path: "skills",
                element: <Skills></Skills>
            },
            {
              path: "projects",
              element: <Projects></Projects>
            },
            {
              path: "contact",
              element: <ContactMe></ContactMe>
            }
          ]
        },
      ]);

export default router;