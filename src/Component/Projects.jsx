import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // أساسي
import 'swiper/css/navigation'; // إذا أردت الأسهم
import 'swiper/css/pagination'; // إذا أردت النقاط
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Assets } from '../assets/Photos and Data/assets';
import { projectsData } from '../assets/Photos and Data/assets';
import { forwardRef } from "react"
import { motion } from "framer-motion";


const Projects = forwardRef((props, ref) => {

    const pre = useRef(null)
    const nex = useRef(null)
    return (
        <div className='dark:bg-black '>
            <div className='w-10/12 m-auto ' ref={ref}>
                <div className="text-center">
                    <h1 className='text-center pt-5 text-3xl mb-1.5 dark:text-white'>
                        <span className="font-bold">Projects </span>
                        <span className="underline">Completed</span>
                    </h1>
                    <p className='text-center mb-11  text-[var(--color-secand)] font-[var(--font-main)]'>
                        Passionate About Properties, Dedicated to Your Vision
                    </p>
                </div>
                <div >
                    <div className='flex justify-end gap-2 mb-7'>

                        <button ref={pre} className='w-8 h-8 bg-[#e5e7e9] flex items-center justify-center rounded-xs dark:bg-gray-800'>
                            <img src={Assets.left_arrow} alt="" />

                        </button>


                        <button ref={nex} className='w-8 h-8 bg-[#e5e7e9] flex items-center justify-center rounded-xs dark:bg-gray-800'>

                            <img src={Assets.right_arrow} alt="" />
                        </button>

                    </div>


                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        // navigation
                        // pagination={{ clickable: true }}
                        // autoplay={{ delay: 3000 }}

                        navigation={{
                            prevEl: pre.current,
                            nextEl: nex.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // ربط الأزرار قبل التهيئة
                            swiper.params.navigation.prevEl = pre.current;
                            swiper.params.navigation.nextEl = nex.current;
                        }}

                        loop={true}
                        spaceBetween={25}
                        slidesPerView='auto'
                    >

                        {projectsData.map((a, index) => {

                            return (

                                <SwiperSlide className='relative overflow-visible sm:!w-[280px] !p-0 sm:!h-[350px] mb-14' key={index}>
                                    <motion.img
                                        src={a.image}
                                        alt="Slide 1"
                                        className="w-full h-auto object-cover"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index / 7 }}
                                        viewport={{ once: true, }}
                                    />
                                    <motion.div
                                        src={a.image}
                                        alt="Slide 1"
                                        className='dark:bg-black w-[75%] h-[60px] bg-white absolute sm:bottom-[-40px] bottom-[-30px] right-[50%]  translate-x-[50%] shadow-md'
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + index / 6.7 }}
                                        viewport={{ once: true, }}
                                    >


                                        <div className='ml-4 mt-1.5'>
                                            <h1 className='font-bold text-lg dark:text-white'>{a.title}</h1>
                                            <p className='text-[var(--color-secand)] text-sm'>{a.price}</p>
                                        </div>

                                    </motion.div>
                                </SwiperSlide>


                            )


                        })}

                    </Swiper>
                </div>
            </div>
        </div>

    )
})

export default Projects;