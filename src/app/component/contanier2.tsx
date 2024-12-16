import Image from "next/image";
import featured1 from "@/app/Image/featured1.png";
import chair6 from "@/app/Image/chair6.png";
import musterd from "@/app/Image/musterd.png";
import whitechair from "@/app/Image/whitechair.png";
import whitwood from "@/app/Image/whitwood.png";
import black1 from "@/app/Image/black1.png";

export default function Products() {
  return (
    <section className="py-10 px-5">
      {/* Heading */}
      <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8">Leatest Products</h1>

      {/* Navigation Tabs */}
      <ul className="flex justify-center space-x-4 mb-8 text-sm lg:text-base font-semibold">
        <li className="text-red-500 cursor-pointer">New Arrival</li>
        <li className="cursor-pointer hover:text-red-500 transition">Best Seller</li>
        <li className="cursor-pointer hover:text-red-500 transition">Featured</li>
        <li className="cursor-pointer hover:text-red-500 transition">Special Offer</li>
      </ul>

      {/* Products Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Single Product Card */}
          {[chair6, musterd, whitechair, black1, featured1, whitwood].map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition hover:-translate-y-2"
            >
              <div className="relative bg-[#EEEFFB] rounded-lg overflow-hidden">
                <Image src={item} alt="Product" width={300} height={250} className="w-full h-auto" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"Sales"}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex flex-col mt-4 space-y-2 text-center">
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
      </div>
    </section>
  );
}
