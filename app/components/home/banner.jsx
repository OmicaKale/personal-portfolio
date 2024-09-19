import React from 'react'
import Image from 'next/image';

export const Banner = () => {
    return (
        <div>
            <div className="py-3 lg:py-10 lg:py-20">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <div>
                            <h2 className="text-black dark:text-white text-lg font-semibold mt-4 lg:mt-9">Hi I am</h2>
                            <h1 className="text-primary text-4xl lg:text-4xl font-semibold pt-2 ">Omica Kale </h1>
                        </div>
                        <div>
                            <div className='flex justify-start lg:block'>
                                <h1 className="text-black dark:text-white text-3xl lg:text-6xl font-semibold pt-2 whitespace-nowrap">Front-End</h1>
                                <h1 className="text-black dark:text-white text-3xl lg:text-6xl font-semibold pt-2 ml-4 lg:ml-60 whitespace-nowrap">Developer</h1>
                            </div>
                            <p className="text-gray600 dark:text-white text-sm font-medium mt-7 w-[150%]">I'm a passionate and driven individual who recently graduated with a Bachelor's degree in Computer Engineering from Smt. Kashibai Navale College Of Engineering, Pune. My journey into the world of technology began with a keen interest in python & java development, and since then, I've been on an exhilarating path of growth and learning.
                                
                            </p>
                            <button className='bg-primary rounded-md px-6 py-2 text-white text-sm mt-3'>
                                Hire me
                            </button>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                            
                            
                            
    )
}
