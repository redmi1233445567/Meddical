"use client";
import React, { useReducer, useState } from "react";
import call from "../../public/Img/Group 188.png";
import location from "../../public/Img/Group 178.png";
import time from "../../public/Img/Group 177.png";
import meddical from "../../public/Img/Meddical.png";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({}) {
  const pass = usePathname();

  const list = useRef();

  const [navList, setNavList] = useState([
    ["Home", true],
    ["About us", false],
    ["Services", false],
    ["Doctors", false],
    ["News", false],
    ["Contact", false],
  ]);

  const passs = () => {
    if ("/" == pass) {
      setNavList([
        ["Home", true],
        ["About us", false],
        ["Services", false],
        ["Doctors", false],
        ["News", false],
        ["Contact", false],
      ]);
    } else if ("/about" == pass) {
      setNavList([
        ["Home", false],
        ["About us", true],
        ["Services", false],
        ["Doctors", false],
        ["News", false],
        ["Contact", false],
      ]);
    } else if ("/services" == pass) {
      setNavList([
        ["Home", false],
        ["About us", false],
        ["Services", true],
        ["Doctors", false],
        ["News", false],
        ["Contact", false],
      ]);
    } else if ("/doctors" == pass) {
      setNavList([
        ["Home", false],
        ["About us", false],
        ["Services", false],
        ["Doctors", true],
        ["News", false],
        ["Contact", false],
      ]);
    } else if ("/news" == pass) {
      setNavList([
        ["Home", false],
        ["About us", false],
        ["Services", false],
        ["Doctors", false],
        ["News", true],
        ["Contact", false],
      ]);
    } else if ("/contact" == pass) {
      setNavList([
        ["Home", false],
        ["About us", false],
        ["Services", false],
        ["Doctors", false],
        ["News", false],
        ["Contact", true],
      ]);
    } else {
      setNavList([
        ["Home", false],
        ["About us", false],
        ["Services", false],
        ["Doctors", false],
        ["News", false],
        ["Contact", false],
      ]);
    }
  };
  const myTimeout = setTimeout(passs, 500);
  // let first = 0;
  const [first , setFirst] = useState(0)

  const handellList = () => {
    if (first == 0) {
      list.current.style.display = "flex";
      setFirst(first + 1)
    } else {
      if (list.current.style.display == "none") {
        list.current.style.display = "flex";
      } else {
        list.current.style.display = "none";
      }
    }
  };

  const handellCloseAuto = () => {
    list.current.style.display = "none";
  }

  return (
    <div>
      {/* start head */}
      <div className=" relative z-50 bg-white sm:px-[200px] px-[0px] flex md:justify-between justify-center items-center py-3  flex-wrap">
        <Image
          src={meddical}
          alt="Picture of the author"
          className=" sm:block hidden max-xl:mb-[20px]"
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

      <div className=" bg-[#1F2B6C] z-[100] sm:px-[200px] relative px-[30px] h-[80px] text-white flex items-center justify-between font-sans flex-wrap">
        <h1 className=" block lg:hidden text-[28px] font-title">
          <span className="text-[#BFD2F8]">MED</span>DICAL
        </h1>
        <div className="lg:block hidden">
          <ul className="flex gap-4">
            <Link href="/">
              <li
                className={`text-[18px] cursor-pointer  hover:text-[#BFD2F8] transition-all ${
                  navList[0][1] ? "activeNav font-bold" : "text-white"
                }`}
              >
                {navList[0][0]}
              </li>
            </Link>
            <Link href="../about">
              <li
                className={`text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all ${
                  navList[1][1] ? "activeNav font-bold" : "text-white"
                }`}
              >
                {navList[1][0]}
              </li>
            </Link>
            <Link href="../services">
              <li
                className={`text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all ${
                  navList[2][1] ? "activeNav font-bold" : "text-white"
                }`}
              >
                {navList[2][0]}
              </li>
            </Link>
            <Link href="../doctors">
              <li
                className={`text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all ${
                  navList[3][1] ? "activeNav font-bold" : "text-white"
                }`}
              >
                {navList[3][0]}
              </li>
            </Link>
            <Link href="../news">
              <li
                className={`text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all ${
                  navList[4][1] ? "activeNav font-bold" : "text-white"
                }`}
              >
                {navList[4][0]}
              </li>
            </Link>
            <Link href="../contact">
              <li
                className={`text-[18px] cursor-pointer hover:text-[#BFD2F8] transition-all ${
                  navList[5][1] ? "activeNav font-bold" : "text-white"
                }`}
              >
                {navList[5][0]}
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-8 items-center ">
          <div className=" relative p-0 cursor-pointer hover:animate-pulse">
            <div className="w-[20px] h-[20px] rounded-full border-2 border-white"></div>
            <div className="w-[2px] h-[5px] bg-white rotate-[-45deg] absolute top-[17px] left-[18px]"></div>
          </div>
          <div
            onClick={handellList}
            className="lg:hidden block cursor-pointer hover:animate-pulse"
          >
            <div className="w-[30px] h-[2px] mb-[5px] bg-white rounded-lg"></div>
            <div className="w-[30px] h-[2px] mb-[5px] bg-white rounded-lg"></div>
            <div className="w-[30px] h-[2px] bg-white rounded-lg"></div>
          </div>
          <Link href="../appointment">
            <div className="lg:block hidden hover:scale-[90%] transition-all text-[16px] bg-[#BFD2F8] text-[#1F2B6C] px-[35px] py-[13px] rounded-full font-[500] cursor-pointer">
              Appointment
            </div>
          </Link>
        </div>
        <div
          ref={list}
          className=" absolute bottom-[-360px] left-0 bg-[#BFD2F8] py-[20px] w-full  flex-col justify-center items-center gap-7 lg:w-0  lg:h-0 hidden"
        >
          <div className="lg:hidden">
            <ul className="flex gap-4 flex-col text-[#1F2B6C] justify-center items-center">
              <Link href="/">
                <li
                onClick={handellCloseAuto}
                  className={`text-[18px] cursor-pointer  hover:font-bold transition-all ${
                    navList[0][1] ? " font-bold" : "text-[#1F2B6C]"
                  }`}
                >
                  {navList[0][0]}
                </li>
              </Link>
              <Link href="../about">
                <li
                onClick={handellCloseAuto}
                  className={`text-[18px] cursor-pointer hover:font-bold transition-all ${
                    navList[1][1] ? " font-bold" : "text-[#1F2B6C]"
                  }`}
                >
                  {navList[1][0]}
                </li>
              </Link>
              <Link href="../services">
                <li
                onClick={handellCloseAuto}
                  className={`text-[18px] cursor-pointer hover:font-bold transition-all ${
                    navList[2][1] ? " font-bold" : "text-[#1F2B6C]"
                  }`}
                >
                  {navList[2][0]}
                </li>
              </Link>
              <Link href="../doctors">
                <li
                onClick={handellCloseAuto}
                  className={`text-[18px] cursor-pointer hover:font-bold transition-all ${
                    navList[3][1] ? " font-bold" : "text-[#1F2B6C]"
                  }`}
                >
                  {navList[3][0]}
                </li>
              </Link>
              <Link href="../news">
                <li
                onClick={handellCloseAuto}
                  className={`text-[18px] cursor-pointer hover:font-bold transition-all ${
                    navList[4][1] ? " font-bold" : "text-[#1F2B6C]"
                  }`}
                >
                  {navList[4][0]}
                </li>
              </Link>
              <Link href="../contact">
                <li
                onClick={handellCloseAuto}
                  className={`text-[18px] cursor-pointer hover:font-bold transition-all ${
                    navList[5][1] ? " font-bold" : "text-[#1F2B6C]"
                  }`}
                >
                  {navList[5][0]}
                </li>
              </Link>
            </ul>
          </div>
          <Link href="../appointment">
            <div onClick={handellCloseAuto} className="lg:hidden hover:scale-[90%] transition-all text-[16px] text-[#BFD2F8] bg-[#1F2B6C] px-[35px] py-[13px] rounded-full font-[500] cursor-pointer">
              Appointment
            </div>
          </Link>
        </div>
      </div>

      {/* end nav */}
    </div>
  );
}
