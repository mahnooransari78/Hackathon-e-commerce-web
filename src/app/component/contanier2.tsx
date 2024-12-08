import Image from "next/image";
import chair4 from '@/app/Image/chair4.png'





export default function Products() {
  return (
    <>
    <section className="py-10 p from x-5">
      <h1 className="text-2xl font-bold text-center mb-5">Leatest Products</h1>
      <ul className="flex justify-center space-x-4 mb-5 text-sm font-semibold">
        <li className="text-red-500 cursor-pointer">New Arrival</li>
        <li className="cursor-pointer">Best Seller</li>
        <li className="cursor-pointer">Featured</li>
        <li className="cursor-pointer">Special Offer</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   
          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="relative">
              <Image
                src={chair4}
                alt="chair"
                width={300}
                height={200}
                className="rounded"
              />
              
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"sales"}
                </span>
             
            </div>
            <h2 className="text-lg font-semibold mt-4">{"Comfort Handy Craft"}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-red-500 font-bold">{"$22.00"}</p>
              <p className="text-gray-500 line-through">{"$65.00"}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="relative">
              <Image
                src={chair4}
                alt="chair"
                width={300}
                height={200}
                className="rounded"
              />
              
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"sales"}
                </span>
             
            </div>
            <h2 className="text-lg font-semibold mt-4">{"Comfort Handy Craft"}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-red-500 font-bold">{"$22.00"}</p>
              <p className="text-gray-500 line-through">{"$65.00"}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="relative">
              <Image
                src={chair4}
                alt="chair"
                width={300}
                height={200}
                className="rounded"
              />
              
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"sales"}
                </span>
             
            </div>
            <h2 className="text-lg font-semibold mt-4">{"Comfort Handy Craft"}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-red-500 font-bold">{"$22.00"}</p>
              <p className="text-gray-500 line-through">{"$65.00"}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="relative">
              <Image
                src={chair4}
                alt="chair"
                width={300}
                height={200}
                className="rounded"
              />
              
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"sales"}
                </span>
             
            </div>
            <h2 className="text-lg font-semibold mt-4">{"Comfort Handy Craft"}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-red-500 font-bold">{"$22.00"}</p>
              <p className="text-gray-500 line-through">{"$65.00"}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="relative">
              <Image
                src={chair4}
                alt="chair"
                width={300}
                height={200}
                className="rounded"
              />
              
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"sales"}
                </span>
             
            </div>
            <h2 className="text-lg font-semibold mt-4">{"Comfort Handy Craft"}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-red-500 font-bold">{"$22.00"}</p>
              <p className="text-gray-500 line-through">{"$65.00"}</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="relative">
              <Image
                src={chair4}
                alt="chair"
                width={300}
                height={200}
                className="rounded"
              />
              
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {"sales"}
                </span>
             
            </div>
            <h2 className="text-lg font-semibold mt-4">{"Comfort Handy Craft"}</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-red-500 font-bold">{"$22.00"}</p>
              <p className="text-gray-500 line-through">{"$65.00"}</p>
            </div>
          </div>       
      </div>
    </section>
    </>
  );
}