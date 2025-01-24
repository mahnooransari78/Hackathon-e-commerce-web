'use client';
import Image from 'next/image';
import React from 'react';
import bus from '@/app/Image/bus.png';
import   cashback   from '@/app/Image/cashback 1 (1).png'
import  hours  from '@/app/Image/hours.png'
import premium from '@/app/Image/premium-quality 1.png';
            // animation
import { Fade } from 'react-awesome-reveal'

const Offer = () => {
    
    return (
        <section className="px-4 sm:px-8 md:px-16 lg:px-20">
             <Fade direction='up' delay={200} cascade damping={1e-1} triggerOnce={true}>
             <p className='w-full text-center mt-20 text-3xl sm:text-4xl leading-[49.22px] font-josefin-sans text-[#151875]'>
              {" What Shopex Offer!"}
             </p>
             </Fade>
     
    

    <div 
    className='flex flex-col sm:flex-row justify-center items-center mt-10 gap-6 sm:gap-10 mx-auto'>
        
        <div className='w-full sm:w-[270px] h-[320px] shadow-lg rounded-lg'>
            <Image 
                src={bus}
                alt='bus'
                width={65}
                height={65}
                loading='lazy'
                className='m-10 ml-28'
            />
            <div className='w-full text-center'>
                <p className='text-[#151875] text-xl leading-[30px] font-semibold'>
                    24/7 Support
                </p>
                <p className='text-[#1A0B5B4D] font-bold leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
            </div>
        </div>

        <div className='w-full sm:w-[270px] h-[320px] shadow-lg rounded-lg'>
            <Image 
                src={cashback}
                alt='cashback'
                width={65}
                height={65}
                loading='lazy'
                className='m-10 ml-28'
            />
            <div className='w-full text-center'>
                <p className='text-[#151875] text-xl leading-[25.78px] font-semibold'>
                    24/7 Support
                </p>
                <p className='text-[#1A0B5B4D] font-bold leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
            </div>
        </div>

        <div className='w-full sm:w-[270px] h-[320px] shadow-lg rounded-lg'>
            <Image 
                src={hours}
                alt='hours'
                width={65}
                height={65}
                loading='lazy'
                className='m-10 ml-28'
            />
            <div className='w-full text-center'>
                <p className='text-[#151875] text-xl leading-[25.78px] font-semibold'>
                    24/7 Support
                </p>
                <p className='text-[#1A0B5B4D] font-bold leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
            </div>
        </div>

        <div className='w-full sm:w-[270px] h-[320px] shadow-lg rounded-lg'>
            <Image 
                src={premium}
                alt='premium'
                width={65}
                height={65}
                loading='lazy'
                className='m-10 ml-28'
            />
            <div className='w-full text-center'>
                <p className='text-[#151875] text-xl leading-[25.78px] font-semibold'>
                    24/7 Support
                </p>
                <p className='text-[#1A0B5B4D] font-bold leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
            </div>
        </div>

    </div>
</section>

    );
}

export default Offer;