import handshake from '../assets/pakka.png';
const ContactMe = () => {
    return (
        <div id="contact">
            <div className="max-w-7xl mx-auto">
            <h2 className='text-5xl mt-28 font-bold text-[#FF014F] text-center'>Contact Me</h2>
                <div className="hero min-h-screen">
                    <div className="hero-content -mt-24 justify-between grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                        <div className="text-center lg:text-left">
                            <p className="py-6">
                                <img src={handshake} alt="" />
                            </p>
                        </div>
                        <div className="card ex-border backdrop-blur bg-[#FF014F]/5
                         w-full lg:mx-0 mx-auto max-w-lg shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h4 className='text-2xl font-bold text-center pb-5'>Reach Me Out</h4>
                                <fieldset className="fieldset">
                                    <input type="name" className="input w-full" placeholder="Name" />
                                    <input type="email" className="input w-full my-3" placeholder="Email" />
                                    <input type="number" className="input w-full my-3" placeholder="Phone number" />
                                    <textarea className="textarea textarea-bordered w-full " placeholder="Your Message"></textarea>        
                                    <button className="btn bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;