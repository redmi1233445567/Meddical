import React from "react";
import log from "../../public/Img/Vector (18).png";
import log1 from "../../public/Img/Vector (19).png";
import log2 from "../../public/Img/Vector (20).png";
import log3 from "../../public/Img/Vector (21).png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="sm:px-[90px] px-[30px] w-full mt-[40px] bg-[#1F2B6C] text-white py-[20px] font-sans">
      <div className="flex gap-6 md:justify-between border-b-gray-300 border-b-2 pb-[30px] mp-[30px] flex-wrap">
        <div>
          <p className="text-[#BFD2F8] text-[36px] font-title mb-[40px]">
            MEDDICAL
          </p>
          <p className="text-[18px] w-[241px]">
            Leading the Way in Medical Execellence, Trusted Care.
          </p>
        </div>
        <div>
          <p className="text-[18] font-bold mb-[40px]">Important Links</p>
          <p>Appointment</p>
          <p>Doctors</p>
          <p>Services</p>
          <p>About Us</p>
        </div>
        <div>
          <p className="text-[18] font-bold mb-[40px]">Contact Us</p>
          <p>Call: (237) 681-812-255</p>
          <p>Email: fildineesoe@gmail.com</p>
          <p>Address: 0123 Some place</p>
          <p>Some country</p>
        </div>
        <div>
          <p className="text-[18] font-bold mb-[40px]">Newsletter</p>
          <div className="flex w-[272px] bg-[#BFD2F8] rounded-sm p-3 text-[#1F2B6C] justify-between cursor-pointer hover:-translate-y-3 transition-all">
            <p>Enter your email address</p>
            <Image src={log} alt="Picture of the author" />
          </div>
        </div>
      </div>
      <div className="flex justify-between my-[30px] items-center flex-wrap max-md:justify-center">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        <div className="flex gap-3">
          <Image src={log1} alt="Picture of the author" />
          <Image src={log2} alt="Picture of the author" />
          <Image src={log3} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
