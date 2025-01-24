"use client";
import React from "react";
import Image from "next/image";
import shop1 from "@/app/Image/shop1.png";
import shop2 from "@/app/Image/shop2.png";
import shop3 from "@/app/Image/shop3.png";
import shop4 from "@/app/Image/shop4.png";
import shop5 from "@/app/Image/shop5.png";
import shop6 from "@/app/Image/shop6.png";
import shop7 from "@/app/Image/shop7.png";
import { FaList } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Shop = () => {
  const items = [
    {
      title: "Accumsan tincidunt",
      image: shop1,
    },
    {
      title: "In nulla",
      image: shop2,
    },
    {
      title: "Vel sem",
      image: shop3,
    },
    {
      title: "Porttitor cum",
      image: shop4,
    },
    {
      title: "Nunc in",
      image: shop5,
    },
    {
      title: "Vitae facilisis",
      image: shop6,
    },
    {
      title: "Curabitur lectus",
      image: shop7,
    },
  ];
  return (
    <>
      <section>
        {/* Header Section */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              Shop
            </h1>
            <p className="text-sm md:text-base text-gray-500">
              {"Home / Pages / "}
              <span className="text-pink-500">Shop</span>
            </p>
          </div>
        </header>

        {/* Options Section */}
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Heading Section */}
          <div className="text-center md:text-left">
            <h2 className="text-[#151875] text-2xl md:text-3xl font-semibold">
              {"Ecommerce Accessories & Fashion Items"}
            </h2>
            <p className="text-sm leading-5 text-[#8A8FB9] mt-1">
              {"About 9,620 results (0.62 seconds)"}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-[#3F509E] font-medium">{"Per Page:"}</p>
              <input
                type="text"
                placeholder="12"
                className="border border-gray-300 px-2 py-1 w-[60px] text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#3F509E] font-medium">{"Sort By:"}</p>
              <input
                type="text"
                placeholder="Best Match"
                className="border border-gray-300 px-2 py-1 w-[100px] text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#3F509E] font-medium">{"View:"}</p>
              <HiMiniSquares2X2 className="w-5 h-5  cursor-pointer" />
              <FaList className="w-5 h-5 cursor-pointer" />
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 w-[100px] text-sm focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:h-[254px] gap-8">
            <Fade
              direction="left"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {items.map((items, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-start bg-white shadow-lg p-4 gap-5 "
                >
                  <Image
                    src={items.image}
                    alt=""
                    width={313}
                    height={217}
                    loading='lazy'
                    className="object-cover h-48"
                  />
                  <div className="mt-4 items-center">
                    {/* title section */}
                    <h3 className="text-lg font-semibold text-[#111C85] mb-2">
                      {items.title}
                    </h3>
                    {/* price section */}
                    <div className="flex justify-items-center gap-4">
                      <p className="text-sm text-[#111C85]">{"$26.00"}</p>
                      <p className="text-sm text-[#FF2AAA]">{"$52.00"}</p>
                      {/* Rating */}
                      <div className="flex mt-2 lg:mt-0">
                        {[...Array(4)].map((_, i) => (
                          <MdOutlineStarPurple500
                            key={i}
                            className="text-[#FFC416]"
                          />
                        ))}
                        <MdOutlineStarPurple500 className="text-[#B2B2B2]" />
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-sm text-[#9295AA] lg:w-[550px] mt-4">
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
                      }
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex mt-4 gap-2">
                    <button className="p-2 bg-[#FFFFFF] shadow-lg rounded-full text-[#535399]">
                      <BsCart />
                    </button>
                    <button className="p-2 bg-[#FFFFFF] shadow-lg rounded-full text-[#535399]">
                      <GoHeart />
                    </button>
                    <button className="p-2 bg-[#FFFFFF] shadow-lg rounded-full text-[#535399]">
                      <LiaSearchPlusSolid />
                    </button>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
