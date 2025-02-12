import React from "react";
import black from "../../../public/Img/Blackdoctors 1.png";
import vic from "../../../public/Img/Vector (8).png";
import Image from "next/image";

export default function Wellcom() {
  return (
    <div className="mt-[80px] sm:px-[200px] px-[30px] w-full ">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#159EEC] text-[18px] font-sans">
          Welcome to Meddical
        </p>
        <p className="text-[#1F2B6C] text-[32px] text-center">
          A Great Place to Receive Care
        </p>
        <p className="text-[16px] text-center sm:w-[658px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <div className="mt-[30px] flex gap-2 text-[#159EEC] items-center cursor-pointer hover:translate-x-4 transition-all">
          <p>Link Button</p>
          <Image src={vic} alt="Picture of the author" />
        </div>
      </div>
      <div className="w-full my-[50px]">
        <Image src={black} alt="Picture of the author" className="w-full" />
        <div className="w-full h-[5px] flex">
            <div className="w-[25%] mx-auto h-[5px] bg-[#BFD2F8]"></div>
          <div className="w-[50%] mx-auto h-[5px] bg-[#1F2B6C]"></div>
          <div className="w-[25%] mx-auto h-[5px] bg-[#159EEC]"></div>
        </div>
      </div>
    </div>
  );
}
