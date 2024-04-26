import React from 'react'
import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import ToggleSwitch from './ToggleSwitch';
import DummyData from './DummyData';
function Sliderbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>

            <div class="dark:text-white dark:bg-dark-black text-black p-4 border-e-2 w-2/12 h-[100vh] ps-5">

                <h2 class="font-bold mb-4">Category</h2>
                <ul class="space-y-2">
                    <li className='hover:bg-hover-blue dark:hover:bg-gray-700 px-3 py-1  rounded-lg hover:text-white'><a href="#">Photo Editing</a></li>
                    <li className='hover:bg-hover-blue px-3 py-1  dark:hover:bg-gray-700 rounded-lg hover:text-white'><a href="#">Video Editing</a></li>
                    <li className='hover:bg-hover-blue px-3 py-1  dark:hover:bg-gray-700 rounded-lg hover:text-white'><a href="#">Text To Speech</a></li>
                    <li className='hover:bg-hover-blue px-3 py-1  dark:hover:bg-gray-700 rounded-lg hover:text-white'><a href="#">Logo Generator</a></li>
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
                                <div className='p-1 dark:text-white'>
                                    <GoTriangleDown/>
                                </div>
                            </span>
                        </button>
                        <ul
                            className={`overflow-hidden transition-all bg-white dark:bg-hover-black duration-300 rounded-lg ${isOpen ? 'max-h-48' : 'max-h-0'
                                } ${isOpen ? 'border' : 'border-none'
                                }`}
                        >
                            <li className="py-1 px-3 hover:bg-hover-blue hover:text-white dark:hover:bg-gray-700">
                                <a href="#">
                                    Marketing
                                </a>
                            </li>
                            <li className="py-1 px-3 hover:bg-hover-blue hover:text-white dark:hover:bg-gray-700">
                                <a href="#">
                                    Productivity
                                </a>
                            </li>
                            <li className="py-1 px-3 hover:bg-hover-blue hover:text-white dark:hover:bg-gray-700">
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
        </div>
    )
}

export default Sliderbar
