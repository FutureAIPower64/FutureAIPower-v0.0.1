import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCloseSharp,IoDocumentTextOutline } from "react-icons/io5";
import { PiCircle } from "react-icons/pi";

function Box() {
    const [toggle, setToggle] =useState("hidden")

    const listing=["Documentation","Components","Themes","Example","Blocks","Intoduction","Installation","Theming","DarkMode","CLI","Figma","Typography","Changelog"]
    const icons=[<IoDocumentTextOutline />,<IoDocumentTextOutline />,<IoDocumentTextOutline />,<IoDocumentTextOutline />,<IoDocumentTextOutline />,<PiCircle />,<PiCircle />,<PiCircle />,<PiCircle />,<PiCircle />,<PiCircle />,<PiCircle />,<PiCircle />]
    window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "k") {
             e.preventDefault()
            setToggle("visible")
        }
    })
    const close=()=>{
        if(toggle==="visible"){
            setToggle("hidden")
        }
    }
    
  return (
    <div style={{height:'100vh ',backgroundColor:"rgba(0,0,0,0.7)",visibility:toggle}} className='flex justify-center items-center absolute top-0 left-0 w-full'>
      <div className='box p-2 h-box rounded-md sm-w-full bg-white dark:bg-dark-black dark:text-white md:w-2/5 mx-auto overflow-hidden text-md'>
        <div className='flex justify-between items-center pt-1 pb-2 border-b-2'>
            <i className='text-xl px-2'><CiSearch /></i>
            <input type="text" placeholder='Type a command or search...' className='w-4/5 rounded-md p-1' style={{outline: 'none'}}></input>
            <i className='text-xl px-2 cursor-pointer' onClick={close}><IoCloseSharp /></i>
        </div> 
        <div className='overflow-hidden overflow-y-scroll h-full'>
            <ul className='px-2 pt-2'>
              {
                listing.map((item,index)=>{
                  return <li className='flex items-center py-2  hover:bg-hover-grey hover:dark:text-black  rounded-sm '><i>{icons[index]}</i><span className='ps-1'>{item}</span></li>
                })
              }               
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Box
