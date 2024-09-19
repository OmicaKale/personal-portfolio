import React from 'react'
export const Design = () => {
    return (
        <div id='contact'>
            <div className='pt-20'>
                <div className='container mx-auto'>
                    <div>
                        <h1 className='text-black dark:text-white font-semibold text-center text-3xl lg:text-5xl'>Lets Works Together</h1>
                        <p className="text-gray600 dark:text-white text-sm font-medium lg:my-10 my-5 text-center">
                        Thank you for visiting my portfolio, and I look forward to connecting with you!
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:justify-center '>
                <h4 className='text-xl dark:text-white'>Call Me - <a href='tel:+918788998444' className='text-primary font-bold'>+91 8788998444</a></h4>
            </div>
            <div className='lg:flex lg:justify-center pt-6 lg:px-48 '>
                <div className='lg:w-[50%] text-right lg:ml-8'>
                    <input type='email' placeholder='Enter Your Email'
                        className='bg-gray500 py-3 px-4 border border-gray900 rounded-lg lg:w-[90%] w-full' />
                </div>
                <div className='ml-5 mt-3 lg:mt-0 flex justify-end lg:block' >
                    <button className='bg-primary rounded-md lg:px-4 px-4 lg:py-3 py-3 text-white text-md '>
                        Contact me
                    </button>
                </div>
            </div>
        </div>
    )
}
