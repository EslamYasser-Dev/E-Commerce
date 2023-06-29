import React, { useEffect, useRef, useState } from 'react';
import SideNavContent from './SideNavContent';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion';

const HeaderBottom = () => {
    const ref = useRef();
    const [sideBar, setSideBar] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSideBar(false);
            }
        });
    }, []);
    return (
        <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">

            {/*========================================List Items Start ===========================================*/}
            <ul className="flex items-center gap-2 tracking-wide">
                <li onClick={() => { setSideBar(true) }} className="headerhover"> <MenuIcon /> All</li>
                <li className="headerhover hidden md:inline-flex"> Today's Deals</li>
                <li className="headerhover hidden md:inline-flex">Customer Service</li>
                <li className="headerhover hidden md:inline-flex">Gift Cards</li>
                <li className="headerhover hidden md:inline-flex">Registry</li>
                <li className="headerhover hidden md:inline-flex">Sell</li>
            </ul>
            {/*========================================List Items ends ===========================================*/}
            {/*========================================side Items Stats ===========================================*/}
            {
                sideBar && (
                    <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
                        <div className="w-full h-full relative">
                            <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
                                className="w-[80%] md:w-[350px] h-full bg-white border border-black">
                                <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                                    <AccountCircleIcon />
                                    <h3 className="font-titleFont font-bold text-lg tracking-wide">Hello, Sign In</h3>
                                </div>
                                <SideNavContent title="Digital Content &Devices" one="Amazon Music" two="Kindle E-reader & Books" three="Amazon AppStore" />
                                <SideNavContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Homes" />
                                <SideNavContent title="program & Features" one="Gift Cards" two="Amazon Live" three="International Shopping" />
                                <SideNavContent title="Help & Setting" one="your Account" two="Customer service" three="more" />
                                <span onClick={() => { setSideBar(false) }}
                                 className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black 
                                 flex items-center justify-center
                            border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"><CloseIcon /></span>
                            </motion.div>
                        </div>
                    </div>
                )
            }
           {/*========================================side Items Ends ===========================================*/}



        </div>

    )
}

export default HeaderBottom;