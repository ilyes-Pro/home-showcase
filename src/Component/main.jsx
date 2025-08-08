
import NavBar from "./nav-bar"
import { Assets } from '../assets/Photos and Data/assets';
import React, { forwardRef, useEffect, useState } from "react"
import { ArrowUp } from 'lucide-react';
import { usePage } from './context/nav-barContext';
import { motion, AnimatePresence } from "framer-motion";


const Main = forwardRef((props, ref) => {
    const { page, setPage } = usePage();
    const [showArrowUp, SetshowArrowUp] = useState(false)
    useEffect(() => {
        const hadaleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 300) {
                SetshowArrowUp(true);
            } else {
                SetshowArrowUp(false);
            }
        }

        window.addEventListener("scroll", hadaleScroll)
        return () => window.removeEventListener("scroll", hadaleScroll);
    }, [])

    return (
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Assets.header_img})` }} ref={ref}>

            <NavBar />
            <motion.div
                initial={{ opacity: 0, y: -70 }}
                // animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

                className="flex flex-col justify-center items-center   " style={{ height: 'calc(100vh - 80px)' }}
            >

                <h1 className="md:text-6xl text-5xl text-white md:w-[50%] w-[95%] text-center font-bold">Explore homes that fit your dreams</h1>
                <div className="mt-10 flex gap-5">
                    <button className='text-white bg-transparent p-2 rounded-md w-28 cursor-pointer hover:bg-white hover:text-black border-white border-2 hover:p-1.5 transition duration-300 font-(family-name:--font-main) font-medium '>Sign up</button>
                    <button className='text-white bg-blue-500 p-2 rounded-md w-28 h-12 cursor-pointer   hover:bg-blue-600  transition duration-300 font-(family-name:--font-main) font-medium '>Sign up</button>

                </div>
            </motion.div>
            {/* 
            {ArrowU && <div className="bg-gray-600 w-14 h-14 fixed right-10 bottom-10 rounded-4xl flex justify-center items-center cursor-pointer">

                <ArrowUp size={35} strokeWidth={3} onClick={() => setPage("main")} className="trancsi"/>
            </div>} */}


            <AnimatePresence>
                {showArrowUp && (
                    <motion.div
                        className="bg-gray-600 w-14 h-14 fixed right-10 bottom-10 rounded-4xl flex justify-center items-center cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ArrowUp size={35} strokeWidth={3} onClick={() => setPage("main")} />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )

})
export default Main;