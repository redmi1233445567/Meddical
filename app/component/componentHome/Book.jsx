"use client";
import React from "react";
import row from "../../../public/Img/Vector (13).png";
import back from "../../../public/Img/Rectangle 33.png";
import Image from "next/image";

export default function Book() {

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
          <select name="Gender" id="Gender-select" className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
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
          <select name="Date" id="Date-select" className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]">
            <option value="">Date</option>
            <option value="12/7/2025">12/7/2025</option>
            <option value="13/8/2025">13/8/2025</option>
          </select>
          <select name="Time" id="Time-select" className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]">
            <option value="">Time</option>
            <option value="10pm">10pm</option>
            <option value="1pm">1pm</option>
          </select>
          <select name="Doctor" id="Doctor-select" className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]">
            <option value="">Doctor</option>
            <option value="Ahmed">Ahmed</option>
            <option value="Sayed">Sayed</option>
          </select>
          <select name="Department" id="Department-select" className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]">
            <option value="">Department</option>
            <option value="Surgery">Surgery</option>
            <option value="Examination">Examination</option>
            <option value="Neurology">Neurology</option>
          </select>
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
