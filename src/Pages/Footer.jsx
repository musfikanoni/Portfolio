import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal backdrop-blur bg-[#FF014F]/5 text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <p>Copyright © {new Date().getFullYear()} - Musfika Naznin Oni. All rights reserved™</p>
            </aside>
            <nav className="grid-flow-col text-3xl gap-4 md:place-self-center md:justify-self-end justify-self-center">
                <a href="mailto:musfikanoni@gmail.com" target='_blank'><MdEmail /></a>
                <a href="https://github.com/musfikanoni" target='_blank'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/musfikaoni/" target='_blank'><FaLinkedin /></a>
                <a href="https://x.com/MusfikaOni" target='_blank'><FaSquareXTwitter /></a> 
            </nav>
            </footer>
        </div>
    );
};

export default Footer;