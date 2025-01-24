"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
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


const ProductDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        image {
          asset-> {
            url
          }
        }
      }`;

      try {
        const products: Products[] = await client.fetch(query);
        if (products && products.length > 0) {
          const selectedProduct = products.find((item) => params.id === item._id);
          setProduct(selectedProduct || null);
        } else {
          console.log("No product data found!");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [params.id]);

  const addToCart = async () => {
    if (product) {
      try {
        await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        alert(`${product.name} added to cart!`);
        router.push("/cart");
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  if (!product) {
    return <p className="mx-auto text-center">Loading product details...</p>;
  }

  return (
    <div className="mx-auto ">
     <div className="container mx-auto px-4 lg:px-8 py-10">
 <div className="flex justify-center flex-wrap lg:flex-nowrap gap-5">
   {/* Left Column (Images Gallery) */}
   <div className="hidden md:block space-y-5 flex-col">
   <div className="bg-white w-[150px] rounded shadow-md">
          <Image
            src={product.image.asset.url}
            alt="Tote Bag"
            width={130}
            height={140}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="bg-white w-[150px] rounded shadow-md">
          <Image
            src={product.image.asset.url}
            alt="Lamp"
            width={130}
            height={140}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="bg-white w-[150px] rounded shadow-md">
          <Image
            src={product.image.asset.url}
            alt="Wallet"
            width={130}
            height={140}
            className=" object-cover rounded-lg"
          />
        </div>
   </div>

     {/* Main Product Image */}
     <div className="bg-white w-[370px] rounded shadow-md col-span-1 sm:col-span-2 lg:col-span-3">
          <Image
            src={product.image.asset.url}
            alt="Handbag"
            width={350}
            height={450}
            loading='lazy'
            className=" object-cover rounded-lg"
          />
     </div>

   {/* Product Details */}
     <div className="flex flex-col lg:w-1/3">
       <h1 className="text-2xl lg:text-3xl font-bold text-[#0D134E]">{product.name}</h1>
       <div className="flex items-center gap-2 mt-4">
         {/* Rating */}
         <div className="flex items-center">
           {[...Array(4)].map((_, i) => (
             <MdOutlineStarPurple500 key={i} className="text-[#FFC416]" />
           ))}
           <MdOutlineStarPurple500 className="text-gray-400" />
         </div>
         <span className="text-sm text-gray-500">(200 reviews)</span>
       </div>

      {/* Pricing */}
      <div className="flex items-center gap-4 mt-4 text-lg font-bold">
        <p className="text-[#151875]">{`$${product.price}.00`}</p>
        <p className="text-[#FB2E86] line-through">{`$78.00`}</p>
      </div>

       {/* Description */}
      <p className="text-gray-600 mt-6 leading-6">{product.description}</p>

      {/* Categories */}
      <div className="mt-6">
        <p className="font-semibold text-[#151875]">Categories:</p>
        <p className="text-gray-600">Furniture</p>
      </div>

      {/* Add to Cart */}
      <button
        className="mt-8 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  </div>

  {/* Responsive Tabs Section */}
  <div className="mt-12">
    <div className="flex gap-2 md:gap-8 border-b pb-2">
      <button className="font-semibold text-[#151875]">Description</button>
      <button className="text-gray-500">Additional Info</button>
      <button className="text-gray-500">Reviews</button>
      <button className="text-gray-500">Video</button>
    </div>
    <div className="mt-4 text-gray-600">
      <p>
        This is a premium-quality product designed with precision and care,
        suitable for modern spaces and long-lasting use.
      </p>
    </div>
  </div>
</div>

     </div>
  );
};

export default ProductDetail;
