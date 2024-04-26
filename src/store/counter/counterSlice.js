

import { createSlice } from '@reduxjs/toolkit';
import { HiExternalLink } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
// import FiBookmark from 'react-icons/fi'
import { IoIosStar } from "react-icons/io";

// // Import your image assets here
// // import icon1 from '/src/assets/c_img1.svg';
import icon1 from '/src/assets/c_img1.svg';
import icon2 from '/src/assets/c_img2.svg';
import icon3 from '/src/assets/c_img3.svg'
import icon4 from '/src/assets/c_img4.svg'
import icon5 from '/src/assets/c_img5.svg'
import icon6 from '/src/assets/c_img6.png'
import icon7 from '/src/assets/c_img7.svg'
import icon8 from '/src/assets/c_img8.svg'
import icon9 from '/src/assets/c_img9.png'
import icon10 from '/src/assets/c_img10.png'
import icon11 from '/src/assets/c_img11.svg'
import icon12 from '/src/assets/c_img12.svg'
import icon13 from '/src/assets/c_img13.svg'
import icon14 from '/src/assets/c_img14.svg'
import icon15 from '/src/assets/c_img15.svg'
import icon16 from '/src/assets/c_img16.svg'
// import { FiBookmark } from 'react-icons/fi';
// Import other icons as needed...

const initialState = {
    cards: [
        {
            icon: icon1,
            // bookmark: "<FiBookmark/>",
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Chatgpt',
            description: 'Revolutionize interaction, creativity, and innovation with the leader in AI.',
            tags: ['#ai', ' #chatbot', ' #education'],
            buttonText: 'Free',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon2,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Tome',
            description: 'Unlock your heart work with AI-powered generative storytelling from Tome.',
            tags: ['#storyteller', ' #presentations'],
            buttonText: 'Free',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon3,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Midjourney',
            description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
            tags: ['#image generator'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon4,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'GSearch',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#social media', ' #research'],
            buttonText: 'Freemium',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon5,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo AI',
            description: 'Unleash AI-powered photo generation and personalized...',
            tags: ['#image generator', ' #avatars'],
            buttonText: 'Freemium',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon6,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Photo Filter',
            description: 'Revolutionize image editing: intuitive AI, precise layering,...',
            tags: ['#design generator', ' #e-commerce', "#image editor"],
            buttonText: 'Freemium',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon7,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'HitPaw Photo AI',
            description: 'Your All-in-One Photo Editing Solution',
            tags: ['#image editing'],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon8,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo to Cartoon',
            description: 'Wanna stand out in social media? Convert face photo to cartoon and...',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon9,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'VideoShorts',
            description: 'Transform YouTube content into engaging, shareable clips....',
            tags: ['#social media', ' #marketing', ' #video editing'],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon10,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Videoleap',
            description: 'Videoleap is a powerful and creative video editing app created by...',
            tags: ['#video enhancer', ' #video editing'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon11,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Video Tap',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon12,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Studios',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#education', ' #video editing'],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Video Editor'
        },
        {
            icon: icon13,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Varolio',
            description: 'Unify sales communications, automate tasks, and harness AI...',
            tags: ['#personal assistant', ' #sales'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Marketing'
        },
        {
            icon: icon14,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Jasper',
            description: 'An AI-driven platform for efficient, high-quality content creation and...',
            tags: ['#marketing', ' #storyteller'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon15,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Shuffll',
            description: 'Revolutionize video production with AI: script to screen, fast, affordable,...',
            tags: ['#marketing', "education"],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon16,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'KeywordSearch',
            description: 'Optimize ad targeting and keyword strategy with AI-driven insights for...',
            tags: ['#social media', ' #marketing', '#education'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Marketing',
        },
    ],
    alldata: [
        {
            icon: icon1,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Chatgpt',
            description: 'Revolutionize interaction, creativity, and innovation with the leader in AI.',
            tags: ['#ai', ' #chatbot', ' #education'],
            buttonText: 'Free',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon2,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Tome',
            description: 'Unlock your heart work with AI-powered generative storytelling from Tome.',
            tags: ['#storyteller', ' #presentations'],
            buttonText: 'Free',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon3,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Midjourney',
            description: 'Unlock digital artistic: AI transforms text into stunning visuals, seamlessly via Discord.',
            tags: ['#image generator'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon4,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#727272", "#727272", "#727272"],
            title: 'GSearch',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#social media', ' #research'],
            buttonText: 'Freemium',
            // visit: <HiExternalLink />,
            cate: 'Logo Generator',
        },
        {
            icon: icon5,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo AI',
            description: 'Unleash AI-powered photo generation and personalized...',
            tags: ['#image generator', ' #avatars'],
            buttonText: 'Freemium',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon6,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Photo Filter',
            description: 'Revolutionize image editing: intuitive AI, precise layering,...',
            tags: ['#design generator', ' #e-commerce', "#image editor"],
            buttonText: 'Freemium',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon7,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'HitPaw Photo AI',
            description: 'Your All-in-One Photo Editing Solution',
            tags: ['#image editing'],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon8,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Photo to Cartoon',
            description: 'Wanna stand out in social media? Convert face photo to cartoon and...',
            tags: ['#image editing'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Photo Editor',
        },
        {
            icon: icon9,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'VideoShorts',
            description: 'Transform YouTube content into engaging, shareable clips....',
            tags: ['#social media', ' #marketing', ' #video editing'],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon10,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Videoleap',
            description: 'Videoleap is a powerful and creative video editing app created by...',
            tags: ['#video enhancer', ' #video editing'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon11,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'Video Tap',
            description: 'Video Tap is an AI-powered tool that helps individuals and businesses...',
            tags: ['#video generator', "#video editing"],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Video Editor',
        },
        {
            icon: icon12,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'AI Studios',
            description: 'Unlock the power of Beddit for deep market research and audience analysis with...',
            tags: ['#education', ' #video editing'],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Video Editor'
        },
        {
            icon: icon13,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#FF9635"],
            title: 'Varolio',
            description: 'Unify sales communications, automate tasks, and harness AI...',
            tags: ['#personal assistant', ' #sales'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Marketing'
        },
        {
            icon: icon14,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#727272", "#727272"],
            title: 'Jasper',
            description: 'An AI-driven platform for efficient, high-quality content creation and...',
            tags: ['#marketing', ' #storyteller'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon15,
            // bookmark: <FiBookmark />,
            star: ["#FF9635", "#FF9635", "#FF9635", "#FF9635", "#727272"],
            title: 'Shuffll',
            description: 'Revolutionize video production with AI: script to screen, fast, affordable,...',
            tags: ['#marketing', "education"],
            buttonText: 'Paid',
            // visit: <HiExternalLink />,
            cate: 'Marketing',

        },
        {
            icon: icon16,
            // bookmark: <FiBookmark />,
            star: ["#727272", "#727272", "#727272", "#727272", "#727272"],
            title: 'KeywordSearch',
            description: 'Optimize ad targeting and keyword strategy with AI-driven insights for...',
            tags: ['#social media', ' #marketing', '#education'],
            buttonText: 'Free Trial',
            // visit: <HiExternalLink />,
            cate: 'Marketing',
        },
    ],
    // carddata:[],
    // singlecate:''
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
        categorydata: (state, action) => {
            // var singlecate=action.payload;
            // console.log(singlecate);
            // if(action.payload==="PhotoEditing"){
            //     var cat="Photo Editing"
            // }
            // let cat=action.payload;
            var carddata = state.alldata.filter((ele) => {
                return ele.cate === action.payload
            })
            state.cards = carddata;
            console.log(state.cards);
        },
    },
});

export const { changeMode, categorydata } = counterSlice.actions;

export default counterSlice.reducer;
