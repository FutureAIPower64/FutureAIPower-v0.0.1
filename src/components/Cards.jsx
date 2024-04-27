import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import Sliderbar from './Sliderbar';
import { useSelector } from 'react-redux';


function Cards() {
    let cards = useSelector(state => state.counter.cards);
    let mode = useSelector(state => state.counter.mode);
    console.log("card =============",mode);
    return (
        <div className='flex py-10'>
            <div className='w-2/12'>
                <Sliderbar></Sliderbar>
            </div>
            <div className='w-10/12'>
                <OwlCarousel className='owl-theme AI_Tools' id={mode} nav margin={12} dots={false} responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 4 } }}>

                    {
                        cards.map((card) => (
                            <div className='rounded-lg px-4 py-3  dark:bg-dark-black dark:text-white w-full bg-slate-200  border-1 dark:border-white'>
                                <div className='flex justify-between items-center  h-14'>
                                    <div className='flex'>
                                        <div className='w-12 h-12 rounded-md me-3 dark:border-slate-50 border-1 border-dark-black'>
                                            <img src={card.icon} className='rounded-md dark:border-slate-50  border-dark-black h-full w-full'></img>
                                        </div>
                                        <div className='font-semibold'>
                                            <p className='text-md'>{card.title}</p>
                                            <i className='flex text-sm'>
                                                {
                                                    card.star.map((star) => (
                                                        <IoIosStar style={{ paddingRight: '2px' }} color={star} />
                                                    ))
                                                }
                                            </i>
                                        </div>
                                    </div>
                                    <div className='items-end text-2xl'>

                                        <FiBookmark></FiBookmark>

                                    </div>
                                </div>
                                <div className='my-5 text-md h-20'>
                                    {card.description}
                                </div>
                                <div className='mb-6 text-sm h-7'>
                                    {card.tags}
                                </div>
                                <div className='flex justify-between my-4' >
                                    <p className='text-md font-semibold'>{card.buttonText}</p>
                                    <div className='flex items-center px-1 rounded dark:border-slate-50 border-1 border-dark-black'>

                                        <p className='text-md me-2'>Visit</p>
                                        <HiExternalLink ></HiExternalLink>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}


export default Cards;

