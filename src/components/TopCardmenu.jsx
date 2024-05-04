import React from 'react'

function TopCardmenu() {
  return (
    <div className='mx-10 '>
      <div className="text-sm mt-10">
        <div className="container mx-auto px-0 py-4">
          <div className="flex justify-between items-center dark:text-white ">
            <ul className="flex bg-slate-200 px-3 py-2 rounded-lg font-semibold dark:bg-gray-700 ">
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Photo Editing</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Video Editing</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Text To Speech</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Logo Generator</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Marketing</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Productivity</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">SEO</a></li>
              <li><a href="#" className="hover:text-white px-5 py-1 rounded hover:bg-gray-700 dark:hover:bg-blue-600   dark:hover:text-black transition duration-200 ">Finance</a></li>
            </ul>
            <ul>
              <li className=" bg-slate-200  hover:bg-gray-700 hover:text-white  px-3 py-2 rounded dark:bg-white text-black font-semibold transition duration-200 dark:hover:bg-blue-600 dark:hover:text-white "><a href="#" >More +</a></li>
            </ul>
          </div>
        </div>
        <button id="theme-toggle" className="fixed bottom-4 right-4 px-4 py-2 bg-gray-700 text-white rounded">Toggle Theme</button>
      </div>

    </div>
  )
}

export default TopCardmenu
