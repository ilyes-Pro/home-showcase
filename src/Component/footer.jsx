import { Assets } from "../assets/Photos and Data/assets"
import React, { forwardRef } from "react"
import { usePage } from './context/nav-barContext';
import { motion } from "framer-motion";
const Footer = forwardRef((props, ref) => {


    const { page, setPage } = usePage();

    return (



        <footer className="bg-gray-900 text-white py-6" ref={ref}>
            <motion.div


                initial={{ opacity: 0 }}
                // animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, }}
            >
                <div className="container mx-auto  flex flex-col sm:flex-row justify-between xl:px-15 pl-3 mb-10 flex-wrap gap-3">

                    <div className="lg:w-3/12 md:w-4/12 w-11/12" >
                        <img src={Assets.logo_dark} alt="" className="md:w-[105px] w-[125px] mb-3" />
                        <p className="text-[var(--color-secand)] md:text-sm text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text . </p>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <h3 className="font-bold md:text-sm text-xl">Company</h3>
                        <a className=" md:text-sm text-xl hover:text-blue-400 transition text-[var(--color-secand)] mt-2 cursor-pointer" onClick={() => { setPage("main") }}>Home</a>
                        <a className=" md:text-sm text-xl hover:text-blue-400 transition text-[var(--color-secand)] cursor-pointer" onClick={() => { setPage("projects") }}>Projects</a>


                        <a className=" md:text-sm text-xl hover:text-blue-400 transition text-[var(--color-secand)] cursor-pointer" onClick={() => { setPage("about") }}>About Us</a>
                        <a className=" md:text-sm text-xl hover:text-blue-400 transition text-[var(--color-secand)] cursor-pointer" onClick={() => { setPage("contact") }}>Contact us</a>

                    </div>
                    <div className="lg:w-3/12 md:w-4/12 w-11/12">
                        <h3 className="font-bold md:text-sm text-xl">Subscribe to sur newsletter</h3>
                        <p className="text-[var(--color-secand)] my-3 md:text-sm text-xl">The latest news,articles,and resources,sent to your inbox weekly.</p>
                        <div className="flex justify-center items-center gap-2 ">

                            <input type="text" className="h-10 w-full bg-gray-800 p-3 rounded-sm focus:outline-none" placeholder="Enter your email" />
                            <button className='text-white md:text-xs text-sm bg-blue-500 p-2 rounded-sm w-24 h-10 cursor-pointer   hover:bg-blue-600  transition duration-300 font-(family-name:--font-main) font-medium '>Subscribe</button>
                        </div>
                    </div>


                </div>

                <hr className="w-11/12 m-auto text-[var(--color-secand)]" />
                <p className="text-sm text-center text-[var(--color-secand)] mt-4.5">Copyright {new Date().getFullYear()} &copy; Ilyes.All Right Reserved.</p>
            </motion.div>
        </footer>)
})
export default Footer;
