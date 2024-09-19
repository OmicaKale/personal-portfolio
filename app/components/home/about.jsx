import React from 'react'
import Image from 'next/image';
export const About = () => {
    return (
        <div className="py-10 lg:py-20" id='about'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-left order-2 lg:order-1">
                    <div className=" relative">
                        <Image
                            src="/personal-portfolio/common-assets/photo.jpeg"
                            width="400"
                            height="0"
                            alt="Omica about"
                        />
                        
                    </div>
                </div>
                <div className=' order-1 lg:order-2'>
                    <div className='px-3'>
                        <h1 className="text-black dark:text-white text-3xl lg:text-5xl text-left font-semibold">About Me</h1>
                        <div className="text-gray600 text-sm dark:text-white font-medium my-5">
                            <p >
                                Hello, I'm <strong>Omica Kale!</strong>  <br /><br/>
                                I am a recent Computer Engineering graduate with a passion for technology and innovation. My academic journey has equipped me with a solid foundation in software engineering, and I am eager to apply these skills in real-world environments. During my studies, I gained hands-on experience in programming languages such as C, Python, and Java, as well as database like MySQL & Coursework in Object Oriented Programming, Database Management System.<br/> <br/>

                                As a fresher, I am excited to explore opportunities in areas such as software development, AI or ML. My academic projects, including "Facebreach Alert" using Python and ML Technology and "Smart Society" using Java , have strengthened my problem-solving abilities and technical understanding. I am a quick learner and thrive in collaborative environments, always ready to take on new challenges and learn emerging technologies.
                                <br/><br/>
                                I am looking forward to contributing my skills, learning from industry professionals, and growing in a dynamic and innovative tech environment.
                            </p>
                            
                        </div>
                        <div className='py-5'>
                            <div className='mb-5'>
                                <h3 className='text-black text-xl font-medium mb-2 dark:text-white'>Python</h3>
                                <div className="w-full bg-gray700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full w-[95%]"></div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <h3 className='text-black text-xl font-medium mb-2 dark:text-white'>Java</h3>
                                <div className="w-full bg-gray700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full w-[50%]"></div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <h3 className='text-black text-xl font-medium mb-2 dark:text-white'>HTML</h3>
                                <div className="w-full bg-gray700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full w-[40%]"></div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <h3 className='text-black text-xl font-medium mb-2 dark:text-white'>CSS</h3>
                                <div className="w-full bg-gray700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full w-[40%]"></div>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <h3 className='text-black text-xl font-medium mb-2 dark:text-white'>Javascript</h3>
                                <div className="w-full bg-gray700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full w-[40%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
