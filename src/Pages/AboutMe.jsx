import img from '../assets/about-me.png';
const AboutMe = () => {
    return (
        <div id="aboutme">
            {/* <h2 className="text-3xl text-center font-semibold">About Me</h2> */}
            <div className="hero min-h-screen">
                <div className="hero-content max-w-7xl mx-auto flex-col border lg:flex-row">
                    <div className="w-6/12">
                        <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-6/12">
                        <h2>About Me</h2>
                        <p className="py-6">
                            Hello! I’m Musfika Naznin Oni, a passionate Fontend developer specializing React ,Tailwind ,Express mongoDb My focus is on making web development faster, easier, and accessible to all developers. Currently, I’m expanding into backend development to grow as a Fontend development and create seamless, robust web applications.

                            I’m a lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;