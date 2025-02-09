import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import Hero from "../Hero";

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
            <AboutMe></AboutMe>
        </>
    );
};

export default Home;