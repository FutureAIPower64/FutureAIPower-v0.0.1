import React from 'react'

function BlogHead({ head, desc }) {
    return (
        <div className='dark:text-white  text-black pb-2 mb-5 border-b-1 boder-card-border dark:border-card-border'>
            <h1 className='text-3xl font-semibold pb-1'>{head}</h1>
            <h5 className='text-sm text-gray-400 pb-2'>{desc}</h5>
        </div>
    )
}

export default BlogHead