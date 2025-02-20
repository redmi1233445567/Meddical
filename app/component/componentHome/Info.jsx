"use client";
import React from "react";
import img from "../../../public/Img/Rectangle 34.png";
import read from "../../../public/Img/Group 198.png";
import love from "../../../public/Img/Vector (17).png";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Info() {
  const [numP, setNumP] = useState(0);
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const [newsData, setNews] = useState([
    [
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
    ],
    [
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
    ],
    [
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
      [
        img,
        "Monday 05, September 2021 | By Author",
        "This Article’s Title goes Here, but not too long.",
      ],
    ],
  ]);

  const handellNumOne = () => {
    setNumP(0);
    one.current.classList.add("activePoint");
    two.current.classList.remove("activePoint");
    three.current.classList.remove("activePoint");
  };

  const handellNumTwo = () => {
    setNumP(1);
    console.log();
    two.current.classList.add("activePoint");
    one.current.classList.remove("activePoint");
    three.current.classList.remove("activePoint");
  };

  const handellNumThree = () => {
    setNumP(2);
    three.current.classList.add("activePoint");
    two.current.classList.remove("activePoint");
    one.current.classList.remove("activePoint");
  };

  return (
    <div className="sm:px-[200px] px-[30px] w-full mt-[40px] bg-[#FAFDFE] py-[30px]">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#159EEC] text-[18px] font-sans">
          Better information, Better health
        </p>
        <p className="text-[#1F2B6C] text-[32px] text-center mb-[80px]">
          News
        </p>
      </div>
      <div className="flex gap-y-3 flex-wrap justify-between">
        {newsData[numP].map((news, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-5 items-center bg-white pr-[20px] max-lg:flex-col max-lg:p-[20px] md:w-[49%] rounded-md hover:shadow-md hover:-translate-y-2 transition-all"
            >
              <Image src={news[0]} alt="Picture of the author" />
              <div>
                <p className="text-[#159EEC] text-[14px] mb-[20px]">
                  {news[1]}
                </p>
                <p>{news[2]}</p>
                <div className="flex gap-5 items-center mt-[30px]">
                  <div className="flex gap-2 items-center">
                    <Image src={read} alt="Picture of the author" />
                    <p>68</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={love} alt="Picture of the author" />
                    <p>68</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 justify-center my-[60px]">
        <div
          onClick={handellNumTwo}
          className="w-[18px] h-[18px] bg-[#BFD2F8] cursor-pointer rounded-full"
          ref={two}
        ></div>
        <div
          onClick={handellNumOne}
          className="w-[18px] h-[18px] bg-[#BFD2F8] cursor-pointer activePoint rounded-full"
          ref={one}
        ></div>
        <div
          onClick={handellNumThree}
          className="w-[18px] h-[18px] bg-[#BFD2F8] cursor-pointer rounded-full"
          ref={three}
        ></div>
      </div>
    </div>
  );
}
