
import { HiDownload } from 'react-icons/hi';
import heroPic from '../assets/pic.png';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {

  return (
    <div className="hero-bg">
      <div className="max-w-7xl mx-auto" id="hero">
        <div className="hero min-h-screen relative">
          <div className="hero-content grid-flow-col-dense grid grid-cols-1 lg:grid-cols-2 z-0">
            <div className="md:w-full w-[430px] md:mt-0 mt-56">
              <h1 className="md:text-3xl text-2xl text-[#FF014F] font-semibold">Hi there, I'm <br />
                <span className="lg:text-8xl md:text-5xl text-3xl"> MUSFIKA NAZNIN ONI</span>
              </h1>
              <div className="pt-5">
                <span style={{ color: '#FF014F', fontWeight: 'medium' }} className="text-xl sm:text-xl md:text-2xl lg:text-3xl">
                  <Typewriter
                    words={['Front-End developer', 'Problem Solver', 'Creative Coder', 'A Life Long Learner']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span><br />
              </div>
              
              <a href="https://drive.google.com/file/d/17OwmKdJgE_JgutFR09mXALzANxFVqgF7/view?usp=sharing" target='_blank'>
                <button className="btn my-5 text-base py-6 bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                  Download Resume <HiDownload className='text-xl' /></button>
              </a>
              <div className='flex text-3xl gap-3 mt-3'>
                <a href="mailto:musfikanoni@gmail.com" target='_blank'><MdEmail /></a>
                <a href="https://github.com/musfikanoni" target='_blank'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/musfikaoni/" target='_blank'><FaLinkedin /></a>
                <a href="https://x.com/MusfikaOni" target='_blank'><FaSquareXTwitter /></a>   
              </div>
            </div>
            <div className="flex justify-end lg:mr-10 mr-3 md:-mt-0 -mt-96">
              <img src={heroPic} className=" lg:h-[400px] md:h-[300px] h-200px  w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
