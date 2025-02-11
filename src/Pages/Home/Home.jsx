import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import Hero from "../Hero";
import Footer from "../Footer";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactMe from "../ContactMe";

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;