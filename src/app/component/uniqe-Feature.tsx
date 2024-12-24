'use client';
import React from "react";
import sofa2 from "@/app/Image/sofa2.png";
import Image from "next/image";
import { Fade } from 'react-awesome-reveal'

const UniqueFeature = () => {
  return (
    <section className="mt-10 lg:mt-28 bg-[#F1F0FF] flex flex-col lg:flex-row items-center justify-center lg:h-[570px] px-6 lg:px-16 py-10">
      {/* Image Section */}
      <Fade direction='left' delay={600} cascade damping={1e-1} triggerOnce={true}>
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mb-6 lg:mb-0">
        <Image 
          src={sofa2}
          alt="sofa"
          width={800}
          height={800}
          className="max-w-full h-auto"
        />
      </div>
      </Fade>

      {/* Content Section */}
      <Fade direction='right' delay={600} cascade damping={1e-1} triggerOnce={true}>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h3 className="text-2xl lg:text-4xl font-bold text-[#151875] max-w-[507px]">
          {"Unique Features Of Latest & Trending Products"}
        </h3>
        
        <div className="space-y-4 mt-6">
          {/* Feature 1 */}
          <div className="flex items-center">
            <span className="w-[11px] h-[11px] rounded-full bg-[#F52B70] mr-3"></span>
            <p className="font-normal text-base text-[#ACABC3]">
              {"All frames constructed with hardwood solids and laminates"}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center">
            <span className="w-[11px] h-[11px] rounded-full bg-[#5625DF] mr-3"></span>
            <p className="font-normal text-base text-[#ACABC3]">
              {"Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails"}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center">
            <span className="w-[11px] h-[11px] rounded-full bg-[#37DAF3] mr-3"></span>
            <p className="font-normal text-base text-[#ACABC3]">
              {"Arms, backs and seats are structurally reinforced"}
            </p>
          </div>
        </div>

        {/* Button and Product Info */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-10">
          <button className="bg-[#FB2E86] rounded-[2px] text-white w-full lg:w-[157px] h-[45px]">
            {"Add To Cart"}
          </button>
          <div>
            <p className="text-sm text-[#151875] font-semibold">{"B&B Italian Sofa"}</p>
            <p className="text-sm text-[#151875]">{"$32.00"}</p>
          </div>
        </div>
      </div>
      </Fade>

      
    </section>
  );
};

export default UniqueFeature;
