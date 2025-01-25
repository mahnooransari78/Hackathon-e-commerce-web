"use client";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaList } from "react-icons/fa";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
 import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// interface Products {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }
// export default async function Page() {
//   const [products, setProducts] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = `*[_type == "product"][0...9] {
//           _id,
//           name,
//           price,
//           discountPercentage,
//           image {
//             asset -> {
//               url
//             }
//           }
//         }`;
//         const data = await client.fetch(query);
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }
  
  
//   return (
//     <section>
//       {/* Header Section */}
//       <header className="bg-gray-100 py-6">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
//             Shop Grid Default
//           </h1>
//           <p className="text-sm md:text-base text-gray-500">
//             Home / Pages /{" "}
//             <span className="text-pink-500">Shop Grid Default</span>
//           </p>
//         </div>
//       </header>
//       {/* Options Section */}
//       <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
//         {/* Heading Section */}
//         <div className="text-center md:text-left">
//           <h2 className="text-[#151875] text-2xl md:text-3xl font-semibold">
//             Ecommerce Accessories & Fashion Items
//           </h2>
//           <p className="text-sm leading-5 text-[#8A8FB9] mt-1">
//             Wide range of items for your fashion needs
//           </p>
//         </div>
//         {/* Controls */}
//         <div className="flex flex-wrap items-center gap-4">
//           <div className="flex items-center gap-2">
//             <p className="text-[#3F509E] font-medium">Per Page:</p>
//             <input
//               type="text"
//               placeholder="12"
//               className="border border-gray-300 px-2 py-1 w-[60px] text-sm focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <p className="text-[#3F509E] font-medium">Sort By:</p>
//             <input
//               type="text"
//               placeholder="Best Match"
//               className="border border-gray-300 px-2 py-1 w-[100px] text-sm focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <p className="text-[#3F509E] font-medium">View:</p>
//             <HiMiniSquares2X2 className="w-5 h-5  cursor-pointer" />
//             <FaList className="w-5 h-5 cursor-pointer" />
//             <input
//               type="text"
//               className="border border-gray-300 px-2 py-1 w-[100px] text-sm focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 mt-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product: Products) => (
//             <div  className="hover:shadow-lg">
//               <Link href={`/product/${product._id}`}>
//                 {/* Image Section */}
//                 <div className="relative bg-[#EEEFFB] w-full h-[250px] sm:h-[280px] overflow-hidden flex items-center justify-center"
//                
//                 >
                  
//                     <Image
//                       src={product.image.asset.url}
//                       alt={product.name}
//                       className="w-40 h-32 mx-auto mt-11 object-contain justify-center"
//                       width={150}
//                       loading="lazy"
//                       height={150}
//                     />
                  
//                 </div>
//                 {/* Product Info */}
//                 <div className="text-center p-4 space-y-2">
//                   <h2 className="text-sm lg:text-base font-semibold text-[#151875] truncate">
//                     {product.name}
//                   </h2>
//                   {/* Pricing */}
//                   <div className="flex justify-center items-center space-x-3">
//                     <p className="text-[#151875] text-base font-semibold">
//                       {product.price}
//                     </p>
//                     <p className="text-[#FB2448] text-sm line-through">
//                       {product.discountPercentage}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  image: {
    asset: {
      url: string;
    };
  };
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"][0...19]{
          _id,
          name,
          price,
          discountPercentage,
          image {
            asset -> {
              url
            }
          }
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
      <div className="container mx-auto px-4 mt-20">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="hover:shadow-lg">
             <Link href={`/product/${product._id}`}>
             <div className="relative bg-[#EEEFFB] w-full h-[250px] sm:h-[280px] overflow-hidden flex items-center justify-center" >
                  
             {product.image?.asset?.url ? (
    <Image
      src={product.image.asset.url}
      alt={product.name || "Product Image"}
      className="w-40 h-32 mx-auto mt-11 object-contain justify-center"
      width={150}
      height={150}
      loading="lazy"
    />
  ) : (
    <p className="text-gray-500">No Image Available</p>
  )}
                  
                </div> {/* Product Info */}
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
                     {product.discountPercentage}
                   </p>
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
