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
                    <div className="ex-border backdrop-blur bg-[#FF014F]/5">
                        <img className='p-5 rounded-lg' src={p1} alt="Project 1" />
                        <div className='pl-5 pb-3'>
                            <h3 className='font-bold text-[#FF014F] text-xl'>MovieHub</h3>
                            <p className='text-sm text-gray-300 py-3'>MoviHub is an entertainment website built with React and Firebase. The website supports CRUD operations, allowing users to add, update, delete, and mark movies as favorites. With an intuitive interface, it provides an easy-to-use platform for organizing and exploring movies.</p>
                            <h4><span className='text-lg font-semibold'>Tech stack:</span> <span className='text-base text-gray-300'>React, Express, MongoDB, Firebase</span></h4>
                        </div>
                        <div className="flex gap-3 pb-5 justify-center">
                            <a href="https://github.com/musfikanoni/MovieHub-Client" target='_blank'
                            className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                                <div className="flex items-center gap-2">
                                    <FaGithub className='text-2xl' />
                                    <p>View Code</p>
                                </div>
                            </a>
                            <a className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl" target='_blank' href="https://ph-assignment10.netlify.app/">Live Preview</a>
                        </div>
                    </div>
                    
                    {/* Project 2 */}
                    <div className="ex-border backdrop-blur bg-[#FF014F]/5">
                        <img className='p-5 rounded-lg' src={p2} alt="Project 2" />
                        <div className='pl-5 pb-3'>
                            <h3 className='font-bold text-[#FF014F] text-xl'>ReviewPulse</h3>
                            <p className='text-sm text-gray-300 py-3'>The Service Review Application System is a platform that allows users to explore, review, and manage various services. It offers a full-stack experience with features such as user authentication, CRUD operations, and secure database interactions and development skills.</p>
                            <h4><span className='text-lg font-semibold'>Tech stack:</span> <span className='text-base text-gray-300'>React, Express, MongoDB, Firebase</span></h4>
                        </div>
                        <div className="flex pb-5 gap-3 justify-center">
                            <a href="https://github.com/musfikanoni/ReviewPulse-client" target='_blank'
                            className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
                                <div className="flex items-center gap-2">
                                    <FaGithub className='text-2xl' />
                                    <p>View Code</p>
                                </div>
                            </a>
                            <a className="btn py-6 bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl" target='_blank' href="https://ph-assignment-11.netlify.app/">Live Preview</a>
                        </div>
                    </div>
                    
                    {/* Project 3 */}
                    <div className="ex-border backdrop-blur bg-[#FF014F]/5 ">
                        <img className='p-5 rounded-lg' src={p3} alt="Project 3" />
                        <div className='pl-5 pb-3'>
                            <h3 className='font-bold text-[#FF014F] text-xl'>Adoptopia</h3>
                            <p className='text-sm text-gray-300 py-2'>This project is a Pet Adoption Platform that facilitates the adoption process by allowing users to browse available pets, submit adoption requests, and contribute to donation campaigns. The platform also includes an admin dashboard for managing users, pets, and donations.</p>
                            <h4><span className='text-lg font-semibold'>Tech stack:</span> <span className='text-base text-gray-300'>React, Express, MongoDB, Firebase</span></h4>
                        </div>
                        <div className="flex pb-6 gap-3 justify-center">
                            <a href="https://github.com/musfikanoni/Adoptopia-client" target='_blank' 
                            className="btn bg-gradient-to-r py-6 from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl">
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
