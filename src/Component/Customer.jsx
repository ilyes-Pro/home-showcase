import { Assets } from "../assets/Photos and Data/assets"
import { testimonialsData } from "../assets/Photos and Data/assets"
import React, { forwardRef } from "react"
import { motion } from "framer-motion";

const Customer = forwardRef((props, ref) => {

    return (

        <div className="mb-28" ref={ref}>
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }}
            >

                <h1 className='text-center mt-5 text-3xl mb-1.5'>
                    <span className="font-bold">Customer  </span>
                    <span className="underline">Testimonials</span>
                </h1>
                <p className='text-center mb-11  text-[var(--color-secand)] font-[var(--font-main)]'>
                    Real Stories form Those Who Found Homme with Us
                </p>

            </motion.div>
            <div className="flex justify-center items-center gap-9 flex-wrap ">

                {testimonialsData.map((a, index) =>
                    <motion.div
                        className="w-[320px] h-[350px]  rounded-lg shadow-2xl flex  justify-center items-center flex-col gap-1 cursor-pointer transition duration-200 delay-100 hover:transform hover:scale-110 
                    "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index / 3 }}
                        viewport={{ once: true, amount: 0.5, }}
                    >

                        <img src={a.image} alt={a.alt} />
                        <h1 className="mt-2.5 font-medium">{a.name}</h1>
                        <p className='   text-[var(--color-secand)] font-[var(--font-main)] text-sm'>
                            {a.title}
                        </p>
                        <div className="flex">
                            {
                                [...Array(a.rating)].map(() => <img
                                    src={Assets.star_icon}
                                    className="my-2.5 "
                                    alt="" />)}
                        </div>
                        <p className="text-center w-[250px] text-sm text-[var(--color-secand)]">{a.text}</p>


                    </motion.div>
                )}


            </div>
        </div>

    )
})

export default Customer;