import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
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
        <div id="skills" className='bg-gray-900' >
            <h2 className='text-center text-2xl font-bold'>My Skills</h2>
            <section className='px-4 py-5 lg:px-0 max-w-7xl mx-auto'>

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
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18 w-auto" src={html} alt="" />
                        <p className="text-xl text-black font-bold">HTML 5</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={css} alt="" />
                        <p className="text-xl text-black font-bold">CSS 3</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-5">
                        <img className="h-14" src={tailwind} alt="" />
                        <p className="text-xl text-black font-bold">Tailwindcss</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={bootstrap} alt="" />
                        <p className="text-xl text-black font-bold">Bootstrap</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={js} alt="" />
                        <p className="text-xl text-black font-bold">JavaScript</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-4 items-center mt-3">
                        <img className="h-20" src={react} alt="" />
                        <p className="text-xl text-black font-bold">React Js</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={firebase} alt="" />
                        <p className="text-xl text-black font-bold">Firebase</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={node} alt="" />
                        <p className="text-xl text-black font-bold">Node Js</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={express} alt="" />
                        <p className="text-xl text-black font-bold">Express Js</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={mongo} alt="" />
                        <p className="text-xl text-black font-bold">MongoDB</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' rounded-lg'>
                    <div className="flex justify-center gap-5 items-center mt-3">
                        <img className="h-18" src={jwt} alt="" />
                        <p className="text-xl text-black font-bold">JWT</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            </section>
        </div>
    );
};

export default Skills;