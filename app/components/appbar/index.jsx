"use client"
import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { ThemeMode } from '../themeMode';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About Me', href: '#about', current: false },
    { name: 'Services', href: '#service', current: false },
    { name: 'Projects', href: '#projects', current: false },
    
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const Appbar = () => {
    return (
       
            <div className='sticky top-0 w-full' style={{ zIndex: '999' }}>
                <Disclosure as="nav" className="bg-white dark:bg-slate500">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-full">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="flex flex-1 items-center justify-start items-center sm:justify-start">
                                        <div className="flex flex-shrink-0 items-center mx-6">
                                            <h3 className='text-black text-[48px] flex items-center'>
                                                <Image
                                                    src="/personal-portfolio/common-assets/ok.png"
                                                    width="50"
                                                    height="50"
                                                    alt="Omica Logo"
                                                />
                                                </h3>
                                        </div>
                                        <div className="w-full flex justify-end items-center sm:block hidden">
                                            <div className="flex items-center justify-end">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'text-primary' : 'text-black dark:text-white hover:text-primary',
                                  
                                                            'rounded-md px-5 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current 
                                                            ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                                <div className='ml-10'>
                                                <a href="https://drive.google.com/file/d/1EYuqysZ7s7TmQNqDLr_VAHNwfEDynMzI/view?usp=drive_link" Download="CV">
                                                    <button className='bg-primary rounded-md px-4 py-2 text-white text-sm hover:mb-1'>
                                                        Download CV
                                                        
                                                    </button></a>
                                                </div>
                                                <div className='ml-3'>
                                                <ThemeMode />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 sm:hidden block flex items-center">
                                        {/* Mobile menu button*/}
                                        <ThemeMode />
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-10 w-10 text-primary" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-10 w-10 text-primary" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden border-b border-primary mt-4">
                                <div className="space-y-1 px-2 pb-1 pt-2">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-primary' : 'text-gray-300 dark:text-white hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
     


    )
}
