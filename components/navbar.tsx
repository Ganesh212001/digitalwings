"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlignJustify, X } from 'lucide-react'
import React, { useState } from 'react'
import DropDownMenu from './drop-down-menu'

interface NavbarPops {
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToShopifyStores: () => void;
    scrollToBrands: () => void;


}

const Navbar : React.FC<NavbarPops> = ({
    scrollToWebsiteDesign,
    scrollToGraphicDesign,
    scrollToShopifyStores,
    scrollToBrands,

}) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggelDopDown = () => {
        setIsDropDownVisible(!isDropDownVisible)
    }
    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

    return (
        <div>
            <div className='p-6 md:p-10 flex items-center justify-between z-50'>
                <div>
                    <Link href="/">
                        <Image priority src="/logo/logo.svg" alt='Logo' width={100} height={100} className='w-10 h-10 md:w-14 md:h-14' />
                    </Link>
                </div>
                <div className='hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
                    <div onClick={scrollToWebsiteDesign} className='hover:text-gray-50 cursor-pointer'>Website Design</div>
                    <div onClick={scrollToGraphicDesign} className='hover:text-gray-50 cursor-pointer'>Graphics Design</div>
                    <div onClick={scrollToShopifyStores} className='hover:text-gray-50 cursor-pointer'>Shopify Store</div>
                    <div onClick={scrollToBrands} className='hover:text-gray-50 cursor-pointer'>Brands</div>
                    <Link href="/pricing" className='hover:text-gray-50'>Pricing</Link>
                </div>
                <div className='flex md:hidden'>
                    {isDropDownVisible ? (
                        // display an X icon when the drop is visible
                        <div onClick={toggelDopDown} className='w-8 h-8 text-slate-300 cursor-pointer'>
                            <X />
                            <DropDownMenu onClose={closeDropDown} />
                        </div>
                    ) : (
                        <AlignJustify onClick={toggelDopDown} className='w-8 h-8 text-slate-300 cursor-pointer' />
                    )}
                </div>
                <div className='hidden md:flex'>
                    <Link href='/contact' className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
      