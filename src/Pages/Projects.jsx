import { FaGithub } from 'react-icons/fa';
import p1 from '../assets/projects/1.png';
import p2 from '../assets/projects/2.png';
import p3 from '../assets/projects/3.png';

const Projects = () => {
    return (
        <div id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className='text-center text-3xl font-bold'>My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Project 1 */}
                    <div className="border-gradient">
                        <img className='p-5 rounded-lg' src={p1} alt="Project 1" />
                        <div className="flex gap-3 pb-5 justify-center">
                            <a href="" className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                                <div className="flex items-center gap-2">
                                    <FaGithub className='text-2xl' />
                                    <p>View Code</p>
                                </div>
                            </a>
                            <a className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl" target='_blank' href="https://ph-assignment10.netlify.app/">Live Preview</a>
                        </div>
                    </div>
                    
                    {/* Project 2 */}
                    <div className="border-gradient">
                        <img className='p-5 rounded-lg' src={p2} alt="Project 2" />
                        <div className="flex pb-5 gap-3 justify-center">
                            <a href="" className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                                <div className="flex items-center gap-2">
                                    <FaGithub className='text-2xl' />
                                    <p>View Code</p>
                                </div>
                            </a>
                            <a className="btn py-6 bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl" target='_blank' href="https://ph-assignment-11.netlify.app/">Live Preview</a>
                        </div>
                    </div>
                    
                    {/* Project 3 */}
                    <div className="border-gradient ">
                        <img className='p-5 rounded-lg' src={p3} alt="Project 3" />
                        <div className="flex pb-6 gap-3 justify-center">
                            <a href="" className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                                <div className="flex items-center gap-2">
                                    <FaGithub className='text-2xl' />
                                    <p>View Code</p>
                                </div>
                            </a>
                            <a className="btn py-6 bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl" target='_blank' href="https://ph-assignment-12.netlify.app/">Live Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
