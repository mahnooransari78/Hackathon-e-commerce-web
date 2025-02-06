'use client';
import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxPerson } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'


const Panal = () => {
    const [isCurrency, setIsCurrency] = useState(false);
    const [isLanguage, setIsLanguage] = useState(false);
    const togglesetIsCurrencyDropdown = () =>{
        setIsCurrency(!isCurrency);
    }
    const toggleLanguageDropdown = () =>{
        setIsLanguage(!isLanguage);
    }
    return(
        <section className="w-full bg-[#7E33E0] text-white flex justify-center items-center h-[44px] ">
    <div className="flex flex-wrap justify-around items-center w-full max-w-[1920px]">
        {/* Section 1: Email and Phone */}
        <div className="flex flex-wrap items-center space-x-6">
            <span className="text-xs sm:text-sm font-josefin-sans font-semibold text-center">
                mhhasanul@gmail.com
            </span>
            <div className="flex items-center space-x-2 text-center">
                <FiPhoneCall className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-josefin-sans font-semibold">
                    (12345)67890
                </span>
            </div>
        </div>

        {/* Section 2: Language, Currency, and Icons */}
        <ul className="flex justify-center items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-josefin-sans font-semibold mt-2 sm:mt-0 ">
            <li className="flex items-center space-x-1">
                <span className="relative inline-block text-left">
                <button
        onClick={togglesetIsCurrencyDropdown}
        className="px-4 py-2 flex items-center text-white rounded-md focus:outline-none"
      >
              English <LiaAngleDownSolid className="w-4 h-4 ml-1" />
               
      </button>
      {isCurrency && (
        <div className="absolute mt-2 w-40 text-black bg-white border rounded shadow-lg z-10">
          <ul className="py-1">
            <li className="px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100 cursor-pointer">English</li>
            <li className="px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100 cursor-pointer">Urdu</li>
            <li className="px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100 cursor-pointer">Spanish</li>
          </ul>
        </div>
      )}
      </span>
            </li>
            <li className="flex items-center space-x-1">
            <span className="relative inline-block text-left">
                <button
        onClick={toggleLanguageDropdown}
        className=" flex items-center text-white rounded-md focus:outline-none"
      >
              USD <LiaAngleDownSolid className="w-4 h-4" />
               
      </button>
      {isLanguage && (
        <div className="absolute mt-2 w-40 text-black bg-white border rounded shadow-lg z-10">
          <ul className="py-1">
            <li className="px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100 cursor-pointer">USD</li>
            <li className="px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100 cursor-pointer">Rupes</li>
            <li className="px-4 py-2 hover:text-[#FB2E86] hover:bg-gray-100 cursor-pointer">EUR</li>
          </ul>
        </div>
      )}
      </span>
            </li>
            <li className="flex items-center space-x-1">
                
                <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
                
                <RxPerson className="w-4 h-4" />
            </li>
            <li>
                <GoHeart className="w-4 h-4" />
            </li>
            <li>
                <Link href={"/cart"} >
                <BsCart className="w-4 h-4" />
                </Link>
            </li>
        </ul>
    </div>
</section>

    );
}

export default Panal;