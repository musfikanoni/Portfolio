import { Link } from 'react-scroll';
import logo from '../assets/sitelogo.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ['hero', 'aboutme', 'skills', 'projects', 'contact'];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop - 80 &&
                        scrollPosition < offsetTop + offsetHeight - 80
                    ) {
                        setActiveLink(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = <>
        <li>
            <Link 
                to="hero" 
                className={`cursor-pointer ${activeLink === 'hero' ? 'text-[#FF014F] rounded-none border-b-2 border-[#FF014F]' : ''}`}
                smooth={true} 
                offset={-70} 
                duration={500}
            >
                Home
            </Link>
        </li>
        <li>
            <Link 
                to="aboutme" 
                className={`cursor-pointer ${activeLink === 'aboutme' ? 'text-[#FF014F] rounded-none border-b-2 border-[#FF014F]' : ''}`}
                smooth={true} 
                offset={-70} 
                duration={500}
            >
                About Me
            </Link>
        </li>
        <li>
            <Link 
                to="skills" 
                className={`cursor-pointer ${activeLink === 'skills' ? 'text-[#FF014F] rounded-none border-b-2 border-[#FF014F]' : ''}`}
                smooth={true} 
                offset={-70} 
                duration={500}
            >
                Skills
            </Link>
        </li>
        <li>
            <Link 
                to="projects" 
                className={`cursor-pointer ${activeLink === 'projects' ? 'text-[#FF014F] rounded-none border-b-2 border-[#FF014F]' : ''}`}
                smooth={true} 
                offset={-70} 
                duration={500}
            >
                Projects
            </Link>
        </li>
        <li>
            <Link 
                to="contact" 
                className={`cursor-pointer ${activeLink === 'contact' ? 'text-[#FF014F] rounded-none border-b-2 border-[#FF014F]' : ''}`}
                smooth={true} 
                offset={-70} 
                duration={500}
            >
                Contact Me
            </Link>
        </li>
    </>;
    
    return (
        <div className="backdrop-blur py-3 bg-white/5 sticky z-10 top-0">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} className='h-16' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-white text-[16px] font-semibold px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl" target='_blank' href='https://drive.google.com/file/d/17OwmKdJgE_JgutFR09mXALzANxFVqgF7/view'>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
