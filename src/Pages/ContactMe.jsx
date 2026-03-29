import handshake from "../assets/pakka.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { toast } from "sonner";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ MUST

    const form = e.target;

    if (form.name.value && form.email.value && form.message.value) {
      toast.success('Message sent successfully!');
      form.reset();
    }
  };

  return (
    <div id="contact">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <h2 className="lg:text-5xl md:text-4xl text-3xl mt-16 font-bold text-[#FF014F] text-center">
          Contact Me
        </h2>
        <div className="hero min-h-screen">
          <div className="hero-content -mt-24 justify-between grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
            <div data-aos="fade-right" className="text-center lg:text-left">
              <p className="py-6 lg:mt-0 mt-10">
                <img src={handshake} alt="" />
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="card ex-border backdrop-blur bg-[#FF014F]/5 
                         w-full lg:mx-0 mx-auto max-w-lg shrink-0 shadow-2xl"
            >
              <div className="card-body">
                <h4 className="text-2xl font-bold text-center pb-5">
                  Reach Me Out
                </h4>
                <fieldset className="fieldset">
                  <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                      <input
                        name="name"
                        type="text"
                        className="input w-full"
                        placeholder="Name"
                      />

                      <input
                        name="email"
                        type="email"
                        className="input w-full my-3"
                        placeholder="Email"
                      />

                      <input
                        name="phone"
                        type="number"
                        className="input w-full my-3"
                        placeholder="Phone number"
                      />

                      <textarea
                        name="message"
                        className="textarea textarea-bordered w-full"
                        placeholder="Your Message"
                      ></textarea>

                      <button
                        type="submit"
                        className="btn bg-gradient-to-r from-[#471928] via-[#8a002a] to-[#ff2c6d] border-none px-5 rounded-3xl mt-4"
                      >
                        Submit
                      </button>
                    </fieldset>
                  </form>
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
