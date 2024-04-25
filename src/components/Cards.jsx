import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import { HiExternalLink } from "react-icons/hi";
// import { FiBookmark } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";


// import icon1 from '../assets/c_img1.svg'
// import icon2 from '../assets/c_img2.svg'
// import icon3 from '../assets/c_img3.svg'
// import icon4 from '../assets/c_img4.svg'
// import icon5 from '../assets/c_img5.svg'
// import icon6 from '../assets/c_img6.png'
// import icon7 from '../assets/c_img7.svg'
// import icon8 from '../assets/c_img8.svg'
// import icon9 from '../assets/c_img9.png'
// import icon10 from '../assets/c_img10.png'
// import icon11 from '../assets/c_img11.svg'
// import icon12 from '../assets/c_img12.svg'
// import icon13 from '../assets/c_img13.svg'
// import icon14 from '../assets/c_img14.svg'
// import icon15 from '../assets/c_img15.svg'
// import icon16 from '../assets/c_img16.svg'
import Sliderbar from './Sliderbar';
// import { useSelector } from 'react-redux';


function Cards() {
// var cards=useSelector((state)=>state.counter.cards)

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
        {
            icon: icon6,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Photo Filter',
            description: 'Revolutionize image editing: intuitive AI, precise layering,...',
            tags: ['#design generator', ' #e-commerce',"#image editor"],
            buttonText: 'Freemium',
            visit: <HiExternalLink />,
            cate: 'Photo Editor',
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
            icon: icon11,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Video Tap',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator',"#video editing"],
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
            icon: icon15,
            bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Shuffll',
            description: 'Revolutionize video production with AI: script to screen, fast, affordable,...',
            tags: ['#marketing',"education"],
            buttonText: 'Paid',
            visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon16,
            bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'KeywordSearch',
            description: 'Optimize ad targeting and keyword strategy with AI-driven insights for...',
            tags: ['#social media', ' #marketing','#education'],
            buttonText: 'Free Trial',
            visit: <HiExternalLink />,
            cate: 'Marketing',
        },
    ];
    return (
        <div className='flex py-10'>
            <div className='w-2/12'>
                <Sliderbar></Sliderbar>
            </div>
            <div className='w-10/12'>
                <div className='flex  justify-between'>
                    <OwlCarousel className='owl-theme' autoplay={true} autoplayTimeout={3000} margin={12} loop dots={false} responsive={{ 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 4 } }}>
                        {
                            cards.map((card) => (
                                <div className=' border-2 rounded-lg px-4 py-3  bg-slate-200 w-full h-72'>
                                    <div className='flex justify-between items-center '>
                                        <div className='flex'>
                                            <div className='w-12 h-12 rounded-md me-3' style={{ border: '1px solid rgba(0,0,0,0.5)' }}>
                                                <img src={card.icon} className='rounded-md'></img>
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
                                            {card.bookmark}
                                        </div>
                                    </div>
                                    <div className='my-5 text-md text-ellipsis h-18'>
                                        {card.description}
                                    </div>
                                    <div className='mb-6 text-sm h-6'>
                                        {card.tags}
                                    </div>
                                    <div className='flex justify-between my-4' >
                                        <p className='text-md font-semibold'>{card.buttonText}</p>
                                        <div className='flex items-center px-1 rounded' style={{ border: '1px solid black' }}>
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
        </div>
    )
}

export default Cards;
