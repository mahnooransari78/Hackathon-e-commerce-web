"use client";
import Image from "next/image";
import footer from "@/app/Image/footer logo.png";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
//  animation
import { Fade } from "react-awesome-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Tcards from "./tranding-cards";
import Link from "next/link";

const Trending = () => {
  const Products = [
    {
      id: 23,
      title: "Cantilever Chair",
      price: "$42.00",
      image: footer,
    },
    {
      id: 24,
      title: "Cantilever Chair",
      price: "$42.00",
      image: footer,
    },
    {
      id: 25,
      title: "Cantilever Chair",
      price: "$42.00",
      image: footer,
    },
    {
      id: 26,
      title: "Cantilever Chair",
      price: "$42.00",
      image: footer,
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
    <section className="flex flex-col justify-center items-center mt-20 px-4 md:px-12">
      <Fade
        direction="up"
        delay={200}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h2 className="font-josefin-sans text-4xl text-center font-bold text-[#151875] mb-12">
          {"Trending Products"}
        </h2>
      </Fade>

      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {Products.map((Products, index) => (
          <div
            key={index}
            className=" w-[250px] border-gray-200 bg-white overflow-hidden group relative transition-all duration-300 hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="bg-[#F6F7FB] flex justify-center items-center h-56">
              <Image
                src={Products.image}
                alt="Cantilever Chair"
                className="w-32 h-32 object-contain"
                width={130}
                height={150}
              />
            </div>

            {/* Hover Icons */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                <button className="p-2 bg-[#EEEFFB] text-[#151875]  rounded-full hover:bg-[#FB2E86] hover:text-white">
                  <BsCart />
                </button>
                <button className="p-2 bg-[#EEEFFB] text-[#151875] rounded-full hover:bg-[#FB2E86] hover:text-white">
                  <GoHeart />
                </button>
                <button className="p-2 bg-[#EEEFFB] text-[#151875] rounded-full  hover:bg-[#FB2E86] hover:text-white">
                  <LiaSearchPlusSolid />
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-4 text-center">
              <p className="font-lato text-lg font-bold text-[#FB2E86] mb-2">
                {Products.title}
              </p>
              <p className="font-josefin text-sm text-gray-600">
                Code - Y523201
              </p>
              <p className="font-lato text-lg font-bold text-[#151875] mt-1">
                {Products.price}
              </p>
            </div>

            {/* Hover Button */}
            <Link href={`${Products.id}`}>
              <div className="absolute bottom-0 left-0 w-full h-10 bg-[#FB2E86] text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
      <Tcards />
    </section>
  );
};

export default Trending;
