import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FiBookmark } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi";

// import { HiExternalLink } from "react-icons/hi";
// import { FiBookmark } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";

import { useDispatch, useSelector } from 'react-redux';
import Sliderbar from './Sliderbar';

function Cards() {
<<<<<<< HEAD
    var cards = useSelector((state) => state.counter.cards);
    console.log(cards);

=======
    // cards git 
    const cards = [
        {
            icon: icon1,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Chatgpt',
            description: 'Revolutionize interaction, creativity, and innovation with the leader in AI.',
            tags: ['#ai', ' #chatbot', ' #education'],
            buttonText: 'Free',
            visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon28,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Drafthorse AI',
            description: 'Boost online presence with AI-driven, SEO-optimized content',
            tags: ['#marketing', " #SEO"],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'SEO',
        },
        {
            icon: icon3,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Midjourney',
            description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
            tags: ['#image generator'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon4,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'GSearch',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#social media', ' #research'],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon7,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'HitPaw Photo AI',
            description: 'Your All-in-One Photo Editing Solution',
            tags: ['#image editing'],
            buttonText: 'Paid',
            visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },

        {
            icon: icon6,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Photo Filter',
            description: 'Revolutionize image editing: intuitive AI, precise layering,...',
            tags: ['#design generator', " #image editor"],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon22,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#727272", "#727272", "#727272", "#727272"],
            title: 'Speechify',
            description: 'Transform text into lifelike speech, enhancing accessibility and...',
            tags: ['#text to speech'],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Text to Speech',

        },
        {
            icon: icon8,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo to Cartoon',
            description: 'Wanna stand out in social media? Convert face photo to cartoon and...',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon2,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Tome',
            description: 'Unlock your heart work with AI-powered generative storytelling from Tome.',
            tags: ['#storyteller', ' #presentations'],
            buttonText: 'Free',
            visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon9,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'VideoShorts',
            description: 'Transform YouTube content into engaging, shareable clips....',
            tags: ['#social media', ' #marketing', ' #video editing'],
            buttonText: 'Paid',
            visit: <HiExternalLink />,
            cate: 'Video Editor',
        },

        {
            icon: icon11,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Video Tap',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon12,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Studios',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#education', ' #video editing'],
            buttonText: 'Paid',
            visit: <HiExternalLink />,
            cate: 'Video Editor'
        },
        {
            icon: icon16,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'KeywordSearch',
            description: 'Optimize ad targeting and keyword strategy with AI-driven insights for...',
            tags: ['#social media', ' #marketing', '#education'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Marketing',
        },
        {
            icon: icon13,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Varolio',
            description: 'Unify sales communications, automate tasks, and harness AI...',
            tags: ['#personal assistant', ' #sales'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Marketing'
        },
        {
            icon: icon14,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Jasper',
            description: 'An AI-driven platform for efficient, high-quality content creation and...',
            tags: ['#marketing', ' #storyteller'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon10,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Videoleap',
            description: 'Videoleap is a powerful and creative video editing app created by...',
            tags: ['#video enhancer', ' #video editing'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        
        {
            icon: icon25,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Gizzmo',
            description: 'Gizzmo WP plugin creates Amazon affiliate articles in just two clicks...',
            tags: ['#SEO', " #copywriter"],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'SEO',
        },
        {
            icon: icon18,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Bard for Google Pro',
            description: 'Bard for Google Pro - the revolutionary AI-driven Chrome',
            tags: ['#productivity'],
            buttonText: 'Free',
            visit: <HiExternalLink />,
            cate: 'Productivity',

        },
        {
            icon: icon19,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Productivity Pets',
            description: 'Task management and productivity tracking...',
            tags: ['#Productivity'],
            buttonText: 'Free',
            visit: <HiExternalLink />,
            cate: 'Productivity',

        },
        {
            icon: icon15,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Shuffll',
            description: 'Revolutionize video production with AI: script to screen, fast, affordable,...',
            tags: ['#marketing', "education"],
            buttonText: 'Paid',
            visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon20,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Productivity Vibes',
            description: 'Boost productivity with 100s of ChatGPT prompts for home and...',
            tags: ['#prompt generator'],
            buttonText: 'Free',
            visit: <HiExternalLink />,
            cate: 'Productivity',
        },
        {
            icon: icon21,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Unreal Speech',
            description: 'Low cost Text-to-Speech API with human-like AI voices...',
            tags: ['#text to speech', " #research"],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Text to Speech',
        },
        {
            icon: icon17,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'TeamSmartAI',
            description: 'Assemble your AI team and become more productive...',
            tags: ['#productivity'],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Productivity',
        },
    
        {
            icon: icon23,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Suno AI Bark',
            description: 'Transform text into diverse, realistic audio with generative AI technology...',
            tags: ['#Music', " #audio editing", " #text to speech"],
            buttonText: 'Free',
            visit: <HiExternalLink />,
            cate: 'Text to Speech',

        },
        {
            icon: icon26,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'MarketMuse',
            description: 'Revolutionize content strategy with AI-driven research, planning, and...',
            tags: ['#marketing', " #SEO", " #research"],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'SEO',

        },
        {
            icon: icon27,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'SEO Content AI',
            description: 'Maximize your online presence with AI-driven, SEO-optimized content...',
            tags: ['#marketing', " #SEO", " #research"],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'SEO',
        },
        {
            icon: icon24,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Murf',
            description: 'Elevate content with lifelike AI voiceovers in 20+ languages and..',
            tags: ['#marketing', " #education", " #text to speech"],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Text to Speech',
        },
        {
            icon: icon5,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo AI',
            description: 'Unleash AI-powered photo generation and personalized...',
            tags: ['#image generator', ' #avatars'],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },


    ];
>>>>>>> 7b27443c2188505b36fee4b26ae53877de81737b
    return (
        <div className='flex py-10'>
            <div className='w-2/12'>
                <Sliderbar></Sliderbar>
            </div>
<<<<<<< HEAD
            <div className='w-10/12 px-4'>
                <div className='flex  justify-between'>
                    <OwlCarousel className='owl-theme' autoPlay={true} autoplayTimeout={3000} margin={12} loop dots={false} responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 4 } }}>
                        {
                            cards.map((card) => (
                                <div className=' border-2 rounded-lg px-4 py-3  dark:bg-dark-black dark:text-white w-full bg-slate-200 h-72'>
                                    <div className='flex justify-between items-center '>
                                        <div className='flex'>
                                            <div className='w-12 h-12 rounded-md me-3 dark:border-slate-50 border-1 border-dark-black'>
                                                <img src={card.icon} className='rounded-md dark:border-slate-50  border-dark-black h-full w-full'></img>
                                            </div>
                                            <div className='font-semibold'>
                                                <p>{card.title}</p>
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
                                            <FiBookmark />
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
                                            <p className='text-md'>Visit</p>
                                            <i><HiExternalLink /></i>
                                        </div>
=======
            <div className='w-10/12'>
                <OwlCarousel className='owl-theme AI_Tools' id='light'   nav margin={12} dots={false} responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1024: { items: 4 } }}>
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
                                        {card.bookmark}
>>>>>>> 7b27443c2188505b36fee4b26ae53877de81737b
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
                                        <p className='text-md'>Visit</p>
                                        <i>{card.visit}</i>
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
