"use client";
import React from "react";
import { useRef } from "react";
import row from "../../../public/Img/Vector (13).png";
import phone from "../../../public/Img/Group 188 (2).png";
import Image from "next/image";
import map from "../../../public/Img/Mapview.png"

export default function Content() {
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
    <div>
      <div className="sm:px-[200px] px-[30px] max-xl:flex-col max-xl:gap-5 flex flex-wrap justify-between py-[60px]">
        <div className="flex flex-col gap-7 relative  xl:w-[49%]">
          <div>
            <p className="text-[#1F2B6C] sm:text-[32px] text-[28px] ">
              Book an Appointment
            </p>
            <p className="sm:w-[407px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>
          <div className="max-md:flex max-md:justify-center max-md:flex-col">
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
        <div className="xl:w-[49%] bg-[#1F2B6C] text-white font-sans flex flex-col justify-center items-center rounded-md text-[18px] sm:p-[30px] p-[20px] sm:px-[60px]">
          <h2 className="text-[#BFD2F8] text-[48px] font-title mb-[40px]">
            Shedule hours
          </h2>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Monday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Tuesday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Wednesday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Thursday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Friday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Saturday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Sunday</p>
            <p>-</p>
            <p className="w-[167px] ">Closed</p>
          </div>
          <div className="w-[50%] h-[2px] bg-[#BFD2F8] my-[20px]"></div>
          <div className="flex gap-3 text-[26px] items-center">
            <Image src={phone} alt="Picture of the author" />
            <div>
              <p>Emergency</p>
              <p className="text-[#BFD2F8]">(237) 681-812-255</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={map} alt="Picture of the author" className="sm:px-[200px] px-[30px] w-full"/>
    </div>
  );
}
