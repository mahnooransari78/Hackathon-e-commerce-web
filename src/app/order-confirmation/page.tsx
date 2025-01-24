"use client";


import Image from "next/image";
import clock from "@/app/Image/clock .png";
import right from "@/app/Image/right.png";
import checklist from "@/app/Image/checklist .png";
import image from '@/app/Image/image 1174 (3).png'


const OrderConfirmation = () => {
  
  return (
    <section>
      {/* Header */}
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-blue-900">
            {"Order Completed"}
          </h1>
          <p className="text-sm text-gray-500">
            {"Home / Pages / "}
            <span className="text-pink-500">{"Order Completed"}</span>
          </p>
        </div>
      </header>
      <div className="mt-20 lg:mx-36 items-center justify-center">
        <div className="ml-20 ">
          <Image 
          src={clock} 
          height={50} 
          width={50} 
          alt="clock" />
        </div>
        <div className="justify-items-center">
          <div className="bg-gray-200 rounded-full mb-3">
            <Image src={right} height={50} width={50} alt="clock" />
          </div>
          <h3 className="font-bold text-lg mb-3">{"Your order is comleted!"}</h3>
          <p className="lg:w-[620px] h-[90px] text-center text-[#8D92A7] mb-3 leading-9">
            {
              "Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed."
            }
          </p>
        </div>
        <div className="justify-items-end">
          <Image
            src={checklist}
            height={50}
            width={50}
            loading='lazy'
            alt="clock"
            className=""
          />
        </div>

        {/* Footer Logos */}
        <div className=" justify-center  lg:mt-12">
            <Image 
            src={image}
            alt='logo'
            width={900}
            loading='lazy'
            height={1114}
            />
          </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;
