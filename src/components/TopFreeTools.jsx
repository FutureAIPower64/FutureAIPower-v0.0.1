import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { useSelector } from 'react-redux';
import BlogHead from './BlogHead';


function TopFreeTools() {
    let cards = useSelector(state => state.counter.cards);
    let mode = useSelector(state => state.counter.mode);
    useEffect(() => {
        if (mode === "dark") {
            var btn1 = document.getElementsByClassName('owl-prev')[0];
            var btn2 = document.getElementsByClassName('owl-next')[0];
            btn1.classList.add("bg-dark-color");
            btn2.classList.add("bg-dark-color");
        }
    }, [mode])
    return (
        <>
            <div className='pt-10 px-10'>
                <BlogHead head={'Top Free AI Tools'} ></BlogHead>
                <OwlCarousel className='owl-theme AI_Tools' id='light' nav={false} margin={23} dots={false} responsive={{ 0: { items: 1 }, 500: { items: 2 }, 900: { items: 3 }, 1100: { items: 4 }, 1299: { items: 5 } }}>
                    {
                        cards.map((card) => (
                            <div className='rounded-md px-4 py-3  hover:dark:bg-dark-grey dark:bg-dark-black dark:text-white w-full bg-white hover:bg-light-gray  border-1  dark:border-card-border '>

                                <div className='flex justify-between items-center  h-14'>
                                    <div className='flex'>
                                        <div className='w-10 h-10 rounded-md me-3 dark:border-slate-50 border-1 border-dark-black'>
                                            <img src={card.icon} className='rounded-md dark:border-slate-50  border-dark-black h-full w-full'></img>
                                        </div>
                                        <div className='font-semibold'>
                                            <p className='text-sm'>{card.title}</p>
                                            <i className='flex text-xs py-1'>
                                                {
                                                    card.star.map((star) => (
                                                        <IoIosStar style={{ paddingRight: '2px' }} color={star} />
                                                    ))
                                                }
                                            </i>
                                        </div>
                                    </div>
                                    <div className='items-end text-xl'>
                                        <FiBookmark></FiBookmark>
                                    </div>
                                </div>
                                <div className='my-4 text-xs h-10 text-dark-text-gray'>
                                    {card.description}
                                </div>
                                <div className='mb-6 text-xs h-7'>
                                    {card.tags}
                                </div>
                                <div className='flex justify-between my-4' >
                                    <p className='text-md font-semibold text-sm'>{card.buttonText}</p>
                                    <div className='flex items-center  rounded-md text-dark-black dark:bg-dark-bg-btn dark:border-card-color border-1 border-gray-300 hover:bg-gray-500 '>
                                        <buttton className=' flex items-center px-1 rounded cursor-pointer dark:text-black dark:font-semibold   border-1  dark:hover:text-white'>
                                            <p className='text-sm me-2 '>Visit</p>
                                            <HiExternalLink ></HiExternalLink>
                                        </buttton>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </>
    )
}

export default TopFreeTools;