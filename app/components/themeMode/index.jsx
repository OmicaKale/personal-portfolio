import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export const ThemeMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            const html = document.getElementsByTagName("html")[0];
            html.classList.add("dark")
            html.classList.remove("light");

        } else {
            const html = document.getElementsByTagName("html")[0];
            html.classList.add("light");
            html.classList.remove("dark");
        }
    }
    return (
        <div>
            {
                isDarkMode ?
                    <SunIcon className='w-8 h-8 cursor-pointer' onClick={handleTheme} />
                    :
                    <MoonIcon className='w-8 h-8 cursor-pointer dark:text-white' onClick={handleTheme} />
            }
        </div>
    )
}
