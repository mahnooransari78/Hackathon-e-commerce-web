
import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxPerson } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";

const Panal = () => {
    return(
        <section className="w-full bg-[#7E33E0] text-white flex justify-center items-center h-[44px] px-4">
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
        <ul className="flex justify-center items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-josefin-sans font-semibold mt-2 sm:mt-0">
            <li className="flex items-center space-x-1">
                <span>English</span>
                <LiaAngleDownSolid className="w-4 h-4" />
            </li>
            <li className="flex items-center space-x-1">
                <span>USD</span>
                <LiaAngleDownSolid className="w-4 h-4" />
            </li>
            <li className="flex items-center space-x-1">
                <span>Login</span>
                <RxPerson className="w-4 h-4" />
            </li>
            <li>
                <GoHeart className="w-4 h-4" />
            </li>
            <li>
                <BsCart className="w-4 h-4" />
            </li>
        </ul>
    </div>
</section>

    );
}

export default Panal;