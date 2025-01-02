import Image from "next/image";
import pic from '@/app/Image/pic.png';
import React from "react";

const Contact = () => {
  return (
    
      <section>
        {/* Header */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">
              {"Contact Us"}
            </h1>
            <p className="text-sm text-gray-500">
              {"Home / Pages / "}<span className="text-pink-500">
                {"Contact Us"}
              </span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h4 className="text-4xl text-[#151875] font-semibold">
              {"Information About us"}
            </h4>
            <p className="font-semibold text-base text-[#8A8FB9] mt-4">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis."}
            </p>
            <div className="flex gap-4 mt-6">
              <span className="w-6 h-6 rounded-full bg-[#5625DF]"></span>
              <span className="w-6 h-6 rounded-full bg-[#FB2E86]"></span>
              <span className="w-6 h-6 rounded-full bg-[#37DAF3]"></span>
            </div>

            <div className="mt-16 lg:mt-40">
              <h4 className="text-4xl text-[#151875] font-semibold">
                {"Get In Touch"}
              </h4>
              <p className="font-semibold text-base text-[#8A8FB9] mt-4">
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam."}
              </p>
              <form className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="border-2 block border-[#d3d6f5] w-full md:w-[49%] h-12 px-3 rounded-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="border-2  border-[#d3d6f5] w-full md:w-[49%] h-12 px-3 rounded-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Subject*"
                  className="border-2 border-[#d3d6f5] w-full h-12 px-3 rounded-sm"
                />
                <textarea
                  placeholder="Type your Message"
                  className="border-2 border-[#d3d6f5] w-full h-40 px-3 rounded-sm"
                ></textarea>
                <button className="bg-[#FB2E86] text-white py-3 px-6 rounded-sm">
                  {"Send Mail"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-4xl text-[#151875] font-semibold">
              {"Contact Way"}
            </h4>
            <div className="mt-10 space-y-6 ">
              <div className="md:flex md:gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#5625DF]"></div>
                <div>
                  <p className="text-base text-[#8A8FB9]">
                    {"Tel: 877-67-88-99"}
                  </p>
                  <p className="text-base text-[#8A8FB9]">
                    {"E-mail: shop@store.com"}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5 md:mt-0 gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FB2E86]"></div>
                <div>
                  <p className="text-base text-[#8A8FB9]">
                    {"Support Forum"}
                  </p>
                  <p className="text-base text-[#8A8FB9]">
                    {"For over 24hr"}
                  </p>
                </div>
              </div>
              </div>
              <div className="md:flex md:gap-4 ">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFB265]"></div>
                <div>
                  <p className="text-base text-[#8A8FB9]">
                    {"20 Margaret st, London"}
                  </p>
                  <p className="text-base text-[#8A8FB9]">
                    {"Great Britain, 3NM98-LK"}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5 md:mt-0 gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1BE982]"></div>
                <div>
                  <p className="text-base text-[#8A8FB9]">
                    {"Free standard shipping"}
                  </p>
                  <p className="text-base text-[#8A8FB9]">
                    {"on all orders."}
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="mt-16 lg:mt-40">
              <Image
                src={pic}
                alt="Contact"
                width={500}
                height={300}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
