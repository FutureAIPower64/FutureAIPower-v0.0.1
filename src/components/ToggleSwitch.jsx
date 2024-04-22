import React, { useState } from 'react'

function ToggleSwitch({ mode, setMode }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className='container flex my-5'>
            <div className="relative">
                <button onClick={toggleDropdown} className="inline-flex items-center justify-center w-full px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 rounded-md duration-300 " > click
                </button>
                    <div className= {`absolute right-0 z-10 mt-2  w-[100px] bg-white dark:bg-gray-800 shadow-lg rounded-md transition-all origin-top-right duration-200 ${isOpen ? "scale-100": "scale-0"} `}>
                        <ul className="py-1 text-center">
                
                            {["dark","light"].map((ele,ind)=>{
                                return (
                                    <li key={ind}>
                                        <button onClick={() => { setMode(ele=="dark"? true : false) }} className=" outline-none w-full hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-slate-900 py-1 duration-500 dark:text-white">{ele}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
            </div>

        </div>
    )
}

export default ToggleSwitch