"use client";
import React, { useState } from "react";
import log1 from "../../../public/Img/medical 1 (1).png";
import log2 from "../../../public/Img/Vector (26).png";
import log3 from "../../../public/Img/Vector (27).png";
import log4 from "../../../public/Img/Vector (28).png";
import img from "../../../public/Img/Rectangle 13 (1).png";
import Image from "next/image";

export default function Content({ id }) {
  const [serv, setServ] = useState([
    {
      id: 1,
      imge: img,
      title: "Free Checkup1",
      det: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    {
      id: 2,
      imge: img,
      title: "Free Checkup2",
      det: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    {
      id: 3,
      imge: img,
      title: "Free Checkup3",
      det: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    {
      id: 4,
      imge: img,
      title: "Free Checkup4",
      det: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    {
      id: 5,
      imge: img,
      title: "Free Checkup5",
      det: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
    {
      id: 6,
      imge: img,
      title: "Free Checkup6",
      det: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    },
  ]);

  return (
    <div className="flex justify-center items-start gap-7 flex-wrap sm:px-[150px] px-[30px] font-sans">
      <div className="flex flex-col border-gray-300 border-[1px] rounded-md overflow-hidden max-lg:hidden">
        <div className="flex gap-2 justify-center items-center p-[30px] bg-[#1F2B6C] cursor-pointer text-[#BFD2F8]">
          <Image src={log1} alt="Picture of the author" />
          <p>{serv[id - 1].title}</p>
        </div>
        <div className="flex gap-2 justify-center items-center p-[30px] hover:bg-[#1F2B6C] cursor-pointer hover:text-[#BFD2F8] transition-all">
          <Image src={log2} alt="Picture of the author" />
          <p>Cardiogram</p>
        </div>
        <div className="flex gap-2 justify-center items-center p-[30px] hover:bg-[#1F2B6C] cursor-pointer hover:text-[#BFD2F8] transition-all">
          <Image src={log3} alt="Picture of the author" />
          <p>Dna Testing</p>
        </div>
        <div className="flex gap-2 justify-center items-center p-[30px] hover:bg-[#1F2B6C] cursor-pointer hover:text-[#BFD2F8] transition-all">
          <Image src={log4} alt="Picture of the author" />
          <p>Blood Bank</p>
        </div>
        <div className="flex gap-2 justify-center items-center p-[30px] hover:bg-[#1F2B6C] cursor-pointer hover:text-[#BFD2F8] transition-all">
          <Image src={log3} alt="Picture of the author" />
          <p>Dermalogy</p>
        </div>
        <div className="flex gap-2 justify-center items-center p-[30px] hover:bg-[#1F2B6C] cursor-pointer hover:text-[#BFD2F8] transition-all">
          <Image src={log3} alt="Picture of the author" />
          <p>Orthopedic</p>
        </div>
      </div>
      <div>
        <Image src={img} alt="Picture of the author" />
        <p className="text-[#1F2B6C] text-[32px] font-title my-[20px]">A passion for putting patients first</p>
        <div>
          <div className="flex gap-5 mt-[20px] flex-wrap">
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div>
                <p className="text-[18px] text-[#000000]">
                  A Passion for Healing
                </p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div>
                <p className="text-[18px] text-[#000000]">All our best</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div>
                <p className="text-[18px] text-[#000000]">
                  A Legacy of Excellence
                </p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div>
                <p className="text-[18px] text-[#000000]">5-Star Care</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div>
                <p className="text-[18px] text-[#000000]">Believe in Us</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div>
                <p className="text-[18px] text-[#000000]">Always Caring</p>
              </div>
            </div>
          </div>
        </div>
        <p className="w-[731px] mt-[20px] mb-[10px] max-md:w-[450px] max-sm:w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        <p className="w-[731px] max-md:w-[450px] max-sm:w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
      </div>
    </div>
  );
}
