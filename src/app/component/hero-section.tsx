
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image from '@/app/Image/image 32.png';
import pink  from '@/app/Image/pink sofa.png';


const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage:{image}, // Replace with the correct path
    lampImage: {pink}, // Replace with the correct path
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/pink sofa.png", // Replace with another chair image
    lampImage: "/lamp.png", // Replace with another lamp image
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/pink sofa.png", // Replace with another chair image
    lampImage: "/lamp.png", // Replace with another lamp image
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-350px] left-[-40px] z-10">
          <Image
            src={image}
            alt="Lamp"
            width={387} // Fixed size for lamp
            height={387} // Fixed size for lamp
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          {current.title}
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {current.description}
        </p>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center"
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={pink}
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
        
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-pink-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❯
      </button>
    </section>
  );
}

export default HeroSection;






















// import React from 'react';
// import Image from 'next/image';
// import image from '@/app/Image/image 32.png';
// import pink  from '@/app/Image/pink sofa.png';
// import Group from '@/app/Image/Group 130.png'
// import { IoEllipse } from "react-icons/io5";
// import { FaRegSquareFull } from "react-icons/fa6";

// const Hero = () =>{
//     return(
//         <section className=' w-full h-[764px] mt-[100px] bg-[#F2F0FF] flex flex-wrap items-center justify-center px-6 sm:px-8 md:px-12'>
//                  {/* First Image */}
//                  <div className='flex justify-center sm:justify-start w-full sm:w-auto'>
//                    <Image
//                      src={image}
//                      alt=''
//                      width={387}
//                      height={387}
//                      className='mt-[50px] sm:mt-[100px] lg:mt-[150px]'
//                    />
//                  </div>
               
//                  {/* Title Section */}
//                  <div className="w-[644px] h-[248px]">
//                       <div className='w-full sm:w-[50%] lg:w-[40%] max-w-[644px] mt-[20%] sm:mt-[10%] text-center sm:text-left'>
//                             <p className='text-[#FB2E86] font-lato font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px]'>
//                               {"Best Furniture For Your Castle...."}
//                             </p>
//                             <h4 className='text-black font-josefin-sans text-[30px] sm:text-[40px] lg:text-[50px] leading-[50px] sm:leading-[60px] lg:leading-[70px] tracking-[0.015em] mt-4'>
//                               {"New Furniture Collection Trends in 2020"}
//                             </h4>
//                             <p className='text-[#8A8FB9] font-lato font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-[28px] mt-4'>
//                               {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."}
//                             </p>
//                       </div>
               
//                  {/* Button */}
//                  <div className='w-full sm:w-auto sm:mt-[50px] flex justify-center sm:justify-start'>
//                    <button className='w-[163px] h-[50px] bg-[#FB2E86] rounded flex items-center justify-center'>
//                      <p className='font-[Josefin_Sans] text-[17px] text-white'>
//                        Shop Now
//                      </p>
//                    </button>
//                  </div>
//                  </div>
//                  {/* Second Image and Decorative Ellipses */}
//                  <div className='relative w-full flex justify-center sm:justify-end items-center mt-8'>
//                    <IoEllipse className='absolute w-[60%] sm:w-[50%] lg:w-[40%] h-[60%] sm:h-[50%] lg:h-[40%] top-[15%] left-[60%] sm:left-[70%] lg:left-[80%] text-[#ECD2FA59]' />
//                    <IoEllipse className='absolute w-[50%] sm:w-[40%] lg:w-[30%] h-[50%] sm:h-[40%] lg:h-[30%] top-[25%] left-[65%] sm:left-[75%] lg:left-[85%] text-[#ECD2FA59]' />
               
//                    <Image
//                      src={Group}
//                      alt='disc'
//                      width={136.56}
//                      height={138.49}
//                      className='absolute w-[10%] sm:w-[12%] top-[30%] left-[80%] sm:left-[85%]'
//                    />
//                    <Image
//                      src={pink}
//                      alt='sofa'
//                      width={629}
//                      height={629}
//                      className='absolute w-[50%] sm:w-[45%] lg:w-[40%] top-[20%] left-[60%] sm:left-[55%] lg:left-[50%]'
//                    />
//                  </div>
               
//                  {/* Decorative Squares */}
//                  <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 flex justify-center items-center space-x-2'>
//                    <FaRegSquareFull className='w-[10px] h-[9.89px] rotate-[45deg] text-[#FB2E86]' />
//                    <FaRegSquareFull className='w-[10px] h-[9.89px] rotate-[45deg] text-[#FB2E86]' />
//                    <FaRegSquareFull className='w-[10px] h-[9.89px] rotate-[45deg] text-[#FB2E86]' />
//                 </div>
//         </section>

//     );
// }

// export default Hero;