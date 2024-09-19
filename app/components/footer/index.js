import React from 'react'
import Image from 'next/image'
export const Footer = () => {
    return (
        <div className='bg-gray500 dark:bg-slate500'>
            <div className='px-5'>
                <div className="flex lg:justify-center items-center lg:pt-20 pt-10 ">
                    <h3 className='text-black text-[48px] flex items-center'>
                        <Image
                            src="/common-assets/ok.png"
                            width="50"
                            height="50"
                            alt="Omica Logo"
                        />
                        </h3>
                </div>
                <div className='pt-8'>
                    <div className='text-black lg:flex space-x-8 justify-center items-center'>
                        <ul className='lg:flex items-center p-0 dark:text-white'>
                            <li className='lg:px-5 py-3'>Home</li>
                            <li className='lg:px-5 py-3'>About me</li>
                            <li className='lg:px-5 py-3'>Services</li>
                            <li className='lg:px-5 py-3'>Projects</li>
                            <li className='lg:px-5 py-3'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-6 ">
                    <div className='mr-2 p-2 bg-white dark:bg-primary flex items-center justify-center w-10 h-10 rounded-full'>
                        <Image
                            src="/common-assets/facebook.svg"
                            width="35"
                            height="35"
                            alt="Mayuri facebook"
                        />
                    </div>
                    <div className='mr-2 p-2 bg-white dark:bg-primary flex items-center justify-center w-10 h-10 rounded-full'>
                        <Image
                            src="/common-assets/twitter.svg"
                            width="35"
                            height="35"
                            alt="Mayuri twitter"
                        />
                    </div>
                    <div className='mr-2 p-2 bg-white dark:bg-primary flex items-center justify-center w-10 h-10 rounded-full'>
                        <Image
                            src="/common-assets/instagram.svg"
                            width="35"
                            height="35"
                            alt="Mayuri facebook"
                        />
                    </div>
                    <div className='mr-2 p-2 bg-white dark:bg-primary flex items-center justify-center w-10 h-10 rounded-full'>
                        <Image
                            src="/common-assets/linkledin.svg"
                            width="35"
                            height="35"
                            alt="Mayuri facebook"
                        />
                    </div>
                </div>

            </div>

            <div className='bg-black h-[10vh] text-center mt-8 py-5 px-4'>
                <div>
                    <h4 className='text-white text-sm'>© 2024-25 <span className='text-primary text-sm'></span> All Rights Reserved,  Design By <span className='text-primary text-sm'>Omica Kale</span>.</h4>
                </div>
            </div>
        </div>
    )
}
