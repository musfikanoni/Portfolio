import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client";
import '../styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules'; 
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";
import js from "../assets/skills/js.png"; 
import react from "../assets/skills/react.png"; 
import firebase from "../assets/skills/firebase.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import mongo from "../assets/skills/mongoDB.png";
import jwt from "../assets/skills/jwt.png";


const Skills = () => {

    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <div id="skills" >
            <h2 className='text-center text-2xl font-bold'>My Skills</h2>
            <section className='px-4 lg:px-0 max-w-7xl mx-auto'>

            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false, 
                }}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                spaceBetween={40}
                className="mySwiper"
                breakpoints={{
                    //mobile devices
                    390: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    //tablets
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    //small desktops
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                }}
            >
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18 w-auto" src={html} alt="" />
                        <p className="text-xl font-bold">HTML 5</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={css} alt="" />
                        <p className="text-xl font-bold">CSS 3</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-5"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-14" src={tailwind} alt="" />
                        <p className="text-xl font-bold">Tailwindcss</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={bootstrap} alt="" />
                        <p className="text-xl font-bold">Bootstrap</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={js} alt="" />
                        <p className="text-xl font-bold">JavaScript</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}  
                    >
                        <img className="h-20" src={react} alt="" />
                        <p className="text-xl font-bold">React Js</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                    <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={firebase} alt="" />
                        <p className="text-xl font-bold">Firebase</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                    <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={node} alt="" />
                        <p className="text-xl font-bold">Node Js</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={express} alt="" />
                        <p className="text-xl font-bold">Express Js</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={mongo} alt="" />
                        <p className="text-xl font-bold">MongoDB</p>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className='border border-green-300 rounded-lg'>
                <motion.div className="flex justify-center gap-5 items-center mt-3"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}  
                    >
                        <img className="h-18" src={jwt} alt="" />
                        <p className="text-xl font-bold">JWT</p>
                    </motion.div>
                </SwiperSlide>
            </Swiper>

            </section>
        </div>
    );
};

export default Skills;