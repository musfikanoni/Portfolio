import handshake from '../assets/pakka.png';
const ContactMe = () => {
    return (
        <div id="contact">
            <div className="max-w-7xl mx-auto">
            <h2 className='text-3xl font-bold text-center'>Contact Me</h2>
                <div className="hero min-h-screen">
                    <div className="hero-content justify-between grid md:grid-cols-2 grid-cols-1">
                        <div className="text-center lg:text-left">
                            <p className="py-6">
                                <img src={handshake} alt="" />
                            </p>
                        </div>
                        <div className="card ex-border backdrop-blur bg-[#FF014F]/5
                         w-full max-w-lg shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h4 className='text-2xl font-bold text-center pb-5'>Reach Me Out</h4>
                                <fieldset className="fieldset">
                                    <input type="name" className="input w-full" placeholder="Name" />
                                    <input type="email" className="input w-full my-3" placeholder="Email" />
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