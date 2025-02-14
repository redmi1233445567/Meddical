import React from "react";
import img from "../../../public/Img/Physician_Trends_2021_Merritt_Hawkins 1 .png";
import Image from "next/image";
import cal from "../../../public/Img/39.-Calendar.png";
import team from "../../../public/Img/27.-Team.png";
import cash from "../../../public/Img/15.-Cash.png";
import Link from "next/link";

export default function Head() {
  return (
    <div className="sm:h-[550px] h-[370px] w-[100%] flex items-center relative">
      <div className=" relative w-full h-full">
        <div className="sm:w-[734px] w-[500px] sm:h-[734px] h-[500px] rounded-full absolute sm:top-[-530px] top-[-350px] sm:left-[-505px] left-[-325px] bg-[#159EEC]/60 z-10 "></div>
        <Image
          src={img}
          alt="Picture of the author"
          className="w-[100%] h-[100%] bg-cover absolute top-0 left-0"
        />
        <div className="sm:w-[350px] w-[200px] sm:h-[350px] h-[200px] rounded-tl-full absolute bottom-[0px] right-[0px] bg-[#BFD2F8]/80 z-10 "></div>
        <div className=" relative z-50  w-full flex flex-col justify-center px-3 sm:px-[200px] mx-[0] h-full sm:items-start items-center gap-3">
          <p className="text-[#159EEC] text-[18px]">Caring for Life</p>
          <p className="text-[#1F2B6C] sm:text-[48px] text-[28px] mb-3 sm:text-left text-center">
            Leading the Way <br />
            in Medical Excellence
          </p>
          <Link href="../../services"><div className="text-[16px] bg-[#BFD2F8] text-[#1F2B6C] px-[35px] py-[13px] rounded-full font-[500] cursor-pointer hover:scale-[90%] transition-all">
            Our Services
          </div></Link>
        </div>
      </div>
      <div className=" absolute bottom-[-6%] left-0 sm:flex gap-5 justify-center w-full z-[70] hidden">
        <div className="flex justify-between bg-[#1F2B6C] p-3 text-white items-center text-[16px] w-[317px] cursor-pointer hover:-translate-y-8 transition-all">
          <p>Book an Appointment</p>
          <Image src={cal} alt="Picture of the author" />
        </div>
        <div className="flex justify-between text-[#1F2B6C] p-3 bg-[#BFD2F8] items-center text-[16px] w-[317px] cursor-pointer hover:-translate-y-8 transition-all">
          <p>Book an Appointment</p>
          <Image src={team} alt="Picture of the author" />
        </div>
        <div className="flex justify-between text-white p-3 bg-[#159EEC] items-center text-[16px] w-[317px] cursor-pointer hover:-translate-y-8 transition-all">
          <p>Book an Appointment</p>
          <Image src={cash} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
