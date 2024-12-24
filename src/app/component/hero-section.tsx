'use client';
import React from 'react';
import {Fade} from "react-awesome-reveal";

import Image from "next/image";
import Link from "next/link";
// import circle from '@/app/Image/circle.png'
import image from '@/app/Image/image 32.png';
import pink  from '@/app/Image/pink sofa.png';
import Group from '@/app/Image/Group 130.png';







function HeroSection() {
  return (
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column */}
    
        <div className="md:w-1/4  top-[-350px] left-[-40px] z-10 flex justify-center items-start relative">
        <div className="absolute">
        <Fade direction='down' delay={200} cascade damping={1e-1} triggerOnce={true}>
               
                <Image
            src={image}
            alt="Lamp"
            width={387} 
            height={387} 
            className="object-contain"
          /> 
        </Fade>
         
        </div>
       
        
      </div>
      
      
         
      {/* Center Column (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
        <p className="text-sm text-pink-500 font-medium">
          {"Best Furniture For Your Castle..."}
        </p>
        </Fade>
        
        <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          {"New Furniture Collection Trends in 2020"}
        </h1>
        </Fade>
        
        
        <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."}
        </p>
        </Fade>

       
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white lg:w-1/2 md:text-center text-sm font-medium py-3 px- rounded-md mt-6 hover:bg-pink-600 transition-all duration-300"
        >
          { "Shop Now" }
        </Link>
        </Fade>
       
        
      </div>
      

      {/* Right Column Chair Image , discount*/}
      <div className="md:w-1/3 flex justify-center items-center relative">
      <Fade direction='right' delay={200} cascade damping={1e-1} triggerOnce={true}>
      <div className='relative w-full flex justify-center sm:justify-end items-center  mx-auto'>
                   
                   <Image
                     src={Group}
                     alt='disc'
                     width={136.56}
                     height={138.49}
                     className='absolute w-[20%]  top-[15%] left-[80%] sm:left-[85%]'
                   />
                   
                   <Image
                     src={pink}
                     alt='sofa'
                     width={635}
                     height={635}
                     
                   />
                   {/* <div>
                   <Image
                     src={circle}
                     alt='sofa'
                     width={635}
                     height={635}
                     className="relative "
                   />
                   </div> */}
                 </div>
      </Fade>
        
                 
                 
        </div>

      {/*  Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2  flex space-x-2">
        <span className="w-[10px] h-[9.89px] border-2 border-[#FB2E86] hover:bg-[#FB2E86]  rotate-45"></span>
        <span className="w-[10px] h-[9.89px] border-2 border-[#FB2E86] hover:bg-[#FB2E86] rotate-45"></span>
        <span className="w-[10px] h-[9.89px] border-2 border-[#FB2E86] hover:bg-[#FB2E86] rotate-45"></span>

      </div>
      
    </section>
  );
}

export default HeroSection;


