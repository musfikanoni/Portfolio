import { HiDownload } from 'react-icons/hi';
import heroPic from '../assets/pic.png';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {

    return (
        <div className="max-w-7xl mx-auto" id="hero">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-6/12 flex justify-center">
                        <img
                            src={heroPic}
                            className="h-[600px] w-auto" />
                    </div>
                    <div className="w-6/12">
                        <h1 className="text-3xl text-green-500 font-bold">Hi there, I'm <br /><span className="text-7xl"> MUSFIKA NAZNIN ONI</span></h1>
                        <span style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }}>
                            <Typewriter
                                words={['MERN Stack developer', 'Problem Solver', 'A Life long learner']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            </span>

                        <div className="flex items-center my-3">
                            <FaLocationDot />
                            <p>Based in Barishal, Bangladesh</p>
                        </div>
                        
                        <a href="https://drive.google.com/file/d/17OwmKdJgE_JgutFR09mXALzANxFVqgF7/view?usp=sharing" target='_blank'>
                            <button className="btn bg-green-400 text-black">Download Resume <HiDownload className='text-xl' /></button>
                        </a>
                        <div className='flex text-3xl gap-3 mt-3'>
                            <a href="mailto:musfikanoni@gmail.com" target='_blank'><MdEmail /></a>
                            <a href="https://github.com/musfikanoni" target='_blank'><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/musfikaoni/" target='_blank'><FaLinkedin /></a>
                            <a href="https://x.com/MusfikaOni" target='_blank'><FaSquareXTwitter /></a>   
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default Hero;