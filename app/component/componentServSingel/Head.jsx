"use client"
import React, { useState } from "react";
import img from "../../../public/Img/Rectangle 3 (3).png";
import Image from "next/image";
import Link from "next/link";

export default function Head({id}) {

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
    <div className=" relative h-[250px] mb-[30px] ">
      <div className="w-full h-full absolute top-0 left-0 -z-20">
        <Image src={img} alt="Picture of the author" className="w-full h-full" />
        <div className="w-full h-[5px] flex">
          <div className="w-[25%] mx-auto h-[5px] bg-[#BFD2F8]"></div>
          <div className="w-[50%] mx-auto h-[5px] bg-[#1F2B6C]"></div>
          <div className="w-[25%] mx-auto h-[5px] bg-[#159EEC]"></div>
        </div>
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-white/60 -z-10"></div>
      <div className="w-full h-full flex justify-center max-md:gap-4 sm:px-[90px] px-[30px] max-md:items-center flex-col">
        <div className="flex text-[#1F2B6C] text-[18px]">
            <Link href="/"><p>Home / </p></Link>
            <Link href="../../services"><p className="font-bold">Services</p></Link>
        </div>
        <p className="text-[#1F2B6C] text-[48px]">{serv[id - 1].title}</p>
      </div>
    </div>
  );
}
