'use client';
import React from 'react'
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

export const Testimonial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots:true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <ChevronLeftIcon />,
    prevArrow: <ChevronRightIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='py-10 lg:py-20' id='testimonial'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-black dark:text-white font-semibold text-center text-3xl lg:text-5xl'>Testimonials</h1>
          <p className="text-gray600 dark:text-white text-sm font-medium my-10 text-center">A front-end developer is a developer or engineer who can build both the front end website.<br />
                        Front-end web development is the development of the graphical user interface of a website.
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className='testimonial-box p-5'>
            <div className='overlay dark:bg-slate400'></div>
            <div className=' lg:flex justify-center'>
              <Image src='/common-assets/logo1.svg'
                width='100'
                height='75'
                alt='image'
               />
              <div className='lg:py-3'>
                <p className='text-xs px-3 mt-3 lg:mt-0'>"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum."</p>
                <h4 className='lg:text-sm pt-2 px-3 font-medium'>John Doe</h4>
                <h5 className='text-xs px-3 '>CEO - Founder</h5>
              </div>
            </div>
          </div>
          <div className='testimonial-box p-5'>
          <div className='overlay'></div>

            <div className=' lg:flex justify-center'>
              <Image src='/common-assets/logo2.svg'
                width='100'
                height='75'
                alt='image'
               />
              <div className='lg:pt-3'>
                <p className='text-xs px-3 mt-3 lg:mt-0'>"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum."</p>
                <h4 className='lg:text-sm pt-2 px-3 font-medium'>Lorem Ipsum</h4>
                <h5 className='text-xs px-3 '>Team Leader</h5>
              </div>
            </div>
          </div>
          <div className='testimonial-box p-5 '>
          <div className='overlay'></div>

            <div className=' lg:flex justify-center'>
              <Image src='/common-assets/logo1.svg'
                width='100'
                height='75'
                alt='image'
               />
              <div className='lg:pt-3'>
                <p className='text-xs px-3 mt-3 lg:mt-0'>"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum."</p>
                <h4 className='lg:text-sm pt-2 px-3 font-medium'>Alain D</h4>
                <h5 className='text-xs px-3 '>Manager</h5>
              </div>
            </div>
          </div>
          <div className='testimonial-box p-5 '>
            <div className='overlay'></div>

            <div className=' lg:flex justify-center'>
              <Image src='/common-assets/logo2.svg'
                width='100'
                height='75'
                alt='image'
               />
              <div className='lg:pt-3'>
                <p className='text-xs px-3 mt-3 lg:mt-0'>"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum."</p>
                <h4 className='lg:text-sm pt-2 px-3 font-medium'>Wiz Khalifa</h4>
                <h5 className='text-xs px-3 '>Associative</h5>
              </div>
            </div>
          </div>
          <div>  
          </div>
        </Slider>
      </div>
    </div>
  )
}
