import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // أساسي
import 'swiper/css/navigation'; // إذا أردت الأسهم
import 'swiper/css/pagination'; // إذا أردت النقاط
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Assets } from '../assets/Photos and Data/assets';
import { projectsData } from '../assets/Photos and Data/assets';
import { forwardRef } from "react"



const Projects = forwardRef((props, ref) => {

    const pre = useRef(null)
    const nex = useRef(null)
    return (
        <div className='w-10/12 m-auto  ' ref={ref}>
            <div className="text-center">
                <h1 className='text-center mt-5 text-3xl mb-1.5'>
                    <span className="font-bold">Projects </span>
                    <span className="underline">Completed</span>
                </h1>
                <p className='text-center mb-11  text-[var(--color-secand)] font-[var(--font-main)]'>
                    Passionate About Properties, Dedicated to Your Vision
                </p>
            </div>
            <div >
                <div className='flex justify-end gap-2 mb-7'>

                    <button ref={pre} className='w-8 h-8 bg-[#e5e7e9] flex items-center justify-center rounded-xs'>
                        <img src={Assets.left_arrow} alt="" />

                    </button>


                    <button ref={nex} className='w-8 h-8 bg-[#e5e7e9] flex items-center justify-center rounded-xs'>

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

                            <SwiperSlide className='sm:!w-[280px] !p-0 sm:!h-[350px] mb-14 ' key={index}>
                                <img src={a.image} alt="Slide 1" />
                                <div className='w-[75%] h-[60px] bg-white absolute bottom-0 right-[50%] translate-[50%] shadow-md'>
                                    <div className='ml-4 mt-1.5'>
                                        <h1 className='font-bold text-lg'>{a.title}</h1>
                                        <p className='text-[var(--color-secand)] text-sm'>{a.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide  >

                        )


                    })}

                </Swiper>
            </div>
        </div>


    )
})

export default Projects;