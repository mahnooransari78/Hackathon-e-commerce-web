import React from "react";
import Image from "next/image";
import clock from "@/app/Image/clock.png";
import table from "@/app/Image/table yellow.png";
import seat1 from "@/app/Image/seat1 chair.png";
import seat2 from "@/app/Image/seat2 chair.png";
import seat3 from "@/app/Image/seat3 chair.png";

const Tcards = () => {
  return (
    <section className="mx-auto mt-10 flex flex-wrap lg:flex-row gap-4 justify-center">
     
      <div className="bg-[#FFF6FB] w-full md:w-1/3 lg:w-[380px] md:ml-0 h-[270px] p-2 transition hover:-translate-y-2 shadow-lg flex flex-col  items-center md:items-start">
        <p className="text-2xl font-semibold text-[#151875] text-center">
          {"23% off in all products"}
        </p>
        <p className="text-base text-[#FB2E86] w-[74px] border-b-2 border-[#FB2E86] text-center">
          {"Shop Now"}
        </p>
        <div className="justify-items-center md:items-end md:ml-28 " >
          <Image 
          src={clock} 
          alt="clock" 
          width={213} 
          height={207}
          
           />
        </div>
      </div>

      <div className="bg-[#EEEFFB] w-full md:w-1/3 lg:w-[380px] h-[270px] p-2 transition hover:-translate-y-2 shadow-lg flex flex-col items-center md:items-start">
        <p className="text-2xl font-semibold text-[#151875] text-center">
          {"23% off in all products"}
        </p>
        <p className="text-base text-[#FB2E86] w-[112px] border-b-2 border-[#FB2E86] text-center">
          {"View Collection"}
        </p>
        <div className="items-center md:items-end">
          <Image src={table} alt="table" width={312} height={173} className="items-center md:items-end md:ml-10"/>
        </div>
      </div>
    
      <div className="w-full md:w-1/4  p-2 grid grid-cols-1 gap-4">
        {[seat1, seat2, seat3].map((item, index) => (
          <div key={index} className="hover:shadow-lg flex gap-3 items-center">
            <div className="w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center items-center">
              <Image src={item} loading='lazy' alt="chair" width={64} height={71} />
            </div>
            <div>
              <p className="text-[#151875] font-semibold">
                {"Executive Seat chair"}
              </p>
              <p className="w-[37px] line-through text-[#151875]">{"$32.00"}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tcards;
