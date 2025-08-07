
import { Assets } from '../assets/Photos and Data/assets';
import React, { forwardRef } from "react"



const About = forwardRef((props, ref) => {




    return (


        <div className="w-11/12  mx-auto px-4 " ref={ref}>
            <h1 className='text-center mt-5 text-3xl mb-1.5'>
                <span className="font-bold">About </span>
                <span className="underline">Our Brand</span>
            </h1>
            <p className='text-center mb-11  text-[var(--color-secand)] font-[var(--font-main)]'>
                Passionate About Properties, Dedicated to Your Vision
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-17 pb-8" >
                <img src={Assets.brand_img} alt="" className='w-full md:w-2/5' />

                <div className='w-full md:w-2/5'>
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
                </div>
            </div>
        </div>

    )
})

export default About;