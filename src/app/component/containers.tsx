import Image from "next/image";
import footer from '@/app/Image/footer logo.png'
import React from "react";

const Containers = () =>{
    return (
        <section className="flex flex-col justify-center items-center mt-20 px-4 md:px-12">
  <h2 className="font-josefin-sans text-4xl font-bold text-[#151875] mb-12">
    Featured Products
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden group relative transition-all duration-300 hover:shadow-lg"
      >
        {/* Image Section */}
        <div className="bg-[#F6F7FB] flex justify-center items-center h-56">
          <Image
            src={footer}  // Replace with your image paths
            alt="Cantilever Chair"
            className="w-32 h-32 object-contain"
            width={32}
            height={32}
          />
        </div>

        {/* Hover Icons */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="p-2 bg-white border rounded-full shadow hover:bg-[#FB2E86] hover:text-white">
              <i className="fa fa-heart"></i>
            </button>
            <button className="p-2 bg-white border rounded-full shadow hover:bg-[#FB2E86] hover:text-white">
              <i className="fa fa-eye"></i>
            </button>
            <button className="p-2 bg-white border rounded-full shadow hover:bg-[#FB2E86] hover:text-white">
              <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 text-center">
          <p className="font-lato text-lg font-bold text-[#FB2E86] mb-2">
            Cantilever Chair
          </p>
          <p className="font-josefin text-sm text-gray-600">Code - Y523201</p>
          <p className="font-lato text-lg font-bold text-[#151875] mt-1">
            $42.00
          </p>
        </div>

        {/* Hover Button */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-[#FB2E86] text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </div>
      </div>
    ))}
  </div>
</section>

    );
}

export default Containers;