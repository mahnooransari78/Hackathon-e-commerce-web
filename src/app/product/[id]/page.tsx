"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import featured1 from "@/app/Image/featured1.png";



interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  oldprice: number;
  image1: string[];
  description: string;
  categories: "faniture";
  reviews: 20;
}

interface Params {
  id: string;
}

const ProductDetailPage = ({ params }: { params: Params }) => {

   const product2 =[
   {
    name:"product",
    price:35,
    image:featured1
   },
   {
    name:"product",
    price:35,
    image:featured1
   },
   {
    name:"product",
    price:35,
    image:featured1
   },
   {
    name:"product",
    price:35,
    image:featured1
   },
  ];


  const [product, setProducts] = useState<Product | null>(null);
  const route = useRouter();

  const fetchProductDetail = async () => {
    try {
      const res = await fetch("/api/products");
      const products = await res.json();
      const selectedProduct = products.find(
        (p: Product) => p.id === Number(params.id)
      );
      setProducts(selectedProduct);
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [params.id]);

  const addToCart = async () => {
    if (product) {
      await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify(product),
      });
      alert(`${product.title} added to cart!`);
      route.push("/cart");
    }
  };

  if (!product)
    return (
      <div className="text-center justify-center text-6xl font-bold">
        Loading...
      </div>
    );

  return (
    <section className='mx-auto'>
    <div className="lg:w-[1100px] flex lg:mx-auto p-4 h-[400px] shadow-lg">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Left Column */}
        <div className="space-y-10 w-[150px]">
          <div className="bg-white w-[150px] rounded shadow-md">
            <Image
              src={product.image}
              alt="Tote Bag"
              width={130}
              height={140}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-white w-[150px] rounded shadow-md">
            <Image
              src={product.image}
              alt="Lamp"
              width={130}
              height={140}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="bg-white w-[150px] rounded shadow-md">
            <Image
              src={product.image}
              alt="Wallet"
              width={130}
              height={140}
              className=" object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white w-[370px] rounded shadow-md col-span-1 sm:col-span-2 lg:col-span-3">
          <Image
            src={product.image}
            alt="Handbag"
            width={370}
            height={480}
            className=" object-cover rounded-lg"
          />
        
        </div>
         
      </div>
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl text-[#0D134E] font-bold">{product.title}</h1>
        <div className="flex items-center gap-2 my-2">
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
                              
          <span className="text-gray-500">({product.reviews} reviews)</span>
        </div>
        <div className="text-lg md:text-xl lg:flex gap-3 font-bold text-gray-800">
         <p className="text-[#151875]">{`$${product.price}.00`}</p>
         <p className="text-[#FB2E86]">{`$${product.oldprice}.00`}</p>
          
        </div>
        <p className="text-lg font-bold my-3">Color</p>
        <p className="text-gray-400 mb-4">{product.description}</p>

        {/* Categories and Tags */}
        <div className="my-4 flex gap-3">
          <p className="font-semibold text-[#151875]">Categories:</p>
          <p className="text-gray-600 ">{product.categories}</p>
        </div>
        <div className="my-4 flex gap-3">
          <p className="font-semibold text-[#151875]">Tags:</p>
          <p className="text-gray-600">@</p>
        </div>

        {/* Add to Cart Button */}
        <button onClick={addToCart} className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
     {/* Tabs Section */}
      <div className="mt-12 mx-auto">
            <div className="flex gap-8 border-b pb-2">
              <button className="font-semibold text-blue-800">Description</button>
              <button className="text-gray-500">Additional Info</button>
              <button className="text-gray-500">Reviews</button>
              <button className="text-gray-500">Video</button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
              <p className="text-gray-600 mt-2">
                {"This is a premium-quality chair made with high-grade materials.Comfortable, stylish, and long-lasting for any space."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product2.map((product2, index)=>(
              <div key={index}>
                <div className="text-center">
                <Image
                  src={product2.image}
                  alt="Related Product 3"
                  width={340}
                  height={440}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-800 font-semibold">{product2.name}</p>
                <p className="text-pink-500">{`$${product2.price}`}</p>
              </div>
              </div>
            ))}
          </div>
    </section>
  );
};

export default ProductDetailPage;
