import React from 'react';
import Image from 'next/image';
const data = [

    {
        image: "/personal-portfolio/common-assets/service-icon3.svg",
        name: 'Python',
        description: 'Python is a high-level, general-purpose programming language that is used for a variety of purposes, including web applications, software development, data science, and machine learning.'
    },
    {
        image: "/personal-portfolio/common-assets/service-icon3.svg",
        name: 'Java',
        description: 'Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today.'
    },
    {
        image: "/personal-portfolio/common-assets/service-icon1.svg",
        name: 'HTML',
        description: 'HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.'
    },
    {
        image: "/personal-portfolio/common-assets/service-icon4.svg",
        name: 'CSS',
        description: 'CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.'
    },
    {
        image: "/personal-portfolio/common-assets/service-icon2.svg",
        name: 'Javascript',
        description: 'JavaScript , often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.'
    },


]
export const Service = () => {
    return (
        <div className='service' id='service'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-black font-semibold text-center text-3xl lg:text-5xl dark:text-white'>Skills</h1>
                    <p className="text-gray600 text-sm font-medium my-10 text-center dark:text-white">
                    I believe in the power of continuous learning and improvement. Whether it's staying updated with the latest trends in the ever-evolving tech industry or honing my existing skills, I'm always eager to push the boundaries of my knowledge and expertise.

                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        {
                            data.map((items) => {
                                return (
                                    <div className=' lg:p-5 p-3 py-8 rounded-lg bg-gray500 dark:bg-slate400'>
                                        <div>
                                            <Image src={items.image} width='100' height='100' className='w-[60px] h-[60px]' alt="image"/>
                                        </div>
                                        <div>
                                       <h3 className='text-black font-bold text-left mt-4 text-lg dark:text-white'>{items.name}</h3>
                                       <p className='text-gray600 text-sm text-left pt-2 dark:text-white'>{items.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
