"use client";
import React from "react";
import { useState, useRef } from "react";
import react1 from "../../../public/Img/Rectangle 20 (1).png";
import react2 from "../../../public/Img/Rectangle 20 (2).png";
import react3 from "../../../public/Img/Rectangle 20.png";
import log1 from "../../../public/Img/Vector (14).png";
import log2 from "../../../public/Img/Vector (15).png";
import log3 from "../../../public/Img/Vector (16).png";
import Image from "next/image";

export default function Doctors() {
  const [num, setNum] = useState(0);
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const [data, setData] = useState([
    [
        {
          img: react1,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
        {
          img: react2,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
        {
          img: react3,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
      ],
      [
        {
          img: react3,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
        {
          img: react1,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
        {
          img: react2,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
      ],
      [
        {
          img: react2,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
        {
          img: react3,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
        {
          img: react1,
          name: "Doctor Name",
          Specialization: "Neurology",
          social: [log1, log2, log3],
        },
      ],
    
  ]);

  const handellNumOne = (e) => {
    setNum(0)
    one.current.classList.add("activePoint")
    two.current.classList.remove("activePoint")
    three.current.classList.remove("activePoint")
  };

  const handellNumTwo = (e) => {
    setNum(1)
    console.log()
    two.current.classList.add("activePoint")
    one.current.classList.remove("activePoint")
    three.current.classList.remove("activePoint")
  };

  const handellNumThree = (e) => {
    setNum(2)
    three.current.classList.add("activePoint")
    two.current.classList.remove("activePoint")
    one.current.classList.remove("activePoint")
  };

  return (
    <div className="sm:px-[90px] px-[30px] w-full mt-[60px]">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#159EEC] text-[18px] font-sans">Trusted Care</p>
        <p className="text-[#1F2B6C] text-[32px] text-center mb-[100px]">
          Our Doctors
        </p>
      </div>
      <div className="flex gap-7 justify-center flex-wrap">
        {data[num].map((da, ind) => {
          return (
            <div key={ind}>
              <Image src={da.img} alt="Picture of the author" />
              <div className="bg-[#BFD2F8] flex justify-center items-center flex-col gap-3 py-4">
                <p className="text-[#1F2B6C] font-sans text-[18px]">
                  {da.name}
                </p>
                <p className="text-[#1F2B6C] font-sans text-[18px] font-bold">
                  {da.Specialization}
                </p>
                <div className="flex gap-2">
                  <Image src={da.social[0]} alt="Picture of the author" />
                  <Image src={da.social[1]} alt="Picture of the author" />
                  <Image src={da.social[2]} alt="Picture of the author" />
                </div>
              </div>
              <p className="bg-[#1F2B6C] w-full text-center text-white cursor-pointer py-2">
                View Profile
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 justify-center my-[60px]">
        <div onClick={handellNumTwo} className="w-[18px] h-[18px] bg-[#BFD2F8] cursor-pointer rounded-full" ref={two}></div>
        <div onClick={handellNumOne} className="w-[18px] h-[18px] bg-[#BFD2F8] cursor-pointer activePoint rounded-full" ref={one}></div>
        <div onClick={handellNumThree} className="w-[18px] h-[18px] bg-[#BFD2F8] cursor-pointer rounded-full" ref={three}></div>
      </div>
    </div>
  );
}
