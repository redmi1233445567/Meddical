"use client";
import React from "react";
import row from "../../../public/Img/Vector (13).png";
import back from "../../../public/Img/Rectangle 33.png";
import Image from "next/image";
import { useRef } from "react";

export default function Book() {
  const gender = useRef();
  const date = useRef();
  const time = useRef();
  const doctor = useRef();
  const depa = useRef();

  const handellOpenAndCloseGender = () => {
    if (gender.current.style.display == "none") {
      gender.current.style.display = "block";
    } else {
      gender.current.style.display = "none";
      console.log(gender.current.style.display);
    }
  };

  const handellOpenAndCloseDate = () => {
    if (date.current.style.display == "none") {
      date.current.style.display = "block";
    } else {
      date.current.style.display = "none";
    }
  };

  const handellOpenAndCloseTime = () => {
    if (time.current.style.display == "none") {
      time.current.style.display = "block";
    } else {
      time.current.style.display = "none";
    }
  };

  const handellOpenAndCloseDoctor = () => {
    if (doctor.current.style.display == "none") {
      doctor.current.style.display = "block";
    } else {
      doctor.current.style.display = "none";
    }
  };

  const handellOpenAndCloseDepa = () => {
    if (depa.current.style.display == "none") {
      depa.current.style.display = "block";
    } else {
      depa.current.style.display = "none";
    }
  };

  return (
    <div className="sm:px-[200px] px-[30px] w-full justify-between mt-[60px] flex gap-7 items-center relative py-[60px]">
      <Image
        src={back}
        alt="Picture of the author"
        className=" absolute top-0 w-full left-0 h-full -z-20"
      />
      <div className=" absolute top-0 left-0 w-full h-full bg-white/60 -z-10"></div>
      <div className="max-lg:hidden w-[49%]">
        <p className="text-[#159EEC] text-[32px] mb-[30px]">
          Book an Appointment
        </p>
        <p className="w-[407px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>
      <div className="max-md:flex max-md:justify-center max-md:flex-col lg:w-[49%] w-full">
        <div className="grid grid-rows-7 grid-cols-2  md:h-[445px] h-[700px] rounded-t-md overflow-hidden max-md:grid-cols-1 max-md:grid-rows-11">
          <input
            type="text"
            placeholder="Name"
            className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
          />
          <div className=" relative flex justify-between text-white bg-[#1F2B6C] items-center p-2 border-gray-300 border-[1px]">
            <p>Gender</p>
            <Image
              src={row}
              alt="Picture of the author"
              className=" cursor-pointer hover:scale-[0.9]"
              onClick={handellOpenAndCloseGender}
            />
            <div
              ref={gender}
              className=" hidden absolute left-0 bottom-[-110%] bg-[#BFD2F8] p-2 text-center w-full"
            >
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                Male
              </p>
              <p className=" cursor-pointer">Female</p>
            </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
          />
          <input
            type="text"
            placeholder="Phone"
            className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
          />
          <div className="relative flex justify-between text-white bg-[#1F2B6C] items-center p-2 border-gray-300 border-[1px]">
            <p>Date</p>
            <Image
              src={row}
              alt="Picture of the author"
              className=" cursor-pointer hover:scale-[0.9]"
              onClick={handellOpenAndCloseDate}
            />
            <div
              ref={date}
              className=" hidden absolute left-0 z-10 bottom-[-110%] bg-[#BFD2F8] p-2 text-center w-full"
            >
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                12/8/2025
              </p>
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                15/8/2025
              </p>
              <p className=" cursor-pointer">28/8/2025</p>
            </div>
          </div>
          <div className="relative flex justify-between text-white bg-[#1F2B6C] items-center p-2 border-gray-300 border-[1px]">
            <p>Time</p>
            <Image
              src={row}
              alt="Picture of the author"
              className=" cursor-pointer hover:scale-[0.9]"
              onClick={handellOpenAndCloseTime}
            />
            <div
              className=" hidden absolute left-0 bottom-[-110%] z-10 bg-[#BFD2F8] p-2 text-center w-full"
              ref={time}
            >
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                10pm
              </p>
              <p className=" cursor-pointer">11pm</p>
            </div>
          </div>
          <div className="relative flex justify-between text-white bg-[#1F2B6C] items-center p-2 border-gray-300 border-[1px]">
            <p>Doctor</p>
            <Image
              src={row}
              alt="Picture of the author"
              className=" cursor-pointer hover:scale-[0.9]"
              onClick={handellOpenAndCloseDoctor}
            />
            <div
              className=" hidden absolute left-0 bottom-[-110%] z-10 bg-[#BFD2F8] p-2 text-center w-full"
              ref={doctor}
            >
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                Ahmed
              </p>
              <p className=" cursor-pointer">Sayed</p>
            </div>
          </div>
          <div className="relative flex justify-between text-white bg-[#1F2B6C] items-center p-2 border-gray-300 border-[1px]">
            <p>Department</p>
            <Image
              src={row}
              alt="Picture of the author"
              className=" cursor-pointer hover:scale-[0.9]"
              onClick={handellOpenAndCloseDepa}
            />
            <div
              className=" hidden absolute left-0 bottom-[-110%] bg-[#BFD2F8] p-2 text-center w-full"
              ref={depa}
            >
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                Surgery
              </p>
              <p className=" cursor-pointer border-b-white border-b-[2px]">
                Examination
              </p>
              <p className=" cursor-pointer">Neurology</p>
            </div>
          </div>
          <textarea
            placeholder="Message"
            className=" appearance-none bg-[#1F2B6C] p-2 text-white md:col-span-2 row-span-3 focus:outline-none border-gray-300 border-[1px] border-b-none"
          />
        </div>
        <div className="w-full text-center py-3 bg-[#BFD2F8] text-[#1F2B6C] font-sans hover:bg-[#159EEC] hover:font-bold transition-all cursor-pointer">
          SUPMIT
        </div>
      </div>
    </div>
  );
}
