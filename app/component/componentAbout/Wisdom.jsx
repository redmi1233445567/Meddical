"use client";
import React, { useState, useRef } from "react";
import img from "../../../public/Img/Rectangle 53.png";
import Image from "next/image";
import log from "../../../public/Img/Vector (22).png";

export default function Wisdom() {
  const [numA, setNumA] = useState(0);
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const [text, setText] = useState([
    [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      "Ahmed Sayed",
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      "Mohammed Ragab",
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      "Ali Salah",
    ],
  ]);


  const handellNumOne = (e) => {
    setNumA(0)
    one.current.classList.add("activePoint")
    two.current.classList.remove("activePoint")
    three.current.classList.remove("activePoint")
  };

  const handellNumTwo = (e) => {
    setNumA(1)
    console.log()
    two.current.classList.add("activePoint")
    one.current.classList.remove("activePoint")
    three.current.classList.remove("activePoint")
  };

  const handellNumThree = (e) => {
    setNumA(2)
    three.current.classList.add("activePoint")
    two.current.classList.remove("activePoint")
    one.current.classList.remove("activePoint")
  };

  return (
    <div className=" relative w-full h-[441px] flex flex-col justify-center">
      <Image
        src={img}
        alt="Picture of the author"
        className=" absolute top-0 left-0 h-full -z-20"
      />
      <div className=" absolute top-0 left-0 w-full h-full bg-[#1F2B6C]/60 -z-10"></div>
      <div className="w-full flex justify-center items-center flex-col text-white gap-3 font-sans">
        <Image src={log} alt="Picture of the author" />
        <p className="sm:w-[658px] text-center mt-[30px]">{text[numA][0]}</p>
        <div className="w-[200px] h-[2px] bg-[#BFD2F8]"></div>
        <p>{text[numA][1]}</p>
      </div>
      <div className="flex gap-2 justify-center mt-[50px]">
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
