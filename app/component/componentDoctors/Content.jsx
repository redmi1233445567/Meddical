"use client"
import React from 'react';
import { useState } from "react";
import react1 from "../../../public/Img/Rectangle 20 (1).png";
import react2 from "../../../public/Img/Rectangle 20 (2).png";
import react3 from "../../../public/Img/Rectangle 20.png";
import log1 from "../../../public/Img/Vector (14).png";
import log2 from "../../../public/Img/Vector (15).png";
import log3 from "../../../public/Img/Vector (16).png";
import Image from "next/image";
import Cards from '../componentServices/Cards';

export default function Content() {

    const [data, setData] = useState([
        [
            {
              img: react1,
              name: "Doctor Name1",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
            {
              img: react2,
              name: "Doctor Name2",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
            {
              img: react3,
              name: "Doctor Name3",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
          ],
          [
            {
              img: react3,
              name: "Doctor Name4",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
            {
              img: react1,
              name: "Doctor Name5",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
            {
              img: react2,
              name: "Doctor Name6",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
          ],
          [
            {
              img: react2,
              name: "Doctor Name7",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
            {
              img: react3,
              name: "Doctor Name8",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
            {
              img: react1,
              name: "Doctor Name9",
              Specialization: "Neurology",
              social: [log1, log2, log3],
            },
          ],
        
      ]);

      let allCards = []; // Declare the array *outside* the loop

    for (let i = 0; i < 3; i++) {
        const cards = data[i].map((da, ind) => {
            return (
                <div key={da.name} className='hover:-translate-y-4 transition-all'>
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
        });
        allCards.push(...cards); // Add the cards to the accumulating array
    }


      

  return (
    <div className='sm:px-[200px]'>
      <div className="flex gap-7 justify-center flex-wrap mb-[100px]">
              {allCards}
      </div>
    </div>
  )
}
