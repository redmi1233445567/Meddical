import React from "react";
import black from "../../../public/Img/Blackdoctors 1.png";
import Image from "next/image";
import Link from "next/link";

export default function Head() {
  return (
    <div className=" relative h-[250px] mb-[30px] ">
      <div className="w-full h-full absolute top-0 left-0 -z-20">
        <Image src={black} alt="Picture of the author" className="w-full h-full" />
        <div className="w-full h-[5px] flex">
          <div className="w-[25%] mx-auto h-[5px] bg-[#BFD2F8]"></div>
          <div className="w-[50%] mx-auto h-[5px] bg-[#1F2B6C]"></div>
          <div className="w-[25%] mx-auto h-[5px] bg-[#159EEC]"></div>
        </div>
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-white/60 -z-10"></div>
      <div className="w-full h-full flex justify-center max-md:gap-4 sm:px-[200px] px-[30px] max-md:items-center flex-col">
        <div className="flex text-[#1F2B6C] text-[18px]">
            <Link href="/"><p>Home / </p></Link>
            <Link href="../../doctors"><p className="font-bold">Doctors</p></Link>
        </div>
        <p className="text-[#1F2B6C] text-[48px]">Our Doctors</p>
      </div>
    </div>
  );
}
