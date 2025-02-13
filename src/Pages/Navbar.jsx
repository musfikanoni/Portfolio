import { Link } from 'react-scroll';
import logo from '../assets/logo2.png';

const Navbar = () => {

    const handleSetActive = (to) => {
        console.log(to);
      };

    const links = <>
        <li>
        <Link to="hero" activeClass="active" smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
            Home
        </Link>
        </li>
        <li>
        <Link to="aboutme" activeClass="active" smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
            About Me
        </Link>
        </li>

        <li>
            <Link to="skills" activeClass="active" smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                skills
            </Link>
        </li>
        <li>
            <Link to="projects" activeClass="active" smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                Projects
            </Link>
        </li>
        <li>
            <Link to="contact" activeClass="active" smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
            Contact Me
            </Link>
        </li>
    </>
    return (
        <div className="backdrop-blur py-3 bg-white/5 sticky z-10 top-0">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <img src={logo} className='h-14' alt="" />
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