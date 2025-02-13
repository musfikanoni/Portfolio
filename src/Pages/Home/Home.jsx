import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import Hero from "../Hero";
import Footer from "../Footer";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import AnimatedCursor from "react-animated-cursor";

const Home = () => {
    return (
        <div className="">
            <AnimatedCursor
                innerSize={0}
                outerSize={40} 
                innerScale={0} 
                outerScale={1.5}
                outerAlpha={1} // Fully visible outer cursor
                showSystemCursor={true} // Show the system's default arrow cursor
                hasBlendMode={false}
                outerStyle={{
                    border: '2px solid #c32644', 
                    backgroundColor: 'transparent', 
                    pointerEvents: 'none',
                }}
            />

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