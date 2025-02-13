import img from '../assets/about.png';
import { Link } from 'react-scroll';
const AboutMe = () => {
    return (
        <div id="aboutme">
            {/* <h2 className="text-3xl text-center font-semibold">About Me</h2> */}
            <div className="hero min-h-screen">
                <div className=" max-w-7xl mx-auto ex-border">
                    <div className=" hero-content rounded-xl flex-col lg:flex-row backdrop-blur bg-white/5">
                        <div className="w-6/12 rounded-lg">
                            <img
                            src={img}
                            className="max-w-sm  shadow-2xl" />
                        </div>
                        <div className="w-6/12">
                            <h2 className='text-[#FF014F] text-2xl font-semibold'>About Me</h2>
                            <p className="py-6">
                                Hello! I’m Musfika Naznin Oni, a passionate Fontend developer specializing React ,Tailwind ,Express mongoDb My focus is on making web development faster, easier, and accessible to all developers. Currently, I’m expanding into backend development to grow as a Fontend development and create seamless, robust web applications.

                                I’m a lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.
                            </p>
                            <Link 
                                to="projects" 
                                smooth={true} 
                                offset={-70} 
                                duration={500} 
                                className="btn bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl cursor-pointer"
                            >
                                View My Projects
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;