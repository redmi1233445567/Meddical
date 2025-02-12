import React from "react";
import one from "../../../public/Img/medical 1.png";
import two from "../../../public/Img/Vector (9).png";
import three from "../../../public/Img/Vector (10).png";
import four from "../../../public/Img/Vector (11).png";
import react1 from "../../../public/Img/Rectangle 13.png";
import react2 from "../../../public/Img/Rectangle 14.png";
import Image from "next/image";

export default function Services() {
  return (
    <div className="sm:px-[200px] px-[30px] w-full">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#159EEC] text-[18px] font-sans">
          Care you can believe in
        </p>
        <p className="text-[#1F2B6C] text-[32px] text-center">Our Services</p>
      </div>
      <div className="flex gap-8 justify-around max-lg:justify-center items-center flex-wrap mt-[60px] ">
        <div className=" w-[20%] border-gray-300 border-2 rounded-md max-sm:grid grid-rows-[1fr, 1fr, auto] grid-cols-2 max-sm:overflow-hidden max-sm:min-w-[348px]">
          <div className=" flex justify-center items-center gap-2 flex-col h-[130px] hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer">
            <Image src={one} alt="Picture of the author" />
            <p>Free Checkup</p>
          </div>
          <div className=" flex justify-center items-center gap-2 flex-col h-[130px] bg-[#1F2B6C] text-white cursor-pointer">
            <Image src={two} alt="Picture of the author" />
            <p>Cardiogram</p>
          </div>
          <div className=" flex justify-center items-center gap-2 flex-col h-[130px] hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer">
            <Image src={three} alt="Picture of the author" />
            <p>Dna Testing</p>
          </div>
          <div className=" flex justify-center items-center gap-2 flex-col h-[130px] hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer">
            <Image src={four} alt="Picture of the author" />
            <p>Blood Bank</p>
          </div>
          <div className=" col-span-2  text-center cursor-pointer py-3 max-sm:h-[80px] bg-[#1F2B6C] text-white hover:bg-[#159EEC] transition-all rounded-b-md">
            <p>View All</p>
          </div>
        </div>
        <div className="sm:block hidden">
          <p className="text-[26px]">A passion for putting patients first.</p>
          <div className="flex gap-5 mt-[20px]">
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">A Passion for Healing</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">All our best</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">A Legacy of Excellence</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">5-Star Care</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">Believe in Us</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">Always Caring</p>
              </div>
            </div>
          </div>
          <p className="w-[470px] my-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p className="w-[470px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
          
        </div>
        <div className="sm:block hidden">
            <div className="mb-[30px]">
              <Image src={react1} alt="Picture of the author" />
              <div className="w-full h-[5px] flex">
                <div className="w-[25%] mx-auto h-[5px] bg-[#BFD2F8]"></div>
                <div className="w-[50%] mx-auto h-[5px] bg-[#1F2B6C]"></div>
                <div className="w-[25%] mx-auto h-[5px] bg-[#159EEC]"></div>
              </div>
            </div>
            <div>
              <Image src={react2} alt="Picture of the author" />
              <div className="w-full h-[5px] flex">
                <div className="w-[25%] mx-auto h-[5px] bg-[#BFD2F8]"></div>
                <div className="w-[50%] mx-auto h-[5px] bg-[#1F2B6C]"></div>
                <div className="w-[25%] mx-auto h-[5px] bg-[#159EEC]"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
