import React from 'react'
import Image from 'next/image';
import error from '@/app/Image/error.png'
import Panal from '../component/panal';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
const Error =()=> {
  return (
    <>
    <Panal />
    <Navbar />
    <section className="flex flex-col items-center justify-center min-h-screen ">
  {/* Header */}
  <div className="text-start  bg-[#F6F7FB]">
    <h1 className="font-josefin-sans text-4xl font-bold text-[#151875] mb-2">
      404 Not Found
    </h1>
    <p className="text-sm font-lato text-gray-600">
      Home / Pages / <span className="text-[#FB2E86]">404 Not Found</span>
    </p>
  </div>

  {/* Illustration */}
  <div className="my-10">
    <Image
      src={error} // Replace with your illustration image path
      alt="404 Illustration"
      width={1000}
      height={600}
      className="w-full max-w-[600px] mx-auto"
    />
  </div>

  {/* Message */}
  <p className="text-lg font-lato text-[#151875] mb-6">
    oops! The page you requested was not found!
  </p>

  {/* Button */}
  <button className="bg-[#FB2E86] text-white font-lato text-sm font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#e21c76] transition duration-300">
    Back To Home
  </button>

  {/* Logos Section */}
  <div className=" justify-center  mt-12">
  <Image 
  src={error}
  alt='logo'
  width={900}
  height={1114}
  />
  </div>
</section>
<Footer />
</>
  )
}

export default Error;
