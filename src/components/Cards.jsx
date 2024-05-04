import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import Sliderbar from './Sliderbar';
import { useSelector } from 'react-redux';
import BlogHead from './BlogHead';
import News from './News';


function Cards() {
    let cards = useSelector(state => state.counter.cards);
    let mode = useSelector(state => state.counter.mode);
    useEffect(()=>{
        if(mode === "dark"){
        var btn1 = document.getElementsByClassName('owl-prev')[0];
        var btn2 = document.getElementsByClassName('owl-next')[0];
        btn1.classList.add("bg-dark-color");
        btn2.classList.add("bg-dark-color");
        }
    },[mode])
    return (
        <div className='flex '>
            <div className='lg:block hidden w-3/12 lg:w-3/12 xl:w-2/12'>
                <Sliderbar></Sliderbar>
            </div>
            <div className='w-full lg:w-10/12 xl:w-10/12 pt-5 px-10 dark:bg-black'>
                <BlogHead head={'Top AI Tools'} desc={'Top tools for you. Updated daily.'}/>
                <OwlCarousel className='owl-theme AI_Tools' id='light' nav margin={12} dots={false} responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 },1299:{items:4} }}>
                    {
                        cards.map((card) => (
                            <div className='rounded-lg px-4 py-3  dark:bg-dark-black dark:text-white w-full bg-slate-200  border-1 dark:border-main-border'>
                                <div className='flex justify-between items-center  h-14'>
                                    <div className='flex'>
                                        <div className='w-12 h-12 rounded-md me-3 dark:border-gray-500 border-1 border-dark-black'>
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
                <News/>
            </div>
        </div>
    )
}

export default Cards;