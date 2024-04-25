import React, { useState } from 'react'
import { PiSunDuotone } from 'react-icons/pi';
import { RxMoon } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../store/counter/counterSlice';

function ToggleSwitch() {
    const mode = useSelector((state)=>state.counter.mode);
    const dispatch = useDispatch();

    const setMode = (ele)=>{
        if(ele === "dark"){
            dispatch(changeMode(true));
        }else{
            dispatch(changeMode(false));
        }
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='container flex px-0 my-5'>
            <div className="relative">
                <button onClick={toggleDropdown} className="inline-flex items-center justify-center w-[40px] py-1 text-xl dark:text-gray-200 bg-transparent text-white  dark:bg-dark-black dark:hover:bg-hover-black rounded-md duration-300 " >
                    {mode === true ?<RxMoon /> : <PiSunDuotone />}
                </button>
                <div className={`absolute right-0 z-10 mt-2  w-[100px] bg-white text-black shadow-xl dark:bg-dark-black  rounded-md transition-all origin-top-right duration-300 ${isOpen ? "scale-100" : "scale-0"} `}>
                    <ul className="py-1 text-center p-1">

                        {["dark", "light"].map((ele, ind) => {
                            return (
                                <li key={ind} className='hover:bg-slate-100 dark:hover:bg-hover-black rounded-sm  my-1 duration-300 dark:text-white'>
                                    <button onClick={() => { setMode(ele) }} className="w-full outline-none py-1">{ele}</button>
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