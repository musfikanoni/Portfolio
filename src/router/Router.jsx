import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Hero from "../Pages/Hero";
import AboutMe from "../Pages/AboutMe";

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
            }
          ]
        },
      ]);

export default router;