
import { Assets } from '../assets/Photos and Data/assets';
import React, { forwardRef } from "react"
import { motion } from "framer-motion";


const About = forwardRef((props, ref) => {




    return (


        <div className="w-11/12  mx-auto px-4 " ref={ref}>
            <motion.div
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }}
            >
                <h1 className='text-center mt-5 text-3xl mb-1.5'>
                    <span className="font-bold">About </span>
                    <span className="underline">Our Brand</span>
                </h1>
                <p className='text-center mb-11  text-[var(--color-secand)] font-[var(--font-main)]'>
                    Passionate About Properties, Dedicated to Your Vision
                </p>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-17 pb-8" >

                <motion.img
                    src={Assets.brand_img}
                    alt=""
                    className="w-full md:w-2/5"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                    viewport={{
                        once: true,
                        amount: 0.7
                    }}
                />




                <motion.div className='w-full md:w-2/5'
                    initial={{ opacity: 0, x: +30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                    viewport={{
                        once: true,
                        amount: 0.7
                    }}
                >

                    <div className='flex gap-15 mb-6'>
                        <div>
                            <span className='font-medium text-4xl'>10+</span>
                            <h6 className='text-[var(--color-secand)]'>Years of Excellence</h6>
                        </div>
                        <div>
                            <span className='font-medium text-4xl'>12+</span>
                            <h6 className='text-[var(--color-secand)]'>Years of Excellence</h6>
                        </div>
                    </div>

                    <div className='flex gap-15 mb-6'>
                        <div>
                            <span className='font-medium text-4xl'>20+</span>
                            <h6 className='text-[var(--color-secand)]'>Years of Excellence</h6>
                        </div>
                        <div>
                            <span className='font-medium text-4xl'>25+</span>
                            <h6 className='text-[var(--color-secand)]'>Years of Excellence</h6>
                        </div>
                    </div>

                    <p className='mb-6 text-[var(--color-secand)]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                    <button className='text-white bg-blue-500 px-10 py-2.5 rounded-md hover:bg-blue-600 transition duration-300 font-medium cursor-pointer'>
                        Sign up
                    </button>

                </motion.div>

            </div>
        </div>

    )
})

export default About;