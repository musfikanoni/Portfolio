import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import Hero from "../Hero";
import Footer from "../Footer";
import Skills from "../Skills";

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;