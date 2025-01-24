"use client";
import Image from "next/image";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
//  animation
import { Fade } from "react-awesome-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Tcards from "./tranding-cards";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  image?: {
    asset?: {
      url?: string;
    };
  };
}

const Trending = () => {
  
 
  const [products, setProducts] = useState<Products[]>([]); // Initialize products state
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const query = `*[_type == "product"][5...9] {
            _id,
            name,
            price,
            category,
            image {
              asset -> {
                url
              }
            }
          }`;
  
          const fetchedProducts = await client.fetch(query); // Fetch data from Sanity
          console.log(fetchedProducts, fetchedProducts.length);
  
          if (!fetchedProducts) {
            throw new Error("Failed to fetch products");
          }
  
          setProducts(fetchedProducts); // Store data in state
        } catch (error) {
          console.log('Error fetching products:', error);
        }
      };
  
      fetchProduct();
    }, []);
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
        {products.map((Products:Products, index:number) => (
          <div
            key={index}
            className=" w-[250px] border-gray-200 bg-white overflow-hidden group relative transition-all duration-300 hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="bg-[#F6F7FB] flex justify-center items-center h-56">
            {Products.image?.asset?.url ? (
                <Image
                  src={Products.image.asset.url}
                  alt={Products.name}
                  className="w-32 h-32 object-contain"
                  width={130}
                  height={150}
                />
              ) : (
                <p>No Image</p>
              )}
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
                {Products.name}
              </p>
              <p className="font-josefin text-sm text-gray-600">
                Code - Y523201
              </p>
              <p className="font-lato text-lg font-bold text-[#151875] mt-1">
                {Products.price}
              </p>
            </div>

            {/* Hover Button */}
            <Link href={`/product/${Products._id}`}>
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


