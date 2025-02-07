"use client"
import React from "react";
import call from "../../public/Img/Group 188.png";
import location from "../../public/Img/Group 178.png";
import time from "../../public/Img/Group 177.png";
import meddical from "../../public/Img/Meddical.png";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {

    const list = useRef();

    const handellList = () => {
        if(list.current.style.display == "none") {
            list.current.style.display = "flex"
        }else {
            list.current.style.display = "none"
        }
    }


  return (
    <div>
      {/* start head */}
      <div className=" relative z-50 bg-white sm:px-[90px] px-[0px] flex md:justify-between justify-center items-center py-3  flex-wrap">
        <Image
          src={meddical}
          alt="Picture of the author"
          className=" sm:block hidden"
        />
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-1">
            <Image src={call} alt="Picture of the author" />
            <div>
              <p className="text-[#1F2B6C]">Emergency</p>
              <p className="text-[#159EEC]">(237) 681-812-255</p>
            </div>
          </div>
          <div className="flex items-center gap-1 max-sm:order-3">
            <Image src={time} alt="Picture of the author" />
            <div>
              <p className="text-[#1F2B6C]">Work Hour</p>
              <p className="text-[#159EEC]">09:00 - 20:00 Everyday</p>
            </div>
          </div>
          <div className="flex items-center gap-1 max-sm:order-2">
            <Image src={location} alt="Picture of the author" />
            <div>
              <p className="text-[#1F2B6C]">Location</p>
              <p className="text-[#159EEC]">0123 Some Place</p>
            </div>
          </div>
        </div>
      </div>
      {/* end head */}
      {/* start nav */}

      <div className=" bg-[#1F2B6C] z-[100] sm:px-[90px] relative px-[30px] h-[80px] text-white flex items-center justify-between font-sans flex-wrap">
        <h1 className=" block sm:hidden text-[28px] font-title">
          <span className="text-[#BFD2F8]">MED</span>DICAL
        </h1>
        <div className="sm:block hidden">
          <ul className="flex gap-4">
            <Link href="/"><li className="text-[18px] cursor-pointer activeNav hover:text-[#BFD2F8] transition-all">
              Home
            </li></Link>
            <Link href="../about"><li className="text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all">
              About us
            </li></Link>
            <li className="text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all">
              Services
            </li>
            <li className="text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all">
              Doctors
            </li>
            <li className="text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all">
              News
            </li>
            <li className="text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-8 items-center ">
          <div className=" relative p-0 cursor-pointer hover:animate-pulse">
            <div className="w-[20px] h-[20px] rounded-full border-2 border-white"></div>
            <div className="w-[2px] h-[5px] bg-white rotate-[-45deg] absolute top-[17px] left-[18px]"></div>
          </div>
          <div onClick={handellList} className="sm:hidden block cursor-pointer hover:animate-pulse">
            <div className="w-[30px] h-[2px] mb-[5px] bg-white rounded-lg"></div>
            <div className="w-[30px] h-[2px] mb-[5px] bg-white rounded-lg"></div>
            <div className="w-[30px] h-[2px] bg-white rounded-lg"></div>
          </div>
          <div className="sm:block hidden text-[16px] bg-[#BFD2F8] text-[#1F2B6C] px-[35px] py-[13px] rounded-full font-[500] cursor-pointer">
            Appointment
          </div>
        </div>
        <div ref={list} className=" absolute bottom-[-360px] left-0 bg-[#BFD2F8] py-[20px] w-full  flex-col justify-center items-center gap-7 hidden">
          <div>
            <ul className="flex gap-4 flex-col text-[#1F2B6C] justify-center items-center">
              <Link href="/"><li className="text-[18px] cursor-pointer activeHidden hover:font-bold transition-all">
                Home
              </li></Link>
              <Link href="../about"><li className="text-[18px] cursor-pointer hover:font-bold transition-all">
                About us
              </li></Link>
              <li className="text-[18px] cursor-pointer hover:font-bold transition-all">
                Services
              </li>
              <li className="text-[18px] cursor-pointer hover:font-bold transition-all">
                Doctors
              </li>
              <li className="text-[18px] cursor-pointer hover:font-bold transition-all">
                News
              </li>
              <li className="text-[18px] cursor-pointer hover:font-bold transition-all">
                Contact
              </li>
            </ul>
          </div>
          <div className="text-[16px] text-[#BFD2F8] bg-[#1F2B6C] px-[35px] py-[13px] rounded-full font-[500] cursor-pointer">
            Appointment
          </div>
        </div>
      </div>

      {/* end nav */}
    </div>
  );
}
