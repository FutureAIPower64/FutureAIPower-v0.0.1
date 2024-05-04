import React, { useEffect } from 'react'
import BlogHead from './BlogHead'
import OwlCarousel from 'react-owl-carousel';

import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpg'
import news4 from '../assets/news4.jpg'
import news5 from '../assets/news5.jpg'
import { useSelector } from 'react-redux';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function News() {
    let mode = useSelector(state => state.counter.mode);

    const newsData = [
        {
            date: 'March 22, 2024',
            desc: "AI Picture Generation & Its Endless Posibilities...",
            img: news1
        },
        {
            date: 'March 18, 2024',
            desc: "Empowering Creativity Through Picture Generation...",
            img: news2
        },
        {
            date: 'March 10, 2024',
            desc: "AI Art Generation At Your Finguretips...",
            img: news3
        },
        {
            date: 'February 24, 2024',
            desc: "The Evolution Of AI In Picture Genration...",
            img: news4
        },
        {
            date: 'February 19, 2024',
            desc: "Discover the Megic Of AI-Genrated Pictures...",
            img: news5
        },
    ]

    useEffect(()=>{
        if(mode === "dark"){
        var btn1 = document.getElementsByClassName('owl-prev')[1];
        var btn2 = document.getElementsByClassName('owl-next')[1];
        btn1.classList.add("bg-dark-color");
        btn2.classList.add("bg-dark-color");
        }
    },[mode])
    return (
        <div className='pt-10 px-10'>
            <BlogHead head={'AI News'} desc={'Read AI Related News. Updated daily.'} />
            <OwlCarousel className='owl-theme AI_Tools' id='light' nav margin={20} dots={false} loop  responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 3 }, 1299: { items: 4 } }} >
                {newsData &&
                    newsData.map((ele, ind) => {
                        return (
                            <div key={ind} className='dark:text-white dark:bg-transparent dark:border-card-border bg-slate-100 text-black p-3 rounded-md' style={{borderWidth:"2px",borderStyle:"solid"}}>
                                <img src={ele.img} className='w-full rounded-md h-[160px] border-1 dark:border-card-border' alt="" style={{borderWidth:"2px",borderStyle:"solid"}} />
                                <div className='p-3'>
                                    <p className='text-sm font-semibold text-blue-200 pb-2'>{ele.date}</p>
                                    <p className='h-12 text-md'>{ele.desc}</p>
                                    <button className='flex items-top gap-0 text-sm mt-4'>Read More <MdOutlineArrowRightAlt className='text-2xl'/> </button>
                                </div>
                            </div>
                        )
                    })}
            </OwlCarousel>
        </div>
    )
}

export default News