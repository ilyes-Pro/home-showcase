import { Assets } from '../assets/Photos and Data/assets';
import { useEffect, useState } from 'react';
import { usePage } from './context/nav-barContext';
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X } from 'lucide-react';

export default function NavBar() {
    const [menu, setMenu] = useState(false);
    const { page, setPage } = usePage();
    const [darkMode, setDarkMode] = useState(true);


    useEffect(() => {
        let theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(false);

        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(true);
        }
    }, []);

    function handlDarkMod() {
        const newMode = !darkMode; // القيمة الجديدة
        setDarkMode(newMode);

        if (!newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", 'lite');
        }
    }

    return (


        <motion.div
            initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='flex md:justify-between  justify-between items-center pt-5 flex-wrap  md:px-0 px-5 w-11/12 m-auto'
        >


            <img src={darkMode ? Assets.logo : Assets.logo_dark} alt="Logo" className=' cursor-pointer ' />
            <ul className=' hidden  md:gap-5  cursor-pointer st md:flex'>

                <li className="font-(family-name:--font-main) relative inline-block text-white cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300 " onClick={() => setPage("main")}>Home</li>


                <li className="font-(family-name:--font-main) relative inline-block text-white cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300"  onClick={() => setPage("about")}>About</li>


                <li className="font-(family-name:--font-main) relative inline-block text-white cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300"  onClick={() => setPage("projects")}>Projects</li>


                <li className="font-(family-name:--font-main) relative inline-block text-white cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300" onClick={() => setPage("testimonials")}>Testimonials</li>


            </ul>

            <img src={Assets.menu_icon} alt="Logo" className='size-7 cursor-pointer block md:hidden' onClick={() => setMenu(true)} />
            {/* <Menu className='text-white size-7' /> */}

            <AnimatePresence>
                {menu && <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    // whileInView={{ opacity: 1,}}
                    exit={{ opacity: 0 }}
                    viewport={{ once: true }}
                    className='h-screen w-screen bg-white dark:bg-gray-900 fixed top-0 left-0 z-50 block  md:hidden '
                >

                    <div className='flex flex-row-reverse items-center justify-between pt-5    px-4 w-11/12 m-auto'>
                        <X size={40} className='dark:text-white  text-black  cursor-pointer block md:hidden ' onClick={() => setMenu(false)} />
                        {darkMode ? <Sun onClick={handlDarkMod} size={40} color='black' className=' cursor-pointer' /> : <Moon onClick={handlDarkMod} size={40} color='white' className=' cursor-pointer' />}
                    </div>
                    <ul className='flex flex-col items-center gap-5  cursor-pointer pt-15'>

                        <li className="font-(family-name:--font-main) relative inline-block text-black cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300 dark:text-white" onClick={() => { setPage("main"); setMenu(false) }}>Home</li>


                        <li className="font-(family-name:--font-main) relative inline-block text-black cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300 dark:text-white"  onClick={() => { setPage("about"); setMenu(false) }}>About</li>


                        <li className="font-(family-name:--font-main) relative inline-block text-black cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300 dark:text-white" onClick={() => { setPage("projects"); setMenu(false) }}>Projects</li>


                        <li className="font-(family-name:--font-main) relative inline-block text-black cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300 dark:text-white" onClick={() => { setPage("testimonials"); setMenu(false) }}>Testimonials</li>

                        <li className="font-(family-name:--font-main) relative inline-block text-black cursor-pointer 
           after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
           after:h-[2px] after:w-full after:bg-red-300
           after:scale-x-0 after:origin-center
           hover:after:scale-x-100
           after:transition-transform after:duration-300 dark:text-white" onClick={() => { setPage("contact"); setMenu(false) }}>Contact</li>

                    </ul>

                </motion.div>}
            </AnimatePresence>
            <div className=' hidden md:block md:ml-19 '>
                {darkMode ? <Sun onClick={handlDarkMod} size={43} color='white' className=' cursor-pointer ' /> : <Moon onClick={handlDarkMod} size={43} className=' cursor-pointer' />}
            </div>


        </motion.div>









    )
}
