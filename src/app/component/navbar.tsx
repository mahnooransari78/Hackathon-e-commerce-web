'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi'; // Hamburger Icon
import { IoMdClose } from 'react-icons/io'; // Close Icon
import Search from './search-bar'; // Assuming Search is a separate component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
     
    <section className="flex flex-col sm:flex-row justify-around items-center p-4">
      {/* Logo and Navigation Section */}
      <div className="flex flex-col sm:flex-row justify-between sm:justify-start items-center space-y-4 sm:space-x-8 w-full sm:w-auto">
        {/* Logo Section */}
        <h3 className="text-[34px] font-josefin-sans font-bold leading-[34px] text-[#0D0E43]">
          Hekto
        </h3>
        
        {/* Hamburger Icon */}
        <div className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </div>

        {/* Nav Section */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-6 space-y-4 sm:space-y-0 w-full sm:w-auto`}
        >
          <li className="flex flex-row items-center text-[#FB2E86]">
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/Page">Pages</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
            </li>
          <li>
            <Link href="/blog">Blog</Link>
            </li>
          <li>
            <Link href="/shop">Shop</Link>
            </li>
          <li>
            <Link href="/contact" className="text-[16px] font-lato font-normal leading-[20px] text-left">Contact</Link>
            </li>
        </ul>
      </div>

      {/* Search Bar Section */}
      <div className=" lg:block justify-end mt-4 hidden">
        <Search />
      </div>
    </section>
    </header>
  );
}
