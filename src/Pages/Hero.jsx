
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
          <div className="hero-content flex-col lg:flex-row-reverse z-0">
            <div className="w-6/12 flex justify-end">
              <img src={heroPic} className=" h-[400px]  w-auto" />
            </div>
            <div className="w-6/12">
              <h1 className="text-3xl text-[#FF014F] font-bold">Hi there, I'm <br /><span className="text-7xl"> MUSFIKA NAZNIN ONI</span></h1>
              <span style={{ color: '#FF014F', fontWeight: 'bold', fontSize: '32px' }}>
                <Typewriter
                  words={['MERN Stack developer', 'Problem Solver', 'Creative Coder', 'A Life long learner']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>

              <div className="flex items-center my-3">
                {/* <FaLocationDot />
                <p>Based in Barishal, Bangladesh</p> */}
              </div>
              
              <a href="https://drive.google.com/file/d/17OwmKdJgE_JgutFR09mXALzANxFVqgF7/view?usp=sharing" target='_blank'>
                <button className="btn text-base py-6 bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                  Download Resume <HiDownload className='text-xl' /></button>
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
    </div>
  );
};

export default Hero;
