'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

const data = [
    
    {
        image:'/personal-portfolio/common-assets/img-6.png',
        name:"Python & ML",
        title: 'Facebreach Alert',
        category: "python",
    },
    {
        image:'/personal-portfolio/common-assets/img-5.png',
        name:"Python & ML",
        title: 'Facebreach Alert',
        category: "python",
    },
    {
        image:'/personal-portfolio/common-assets/img-4.png',
        name:"Python & ML",
        title: 'Facebreach Alert',
        category: "python",
    },
]

const filters = [
    {
        name: "Python Project",
        value:'python project'
    },
    
   
]


export const Project = () => {
    const [filterData, setFilterData] = useState(data);
    const [selectedCategory, setSelectedCategory] = useState('all');
    console.log("selectedCategory", selectedCategory)

    function handleFilter(value) {
        setSelectedCategory(value)
        if (value === "python project") {
            setFilterData(data);
        } else {
            const result = data.filter((item) => item.category === value);
            console.log('selectedCategory', result, selectedCategory)
            setFilterData(result);
        }
    }
    return (
        <div className='py-10 lg:py-20' id='projects'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-black dark:text-white font-semibold text-center text-3xl lg:text-5xl'>My Projects</h1>
                    <p className="text-gray600 dark:text-white text-sm font-medium my-10 text-center">
                    My approach to projects is deeply rooted in creativity, innovation, and attention to detail. I take pride in crafting seamless and intuitive user experiences while ensuring the highest standards of code quality and performance.

                    </p>
                </div>
                <div className='flex items-center'>
                    {
                        filters.map((item) => {
                            return (
                                <button onClick={() => { handleFilter(item.value) }} className={`lg:mx-3 mx-1 text-sm lg:text-lg rounded-md w-full py-2 ${selectedCategory === item.value ? 'bg-primary text-white' : 'bg-gray500'}`}>{item.name}</button>
                            )
                        })
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {
                        filterData.map((item) => {
                            return (
                                <div className='border rounded-lg border-gray700 text-center p-3 dark:bg-slate400'>
                                    <div className='mt-10'>
                                        <Image src={item.image} width='200' height='250' alt="image" className='mx-auto' />
                                        <h3 className='text-primary text-sm font-medium mt-2 '>{item.name}</h3>
                                        <h2 className='text-black font-semibold dark:text-white'>{item.title}</h2>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

