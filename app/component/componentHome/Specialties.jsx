"use client"
import Image from "next/image";
import hart from "../../../public/Img/Vector (12).png"
import React from "react";
import { useRef, useState } from "react";

export default function Specialties() {

    const [ourSpecialties, setour] = useState([
        ["Neurology", false],
        ["Bones", false],
        ["Oncology", false],
        ["Otorhinolaryngology", false],
        ["Ophthalmology", false],
        ["Cardiovascular", false],
        ["Pulmonology", true],
        ["Renal Medicine", false],
        ["Gastroenterology", false],
        ["Urology", false],
        ["Dermatology",false],
        ["Gynaecology", false],
      ]);

    const ele = useRef();

    

    const select = (ind) => {
        let newArray = []
        for (let i = 0; i < ourSpecialties.length; i++) {
            ourSpecialties[i][1] = false;

            newArray = [...newArray, ourSpecialties[i]]
        }

        newArray[ind][1] = true;
        console.log(newArray[ind][1]);
        setour(newArray)
        
    }

  

  return (
    <div className="sm:px-[200px] px-[30px] w-full mt-[60px]">
      <div className="w-full flex flex-col items-center">
        <p className="text-[#159EEC] text-[18px] font-sans">Always Caring</p>
        <p className="text-[#1F2B6C] text-[32px] text-center">
          Our Specialties
        </p>
      </div>
      <div ref={ele} className="grid grid-rows-3 grid-cols-4 h-[516px] max-md:h-[600px] mt-[40px] max-sm:hidden max-md:grid-cols-2 max-lg:grid-cols-3">
        {ourSpecialties.map((sp, ind) => {
            return(
                <div onClick={() => select(ind)} key={ind} className={`flex gap-5 justify-center items-center flex-col border-r-[1px] border-r-gray-400 border-b-[1px] border-b-gray-300 hover:bg-[#1F2B6C] hover:text-white hover:scale-[0.8] transition-all cursor-pointer ${sp[1]? "bg-[#1F2B6C] text-white": "bg-white text-black"}`}>
                    <Image src={hart} alt="Picture of the author" />
                    <p>{sp[0]}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
}
