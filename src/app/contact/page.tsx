// import Image from "next/image";
import React from "react";
import Navbar from '../component/navbar';
import Panal from '../component/panal';
import Footer from '../component/footer';

const Contact = () =>{
    return (
    <div>
      <Panal />
      <Navbar />
      <section className="">
           <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Contact Us</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Contact Us</span>
            </p>
          </div>
        </header> 

        <div className="flex border-2  mt-20 ml-[10%]">
                       {/* 1 rigth colum */}
                    
          <div >            
            <div className="justify-start w-[50%] border-2 ">
                <h4 className="text-4xl">
                  {"Information About us"}  
                </h4> 
               <p className="font-semibold text-base text-[#8A8FB9] w-[500px] mt-8">
                 {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis    neque ultrices mattis aliquam, malesuada diam est. Malesuada sem    tristique amet erat vitae eget dolor lobortis. Accumsan faucibus    vitae lobortis quis bibendum quam."}
               </p> 
               <div className="flex gap-4 mt-10">
                 <span className="w-[25px] h-[25px] rounded-full bg-[#8A8FB9]"></span>
                 <span className="w-[25px] h-[25px] rounded-full bg-[#8A8FB9]"></span>
                 <span className="w-[25px] h-[25px] rounded-full bg-[#8A8FB9]"></span>   
               </div>
            </div> 

            <div className="justify-start mt-20">
                <h4 className="text-4xl">
                  {"Get In Touch"}  
                </h4> 
               <p className="font-semibold text-base text-[#8A8FB9] w-[500px] mt-8">
                 {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis    neque ultrices mattis aliquam, malesuada diam est. "}
               </p> 
               
               <form className="mt-9">
                <input type="text" placeholder="Your Name*" className="border-2 border-gray-400 w-[255px] h-[45px] rounded-[3px]"  />
                <input type="text" placeholder="Your E-mail" className="border-2 border-gray-400 ml-3 w-[265px] h-[45px] rounded-[3px]" />
                <input type="text" placeholder="Your Subject*" className="block border-2 border-gray-400 mt-5 w-[534px] h-[45px] rounded-[3px]"/>
                 <textarea name="Type your Messge" id="" placeholder="Type your Messge" className="border-2 border-gray-400 mt-5 w-[534px] h-[166px]"></textarea>
                 
                 <button className="lg:mt-2 block xl:mt-0 flex-shrink-0    text-white border-0 py-2 px-6 focus:outline-none bg-[#FB2E86]  rounded">
                    {"Send Mail"}
                 </button>
               </form>
            </div> 
          </div>
                                      {/* left colum */}
           <div className="border-2 w-[50%] justify-start">
                <h4 className="text-4xl">
                  {"Information About us"}  
                </h4> 
                               {/* div1 */}
                <div className="flex">
                  <div className=" mt-10 flex gap-5">
                    <div className="flex gap-1">
                      <span className="w-[45px] h-[45px] rounded-full bg-[#FB2E86]"></span>
                       <div className=" w-[172px] h-[53px] border-2 ">
                        <p className="w-[130px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"Tel:877-67-88-99"}
                        </p>
                        <p className="w-[172px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"E-mail:shop@store.com"}
                        </p>
                       </div>
                      </div>
                    <div className="flex  gap-1">
                      <div className="w-[45px] h-[45px] rounded-full bg-[#FB2E86]"></div>
                       <div className="w-[172px] h-[53px] border-2 ">
                        <p className="w-[130px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"Support Forum"}
                        </p>
                        <p className="w-[130px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"For over 24hr"}
                        </p>
                       </div>
                     </div>
                    </div>
                </div>
                               {/* div2 */}
                <div>
                  <div className=" mt-10 flex gap-5">
                    <div className="flex gap-1">
                      <span className="w-[45px] h-[45px] rounded-full bg-[#FB2E86]"></span>
                       <div className=" w-[172px] h-[53px] border-2 ">
                        <p className="w-[130px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"Tel:877-67-88-99"}
                        </p>
                        <p className="w-[172px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"E-mail:shop@store.com"}
                        </p>
                       </div>
                      </div>
                    <div className="flex  gap-1">
                      <div className="w-[45px] h-[45px] rounded-full bg-[#FB2E86]"></div>
                       <div className="w-[172px] h-[53px] border-2 ">
                        <p className="w-[130px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"Support Forum"}
                        </p>
                        <p className="w-[130px] h-6 font-semibold text-base text-[#8A8FB9]">
                          {"For over 24hr"}
                        </p>
                       </div>
                     </div>
                    </div>
                </div>
                {/* <Image 
                src={""}
                alt=''
                width={567}
                height={321}
                /> */}
            </div>                           
        </div>
       </section>
       <Footer />
    </div>
    );
}

export default Contact;