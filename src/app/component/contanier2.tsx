'use client';
import Image from "next/image";

// animation
import { Fade } from 'react-awesome-reveal';

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";


interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  image: {
    asset: {
      url: string;
    };
  };
}

export default function Products() {
  
const [products, setProducts] = useState<Products[]>([]); // Initialize products state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product"][0...9] {
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
      <div
      className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Product Card */}
          {products.map((product:Products, index:number) => (
            <div
              key={index}
              className="hover:shadow-lg mb-10 transition hover:-translate-y-2"
            >
              <Link href={`/product/${product._id}`} >
              <div className="relative bg-[#EEEFFB] mx-auto  w-full justify-center items-center h-[250px] overflow-hidden">
                {product.image?.asset?.url ? (
                                <Image
                                  src={product.image.asset.url}
                                  alt={product.name}
                                  className="w-40 h-32 mx-auto mt-11 object-contain justify-center"
                                  width={150}
                                  loading='lazy'
                                  height={150}
                                />
                              ) : (
                                <p>No Image</p>
                              )}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
