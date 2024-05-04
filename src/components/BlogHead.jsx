import React from 'react'

function BlogHead({ head, desc }) {
    return (
        <div className='dark:text-white pb-2 mb-5' style={{borderBottom: '2px solid #27272a'}}>
            <h1 className='text-2xl font-bold'>{head}</h1>
            <h5 className='text-dark-text'>{desc}</h5>
        </div>
    )
}

export default BlogHead