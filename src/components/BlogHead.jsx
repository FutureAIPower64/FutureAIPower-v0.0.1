import React from 'react'

function BlogHead({ head, desc }) {
    return (
        <div className='dark:text-white pb-2 mb-5' style={{borderBottom: '2px solid #121b2b'}}>
            <h1 className='text-3xl font-semibold pb-1'>{head}</h1>
            <h5 className='text-dark-text text-sm text-gray-300 pb-2'>{desc}</h5>
        </div>
    )
}

export default BlogHead