"use client";
import React, { useState } from "react";
import img from "../../../public/Img/Rectangle 13.png";
import logo from "../../../public/Img/medical 1.png";
import Image from "next/image";
import vic from "../../../public/Img/Vector (8).png";
import logo2 from "../../../public/Img/Vector (25).png"
import Link from "next/link";

export default function Cards() {
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
    <div className="sm:px-[150px] px-[30px] pb-[20px] w-full flex justify-center flex-wrap gap-5 font-sans">
      {serv.map((ser) => {
        return (
          <div
            key={ser.id}
            className="w-[317px] relative border-gray-300 border-[1px] rounded-md overflow-hidden group cursor-pointer"
          >
            <div className=" relative">
              <Image src={ser.imge} alt="Picture of the author" />
              <div className=" hidden group-hover:flex justify-center items-center absolute bg-[#1F2B6C]/60 top-0 left-0 w-full h-full">
              <Image src={logo2} alt="Picture of the author" />
              </div>
            </div>
            <div className=" w-[80px] h-[80px] rounded-full flex justify-center items-center absolute bg-[#1F2B6C] top-[180px] right-[15px]">
              <Image src={logo} alt="Picture of the author" />
            </div>
            <div className="px-[20px] pt-[40px]">
              <p className="text-[26px] text-[#1F2B6C]">{ser.title}</p>
              <p>{ser.det}</p>
              <Link href={`../../services/${ser.id}`}><div className="my-[10px] flex gap-2 text-[#159EEC] items-center cursor-pointer hover:translate-x-4 transition-all">
                <p>Learn More</p>
                <Image src={vic} alt="Picture of the author" />
              </div></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
