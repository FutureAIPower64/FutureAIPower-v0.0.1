import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { useSelector } from 'react-redux';
import BlogHead from './BlogHead';


function Cards() {
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
                <BlogHead head={'AI Tools'} desc={'Read AI Related Tools. Updated daily.'} ></BlogHead>
                <OwlCarousel className='owl-theme AI_Tools' id='light' nav margin={23} dots={false} responsive={{ 0: { items: 1 }, 500: { items: 2 }, 900: { items: 3 }, 1100: { items: 4 }, 1299: { items: 5 } }}>
                    {
                        cards.map((card) => (
                            <div className='rounded-lg px-4 py-3  dark:bg-card-color dark:text-white w-full bg-slate-200  border dark:border-card-border'>
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
                                <div className='my-5 text-xs h-10 text-gray-500'>
                                    {card.description}
                                </div>
                                <div className='mb-6 text-xs h-7'>
                                    {card.tags}
                                </div>
                                <div className='flex justify-between my-4' >
                                    <p className='text-md font-semibold text-sm'>{card.buttonText}</p>
                                    <div className='flex items-center px-1 rounded dark:bg-blue-600 dark:border-card-color border-1 border-dark-black'>
                                        <p className='text-md me-2 text-sm'>Visit</p>
                                        <HiExternalLink ></HiExternalLink>
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

export default Cards;