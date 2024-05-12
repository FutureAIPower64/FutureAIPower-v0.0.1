import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/header-Logo.png";
import tool from "../assets/tool.jpeg";
import ToggleSwitch from "./ToggleSwitch";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardCommandKey } from "react-icons/md";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className=" xl:px-20 fixed top-0 left-0 right-0 z-50  bg-white dark:bg-dark-black border-b-1 dark:border-dark-grey">
            <header className="  text-white duration-300 ">
                <nav className=" mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center  lg:hidden">
                        <Link to="/" className="text-xl font-bold">
                            <img src={logo} className=" w-16"></img>
                        </Link>
                    </div>
                    <div className="hidden lg:flex md:items-center md:space-x-4 text-zinc-400   font-semibold">
                        <Link to="/" className="text-xl font-bold">
                            <img src={logo} className=" w-16"></img>
                        </Link>
                        <Link to="/AI-Tools" className="hover:text-black px-3 dark:hover:text-white duration-300">
                            AI Tools
                        </Link>
                        <Link to="/AI-News" className="hover:text-black px-3 dark:hover:text-white duration-300">
                            AI News
                        </Link>
                        <Link to="/Blog" className="hover:text-black px-3 dark:hover:text-white duration-300">
                            Blog
                        </Link>
                        <Link to="/Contact" className="hover:text-black px-3 dark:hover:text-white duration-300">
                            Contact Us
                        </Link>
                        <Link to="/Favourites" className="hover:text-black px- dark:hover:text-white duration-3003">
                            Favourites
                        </Link>
                        <Link to="/About" className="hover:text-black px-3 dark:hover:text-white duration-300">
                            About Us
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <div className="relative lg:block hidden">
                            <div>
                                <input type="text" className=" bg-white hover:bg-light-gray dark:hover:bg-dark-black  dark:bg-dark-black text-black duration-300 dark:text-white px-4 py-1 rounded lg:w-52 xl:w-64 outline-none ring-1 dark:ring-dark-grey ring-gray-300 " placeholder="Search your tools..." />
                            </div>
                            <div className="absolute right-1 top-1 text-gray-400 ">
                                <div className="flex items-center  dark:bg-dark-grey dark:ring-dark-grey px-2 bg-light-gray  ring-1 ring-gray-300 rounded text-zinc-400  ">
                                    <MdKeyboardCommandKey />
                                    <span>k</span>
                                </div>
                            </div>
                        </div>

                        <div className="ms-3 me-2">
                            <ToggleSwitch />
                        </div>
                        <div className=" lg:block hidden ">
                            <img src={tool} alt="User Logo" className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                    <div className="lg:hidden flex ">
                        <ToggleSwitch />
                        <button type="button" className="text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu} >
                            <HiBars3CenterLeft className="h-6 w-6 fill-current rotate-180 text-black dark:text-white" />
                        </button>
                    </div>
                </nav>

                {/* Offcanvas Menu --------------------------------------------------- */}
                <div className={`dark:border-2 dark:border-white lg:hidden fixed inset-0 z-10 transition-all duration-300  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} >
                    <div className=" bg-opacity-50 inset-0 fixed transition-opacity duration-300" onClick={toggleMenu} ></div>
                    <div className={`dark:bg-black  bg-white text-black dark:text-white w-64 h-full p-4 fixed right-0 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex justify-between my-2 ">
                            <div className="">
                                <img src={tool} alt="User Logo" className="h-8 w-8 rounded-full" />
                            </div>
                            <button type="button" className="text-black text-xl dark:text-white hover:text-white focus:outline-none" onClick={toggleMenu}>
                                <RxCross2 />
                            </button>
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="relative py-2">
                                <input type="text" className="dark:bg-gray-700 dark:text-white duration-300 px-4 py-1 rounded w-full outline-none ring-1 ring-gray-200" placeholder="Search your tools..." />
                            </div>
                        </div>
                        <div className="mt-8 space-y-4">
                            <Link to="/AI-Tools" className="block text-gray-700 hover:text-white hover:bg-light-gray p-2 rounded-md"> AI Tools </Link>
                            <Link to="/AI-News" className="block text-gray-700 hover:text-white hover:bg-light-gray p-2 rounded-md"> AI News </Link>
                            <Link to="/Blog" className="block text-gray-700 hover:text-white hover:bg-light-gray p-2 rounded-md"> Blog </Link>
                            <Link to="/Contact" className="block text-gray-700 hover:text-white hover:bg-light-gray p-2 rounded-md"> Contact Us </Link>
                            <Link to="/Favourites" className="block text-gray-700 hover:text-white hover:bg-light-gray p-2 rounded-md"> Favourites </Link>
                            <Link to="/About" className="block text-gray-700 hover:text-white hover:bg-light-gray p-2 rounded-md "> About Us </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    );
};
export default Header;
