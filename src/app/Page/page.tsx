'use client';
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaList } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import featured1 from "@/app/Image/featured1.png";
import musterd from "@/app/Image/musterd.png";
import whitechair from "@/app/Image/whitechair.png";
import whitwood from "@/app/Image/whitwood.png";
import black1 from "@/app/Image/black1.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";




const Page = () => {
  const products = [
    {
      id:11,
      image: musterd,
      name: "Stylish Mustard Chair",
      price: "$30.00",
      oldPrice: "$60.00",
    },
    {
      id:12,
      image: whitechair,
      name: "Classic White Chair",
      price: "$40.00",
      oldPrice: "$70.00",
    },
    {
      id:13,
      image: black1,
      name: "Premium Black Bag",
      price: "$55.00",
      oldPrice: "$90.00",
    },
    {
      id:14,
      image: featured1,
      name: "Elegant Pink Sofa",
      price: "$80.00",
      oldPrice: "$120.00",
    },
    {
      id:15,
      image: whitwood,
      name: "Wooden Dining Chair",
      price: "$45.00",
      oldPrice: "$75.00",
    },
    {
      id:16,
      image: musterd,
      name: "Stylish Mustard Chair",
      price: "$30.00",
      oldPrice: "$60.00",
    },
    {
      id:17,
      image: whitechair,
      name: "Classic White Chair",
      price: "$40.00",
      oldPrice: "$70.00",
    },
    {
      id:18,
      image: black1,
      name: "Premium Black Bag",
      price: "$55.00",
      oldPrice: "$90.00",
    },
    {
      id:19,
      image: featured1,
      name: "Elegant Pink Sofa",
      price: "$80.00",
      oldPrice: "$120.00",
    },
    {
      id:20,
      image: musterd,
      name: "Stylish Mustard Chair",
      price: "$30.00",
      oldPrice: "$60.00",
    },
    {
      id:21,
      image: whitechair,
      name: "Classic White Chair",
      price: "$40.00",
      oldPrice: "$70.00",
    },
    {
      id:22,
      image: black1,
      name: "Premium Black Bag",
      price: "$55.00",
      oldPrice: "$90.00",
    },
    
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
});
const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);


  return (
    <section>
      {/* Header Section */}
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Shop Grid Default
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Home / Pages /{" "}
            <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </header>

      {/* Options Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Heading Section */}
        <div className="text-center md:text-left">
          <h2 className="text-[#151875] text-2xl md:text-3xl font-semibold">
            Ecommerce Accessories & Fashion Items
          </h2>
          <p className="text-sm leading-5 text-[#8A8FB9] mt-1">
            Wide range of items for your fashion needs
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-[#3F509E] font-medium">Per Page:</p>
            <input
              type="text"
              placeholder="12"
              className="border border-gray-300 px-2 py-1 w-[60px] text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[#3F509E] font-medium">Sort By:</p>
            <input
              type="text"
              placeholder="Best Match"
              className="border border-gray-300 px-2 py-1 w-[100px] text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[#3F509E] font-medium">View:</p>
            <HiMiniSquares2X2 className="w-5 h-5  cursor-pointer" />
            <FaList className="w-5 h-5 cursor-pointer" />
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 w-[100px] text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <motion.div 
      ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
      className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="hover:shadow-lg"
            >
              <Link href={`${product.id}`}>
              {/* Image Section */}
              <div className="relative bg-[#EEEFFB] w-full h-[250px] sm:h-[280px] overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="intrinsic"
                  width={200}
                  height={200}
                  className="object-contain"
                />
                
              </div>

              {/* Product Info */}
              <div className="text-center p-4 space-y-2">
                <h2 className="text-sm lg:text-base font-semibold text-[#151875] truncate">
                  {product.name}
                </h2>

                {/* Pricing */}
                <div className="flex justify-center items-center space-x-3">
                  <p className="text-[#151875] text-base font-semibold">
                    {product.price}
                  </p>
                  <p className="text-[#FB2448] text-sm line-through">
                    {product.oldPrice}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
      <h1 className="font-extrabold text-center text-8xl">{"PENDING work"}</h1>
    </section>
  );
};

export default Page;
