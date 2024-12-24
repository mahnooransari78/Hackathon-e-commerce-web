'use client';
import Image from "next/image";
import featured1 from "@/app/Image/featured1.png";
import chair6 from "@/app/Image/chair6.png";
import musterd from "@/app/Image/musterd.png";
import whitechair from "@/app/Image/whitechair.png";
import whitwood from "@/app/Image/whitwood.png";
import black1 from "@/app/Image/black1.png";
// animation
import { Fade } from 'react-awesome-reveal';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <section className="py-10 px-5">
      {/* Heading */}
           <Fade direction='up' delay={200} cascade damping={1e-1} triggerOnce={true}>
             <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8">
               {"Leatest Products"}
             </h1>

           </Fade>
      

      {/* Navigation Tabs */}
      <Fade direction='up' delay={300} cascade damping={1e-1} triggerOnce={true}>
        <ul className="flex justify-center space-x-4 mb-8 text-sm lg:text-base font-semibold">
          <li className="text-red-500 cursor-pointer">New Arrival</li>
          <li className="cursor-pointer hover:text-red-500 transition">Best Seller</li>
          <li className="cursor-pointer hover:text-red-500 transition">Featured</li>
          <li className="cursor-pointer hover:text-red-500 transition">Special Offer</li>
        </ul>
      </Fade>

      

      {/* Products Grid */}
      <motion.div
      ref={ref}
      style={{
          scale: scaleProgress,
          opacity: opacityProgress,
      }}
      className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Product Card */}
          {[chair6, musterd, whitechair, black1, featured1, whitwood].map((item, index) => (
            <div
              key={index}
              className="hover:shadow-lg mb-10 transition hover:-translate-y-2"
            >
              <div className="relative bg-[#EEEFFB] w-full justify-center items-center h-[250px] overflow-hidden">
                <Image src={item} alt="Product" width={200} height={200} className="ml-20 mt-10" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"Sales"}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex justify-around items-center mt-4 space-y-2 text-center">
                <h2 className="text-sm lg:text-base font-medium text-[#151875] truncate">
                  {"Comfort Handy Craft"}
                </h2>
                <div className="flex justify-center items-center space-x-2">
                  <p className="text-[#151875] text-sm font-semibold">{"$22.00"}</p>
                  <p className="text-[#FB2448] text-xs lg:text-sm line-through">{"$65.00"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
