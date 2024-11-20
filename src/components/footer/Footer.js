import React from "react"

export function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
                <div className='flex justify-center'>
                    <a href='https://github.com/LuisCeballos24/shopEcommerce'
                       target='_blank'
                       rel="noreferrer"
                       className='capitalize border-b mb-3 text-base hover:text-gray-300 transition'
                    >
                        view source code on github
                    </a>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2024 essentialstorepty | All Rights Reserved</p>
                    <a href='https://www.linkedin.com/in/lfceballos/'
                       target="_blank"
                       rel="noreferrer"
                       className='hover:text-gray-300 transition'
                    >
                        Created by Luis Ceballos
                    </a>
                </div>
            </div>
        </footer>
    )
}
