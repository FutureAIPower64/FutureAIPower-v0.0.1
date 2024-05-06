import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from "react-icons/hi2";
import Sliderbar from './Sliderbar';
import logo from "../assets/header-Logo.png";

function TopCardmenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='mx-10'>
      <div className={`fixed lg:hidden snap-y inset-0 z-50 bg-dark-black transition-all duration-300 ${isMenuOpen ? "-translate-x-full" : "translate-x-0"}`}>
        <div className='flex justify-between items-center mt-5 p-2 '>
          <img src={logo} className=" w-16" />
          <button type="button" className="text-black dark:text-white text-xl hover:text-white focus:outline-none" onClick={toggleMenu} >
            <RxCross2 />
          </button>
        </div>
        <div className="">
          <Sliderbar></Sliderbar>
        </div>
      </div>
      <div className="hidden xl:block text-sm mt-10 text-white">
        <div className="container mx-auto px-0 py-4">
          <div className="flex justify-between items-center dark:text-white">
            <ul className="flex bg-slate-200 px-3 py-2 rounded-lg font-semibold dark:bg-gray-700">
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Photo Editing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Video Editing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Text To Speech
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Logo Generator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Productivity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black dark:text-white hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-black transition duration-200"
                >
                  Finance
                </a>
              </li>
            </ul>
            <ul>
              <li className="bg-slate-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded dark:bg-white text-black font-semibold transition duration-200 dark:hover:bg-blue-600 dark:hover:text-white">
                <a href="#">More +</a>

              </li>

            </ul>
          </div>
        </div>
      </div>
      <button type="button" className="mt-10 block lg:hidden bg-slate-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded dark:bg-white text-black font-semibold transition duration-200 dark:hover:bg-blue-600 dark:hover:text-white" onClick={toggleMenu} >
        More +
      </button>
    </div>
  );
}

export default TopCardmenu;