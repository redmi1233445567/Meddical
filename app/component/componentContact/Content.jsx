import React from "react";
import img1 from "../../../public/Img/Mapview.png";
import Image from "next/image";
import log1 from "../../../public/Img/Group 188 (1).png"
import log2 from "../../../public/Img/Group 178 (1).png"
import log3 from "../../../public/Img/Group 202.png"
import log4 from "../../../public/Img/Group 177 (1).png"

export default function Content() {
  return (
    <div className="sm:px-[200px] px-[30px] my-[100px]">
      <Image src={img1} alt="Picture of the author" className="w-full" />
      <div className="my-[100px] flex gap-[60px] w-full justify-center flex-wrap">
        <div className="xxl:w-[49%] w-full">
          <p className="text-[#159EEC] text-[18px] font-sans">Get in touch</p>
          <p className="text-[#1F2B6C] text-[32px]  mb-[60px]">Contact</p>
          <div className="max-md:flex max-md:justify-center max-md:flex-col">
            <div className="grid grid-rows-5  grid-cols-2  rounded-t-md overflow-hidden sm:w-full">
              <input
                type="text"
                placeholder="Name"
                className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
              />

              <input
                type="email"
                placeholder="Email"
                className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
              />
              <input
                type="text"
                placeholder="Subject"
                className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px] col-span-2"
              />

              <textarea
                placeholder="Message"
                className=" appearance-none bg-[#1F2B6C] p-2 text-white col-span-2 row-span-3 focus:outline-none border-gray-300 border-[1px] border-b-none"
              />
            </div>
            <div className="w-full text-center py-3 bg-[#BFD2F8] text-[#1F2B6C] font-sans hover:bg-[#159EEC] hover:font-bold transition-all cursor-pointer">
              SUPMIT
            </div>
          </div>
        </div>
        <div className="grid sm:grid-rows-2 sm:grid-cols-2 gap-[20px] ">
          <div className="bg-[#BFD2F8] text-[#1F2B6C] flex flex-col justify-center p-[20px] w-[233px] h-[233px] text-[16px] gap-3">
            <Image src={log1} alt="Picture of the author" />
            <p className="font-bold text-[18px]">Emergency</p>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="bg-[#1F2B6C] text-white flex flex-col justify-center p-[20px] w-[233px] h-[233px] text-[16px] gap-3">
            <Image src={log2} alt="Picture of the author" />
            <p className="font-bold text-[18px]">LOCATION</p>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          <div className="bg-[#BFD2F8] text-[#1F2B6C] flex flex-col justify-center p-[20px] w-[233px] h-[233px] text-[16px] gap-3">
            <Image src={log3} alt="Picture of the author" />
            <p className="font-bold text-[18px]">Email</p>
            <p>fildineeesoe@gmil.com</p>
            <p>myebstudios@gmail.com</p>
          </div>
          <div className="bg-[#BFD2F8] text-[#1F2B6C] flex flex-col justify-center p-[20px] w-[233px] h-[233px] text-[16px] gap-3">
            <Image src={log4} alt="Picture of the author" />
            <p className="font-bold text-[18px]">Working Hours</p>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
