import React from "react";
import log1 from "../../../public/Img/Group 188 (1).png";
import log2 from "../../../public/Img/Group 178 (1).png";
import log3 from "../../../public/Img/Group 202.png";
import log4 from "../../../public/Img/Group 177 (1).png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="sm:px-[200px] px-[30px] w-full mt-[60px]">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#159EEC] text-[18px] font-sans">Get in touch</p>
        <p className="text-[#1F2B6C] text-[32px] text-center mb-[100px]">
          Contact
        </p>
      </div>
      <div className="flex gap-3 justify-center flex-wrap">
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
  );
}
