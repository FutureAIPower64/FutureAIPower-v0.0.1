import React, { useEffect, useState, useRef } from 'react'
import { PiSunDuotone } from 'react-icons/pi';
import { RxMoon } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../store/counter/counterSlice';

function ToggleSwitch() {
    const mode = useSelector((state) => state.counter.mode);
    const DarkBtn = useSelector((state) => state.counter.DarkBtn);
    const dispatch = useDispatch();
    const setMode = (ele) => {
        localStorage.setItem('mode', ele);
        dispatch(changeMode(ele));
        setTimeout(() => {
            toggleDropdown();
        }, 300)
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mode]);

    return (
        <div className='container flex px-0 duration-300 '>
            <div className="relative" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="inline-flex items-center justify-center w-[40px] py-1 text-xl dark:text-gray-200 bg-transparent text-white dark:bg-dark-black dark:hover:bg-hover-black rounded-md duration-300 " >
                    {mode == 'system' ? DarkBtn == "dark" ? <RxMoon /> : <PiSunDuotone className='text-black' /> : mode == 'dark' ? <RxMoon /> : <PiSunDuotone className='text-black' />}
                </button>
                <div className={`absolute right-0 z-10 mt-2 w-[100px] bg-white text-black shadow-lg dark:shadow dark:shadow-card-border dark:bg-dark-black rounded-md transition-all origin-top-right duration-300 ${isOpen ? "scale-100" : "scale-0"} `}>
                    <ul className=" text-center p-1">
                        {["dark", "light", "system"].map((ele, ind) => {
                            return (
                                <li key={ind} className='hover:bg-slate-100 dark:hover:bg-hover-black rounded-sm duration-300 dark:text-white'>
                                    <button onClick={() => { setMode(ele) }} className="w-full outline-none text-start px-1 py-1 capitalize">{ele}</button>
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