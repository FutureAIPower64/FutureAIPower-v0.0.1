import React from 'react'
import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import ToggleSwitch from './ToggleSwitch';
import DummyData from './DummyData';
import { useDispatch, useSelector } from 'react-redux';
import { BiCategory } from 'react-icons/bi';
import { categorydata } from '../store/counter/counterSlice';
function Sliderbar() {
    // const allData = useSelector(state => state.counter.alldata);
    const [isOpen, setIsOpen] = useState(false);
    let dispatch = useDispatch();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    const getcatdata = (e) => {
        dispatch(categorydata(e))
    }
    return (
        <>
            <div class="dark:text-white dark:bg-dark-black text-black p-4  border h-[100vh] ps-5">
                <h2 class="font-bold mb-4">Category</h2>
                <ul class="space-y-2">

                    <li onClick={() => getcatdata("Photo Editor")} Z className='hover:bg-hover-blue dark:hover:bg-gray-700 px-3 py-1  rounded-lg hover:text-white'><a href="#" >Photo Editing</a></li>
                    <li onClick={() => getcatdata("Video Editor")} className='hover:bg-hover-blue px-3 py-1  dark:hover:bg-gray-700 rounded-lg hover:text-white'><a href="#">Video Editing</a></li>
                    <li onClick={() => getcatdata("Text to Speech")} className='hover:bg-hover-blue px-3 py-1  dark:hover:bg-gray-700 rounded-lg hover:text-white'><a href="#">Text To Speech</a></li>
                    <li onClick={() => getcatdata("Logo Generator")} className='hover:bg-hover-blue px-3 py-1  dark:hover:bg-gray-700 rounded-lg hover:text-white'><a href="#">Logo Generator</a></li>
                    <li>
                        <button
                            className=" flex items-center justify-between w-full hover:bg-hover-blue dark:hover:bg-gray-700 px-3 py-1 mb-1 hover:text-white  rounded-lg"
                            onClick={toggleAccordion}
                        >
                            More
                            <span
                                className={`transform transition duration-300 inline-block ml-2 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            >
                                <div className='bg-gray-200 rounded-full p-1 dark:text-white dark:bg-transparent'>
                                    <GoTriangleDown className='' />
                                </div>
                            </span>
                        </button>
                        <ul
                            className={`overflow-hidden transition-all bg-white dark:bg-hover-black duration-300 rounded-lg ${isOpen ? 'max-h-48' : 'max-h-0'
                                } ${isOpen ? 'border' : 'border-none'
                                }`}
                        >
                            <li onClick={() => getcatdata("Marketing")} className="py-1 px-3 hover:bg-hover-blue hover:text-white dark:hover:bg-gray-700">
                                <a href="#">
                                    Marketing
                                </a>
                            </li>
                            <li onClick={() => getcatdata("Productivity")}  className="py-1 px-3 hover:bg-hover-blue hover:text-white dark:hover:bg-gray-700">
                                <a href="#">
                                    Productivity
                                </a>
                            </li>
                            <li  onClick={() => getcatdata("SEO")}  className="py-1 px-3 hover:bg-hover-blue hover:text-white dark:hover:bg-gray-700">
                                <a href="#">
                                    SEO and Finance
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 class="font-bold mt-8 mb-4">Collection</h2>
                <ul class="space-y-2">
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Best Tools</a></li>
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">New Tools</a></li>
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Most Popular Tools</a></li>
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Featured Tools</a></li>
                </ul>

                <h2 class="font-bold mt-8 mb-4">AI News</h2>
                <ul class="space-y-2">
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Latest News</a></li>
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Top News</a></li>
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Most Popular News</a></li>
                    <li className="py-1 px-3 hover:bg-hover-blue rounded-lg dark:hover:bg-gray-700 hover:text-white"><a href="#">Featured News</a></li>
                </ul>
            </div>
            <div className='w-3/12'>
                {/* <ToggleSwitchitch mode={mode} setMode={setMode} />
                <DummyDataata /> */}
            </div>
        </>


    )
}

export default Sliderbar
