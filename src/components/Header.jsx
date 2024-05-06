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
        <div className="fixed top-0 left-0 right-0 z-50">
            <header className="dark:bg-dark-black border-b-1 dark:border-card-border text-white duration-300 bg-blue-950 ">
                <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold">
                            <img src={logo} className=" w-16"></img>
                        </Link>
                    </div>
                    <div className="hidden lg:flex md:items-center md:space-x-4">
                        <Link to="/AI-Tools" className="hover:text-gray-300 px-3">
                            AI Tools
                        </Link>
                        <Link to="/AI-News" className="hover:text-gray-300 px-3">
                            AI News
                        </Link>
                        <Link to="/Blog" className="hover:text-gray-300 px-3">
                            Blog
                        </Link>
                        <Link to="/Contact" className="hover:text-gray-300 px-3">
                            Contact Us
                        </Link>
                        <Link to="/Favourites" className="hover:text-gray-300 px-3">
                            Favourites
                        </Link>
                        <Link to="/About" className="hover:text-gray-300 px-3">
                            About Us
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <div className="relative lg:block hidden">
                            <div>
                                <input type="text" className="dark:bg-gray-700 text-black duration-300 dark:text-white px-4 py-1 rounded lg:w-52 xl:w-64 outline-none ring-1 ring-gray-200" placeholder="Search your tools..." />
                            </div>
                            <div className="absolute right-1 top-1 text-gray-400">
                                <div className="flex items-center border-1 px-1 bg-slate-300 text-black rounded">
                                    <MdKeyboardCommandKey />
                                    <span>k</span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 lg:block hidden ">
                            <img src={tool} alt="User Logo" className="h-8 w-8 rounded-full" />
                        </div>
                        <div className="ml-4">
                            <ToggleSwitch />
                        </div>
                    </div>
                    <div className="lg:hidden flex gap-3">
                        <ToggleSwitch />
                        <button type="button" className="text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu} >
                            <HiBars3CenterLeft className="h-6 w-6 fill-current rotate-180 text-white" />
                        </button>
                    </div>
                </nav>

                {/* Offcanvas Menu --------------------------------------------------- */}
                <div className={`dark:border-2 dark:border-white lg:hidden fixed inset-0 z-10 transition-all duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} >
                    <div className="dark:bg-black bg-opacity-50 inset-0 fixed transition-opacity duration-300" onClick={toggleMenu} ></div>
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
                            <Link to="/AI-Tools" className="block text-gray-700 hover:text-white"> AI Tools </Link>
                            <Link to="/AI-News" className="block text-gray-700 hover:text-white"> AI News </Link>
                            <Link to="/Blog" className="block text-gray-700 hover:text-white"> Blog </Link>
                            <Link to="/Contact" className="block text-gray-700 hover:text-white"> Contact Us </Link>
                            <Link to="/Favourites" className="block text-gray-700 hover:text-white"> Favourites </Link>
                            <Link to="/About" className="block text-gray-700 hover:text-white "> About Us </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    );
};
export default Header;
