"use client";
import React, { useState } from "react";
import b1 from "../../../public/Img/Rectangle 13 (2).png";
import b2 from "../../../public/Img/Rectangle 13 (3).png";
import b3 from "../../../public/Img/Rectangle 13 (4).png";
import b4 from "../../../public/Img/Rectangle 13 (5).png";
import s1 from "../../../public/Img/Rectangle 61.png";
import s2 from "../../../public/Img/Rectangle 61 (1).png";
import s3 from "../../../public/Img/Rectangle 61 (2).png";
import s4 from "../../../public/Img/Rectangle 61 (3).png";
import s5 from "../../../public/Img/Rectangle 61 (4).png";
import s6 from "../../../public/Img/Rectangle 61 (5).png";
import cal from "../../../public/Img/Group 209.png";
import person from "../../../public/Img/Group 210.png";
import read from "../../../public/Img/Group 198.png";
import search from "../../../public/Img/Group 175.png";
import hart from "../../../public/Img/Vector (17).png";
import vic from "../../../public/Img/Vector (8).png";
import Image from "next/image";
import Link from "next/link";

export default function Artical() {
  const [data, setData] = useState([
    [
      {
        id: 1,
        img: b1,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Nursing: A Profession of Compassion and Care",
        det: "Nursing is defined as assisting the individual, sick or well, in the performance of those activities contributing to health or its recovery or to a peaceful death that he would perform unaided if he had the necessary strength, 1  will or knowledge. It is likewise the unique contribution of nursing to 2  other health care services to help individuals to prevent and overcome disabilities that may arise out of illness. This comprehensive definition clarifies that nursing is not limited to caring for patients in hospitals but also includes promoting health, preventing diseases, helping individuals manage chronic illnesses, and providing palliative care to patients in the final stages of their lives.",
        sec: "Surgery",
      },
      {
        id: 2,
        img: b2,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Healthcare: The Cornerstone of a Healthy and Thriving Society",
        det: "Healthcare is more than just treating illnesses; it is a comprehensive system that aims to maintain the health and well-being of individuals and communities. Healthcare encompasses a wide range of services, from preventive care and vaccinations to specialized treatment and rehabilitation.",
        sec: "Health Care",
      },
      {
        id: 3,
        img: b3,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Medicine: The Science of Life and Human Health",
        det: "Medicine is a vital science that contributes to maintaining human health and well-being. Medicine faces great challenges, but it also holds great promise for the future through scientific and technological advances. Doctors, researchers, and communities must work together to address these challenges and ensure that everyone has access to the healthcare they need.",
        sec: "Medical",
      },
      {
        id: 4,
        img: b4,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title:
          "Professionalism in Medicine: A Journey of Excellence and Giving",
        det: "Medicine is a noble profession, a humanitarian mission, and a great responsibility. Working in the medical field requires more than just knowledge and technical skills; it also requires a commitment to professional ethics, dedication to serving patients, and a continuous pursuit of development and improvement. This is what is known as professionalism in medicine, which is the essence of excellence and success in this field.",
        sec: "Professional",
      },
    ],
    [
      {
        id: 6,
        img: b2,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Healthcare: The Cornerstone of a Healthy and Thriving Society",
        det: "Healthcare is more than just treating illnesses; it is a comprehensive system that aims to maintain the health and well-being of individuals and communities. Healthcare encompasses a wide range of services, from preventive care and vaccinations to specialized treatment and rehabilitation.",
        sec: "Health Care",
      },
      {
        id: 7,
        img: b3,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Medicine: The Science of Life and Human Health",
        det: "Medicine is a vital science that contributes to maintaining human health and well-being. Medicine faces great challenges, but it also holds great promise for the future through scientific and technological advances. Doctors, researchers, and communities must work together to address these challenges and ensure that everyone has access to the healthcare they need.",
        sec: "Medical",
      },
      {
        id: 5,
        img: b1,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Nursing: A Profession of Compassion and Care",
        det: "Nursing is defined as assisting the individual, sick or well, in the performance of those activities contributing to health or its recovery or to a peaceful death that he would perform unaided if he had the necessary strength, 1  will or knowledge. It is likewise the unique contribution of nursing to 2  other health care services to help individuals to prevent and overcome disabilities that may arise out of illness. This comprehensive definition clarifies that nursing is not limited to caring for patients in hospitals but also includes promoting health, preventing diseases, helping individuals manage chronic illnesses, and providing palliative care to patients in the final stages of their lives.",
        sec: "Surgery",
      },
      {
        id: 8,
        img: b4,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title:
          "Professionalism in Medicine: A Journey of Excellence and Giving22",
        det: "Medicine is a noble profession, a humanitarian mission, and a great responsibility. Working in the medical field requires more than just knowledge and technical skills; it also requires a commitment to professional ethics, dedication to serving patients, and a continuous pursuit of development and improvement. This is what is known as professionalism in medicine, which is the essence of excellence and success in this field.",
        sec: "Professional",
      },
    ],
    [
      {
        id: 11,
        img: b3,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Medicine: The Science of Life and Human Health",
        det: "Medicine is a vital science that contributes to maintaining human health and well-being. Medicine faces great challenges, but it also holds great promise for the future through scientific and technological advances. Doctors, researchers, and communities must work together to address these challenges and ensure that everyone has access to the healthcare they need.",
        sec: "Medical",
      },
      {
        id: 9,
        img: b1,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Nursing: A Profession of Compassion and Care",
        det: "Nursing is defined as assisting the individual, sick or well, in the performance of those activities contributing to health or its recovery or to a peaceful death that he would perform unaided if he had the necessary strength, 1  will or knowledge. It is likewise the unique contribution of nursing to 2  other health care services to help individuals to prevent and overcome disabilities that may arise out of illness. This comprehensive definition clarifies that nursing is not limited to caring for patients in hospitals but also includes promoting health, preventing diseases, helping individuals manage chronic illnesses, and providing palliative care to patients in the final stages of their lives.",
        sec: "Surgery",
      },
      {
        id: 12,
        img: b4,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title:
          "Professionalism in Medicine: A Journey of Excellence and Giving",
        det: "Medicine is a noble profession, a humanitarian mission, and a great responsibility. Working in the medical field requires more than just knowledge and technical skills; it also requires a commitment to professional ethics, dedication to serving patients, and a continuous pursuit of development and improvement. This is what is known as professionalism in medicine, which is the essence of excellence and success in this field.",
        sec: "Professional",
      },
      {
        id: 10,
        img: b2,
        date: "Monday 05, September 2021",
        read: "86",
        love: "157",
        title: "Healthcare: The Cornerstone of a Healthy and Thriving Society",
        det: "Healthcare is more than just treating illnesses; it is a comprehensive system that aims to maintain the health and well-being of individuals and communities. Healthcare encompasses a wide range of services, from preventive care and vaccinations to specialized treatment and rehabilitation.",
        sec: "Health Care",
      },
    ],
  ]);

  const [small, setSmall] = useState([
    [
      s1,
      "Monday 05, September 2021",
      "This Article’s Title goes Here, but not too long.",
    ],
    [
      s2,
      "Monday 05, September 2021",
      "This Article’s Title goes Here, but not too long.",
    ],
    [
      s3,
      "Monday 05, September 2021",
      "This Article’s Title goes Here, but not too long.",
    ],
    [
      s4,
      "Monday 05, September 2021",
      "This Article’s Title goes Here, but not too long.",
    ],
    [
      s5,
      "Monday 05, September 2021",
      "This Article’s Title goes Here, but not too long.",
    ],
    [
      s6,
      "Monday 05, September 2021",
      "This Article’s Title goes Here, but not too long.",
    ],
  ]);

  const [cat, setCat] = useState([
    ["Surgery", 5],
    ["Health Care", 5],
    ["Medical", 5],
    ["Professional", 5],
  ]);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.flat().length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = data.flat().slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scroll({
      top: 570,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scroll({
        top: 570,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scroll({
        top: 570,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div key={i} className="flex">
          <p
            onClick={() => handlePageClick(i)}
            className={`text-[#159EEC] cursor-pointer hover:text-[#1F2B6C] transition-all ${
              currentPage === i
                ? "text-[#1F2B6C] font-bold"
                : "text-[#159EEC] font-normal"
            }`}
          >
            {i}
          </p>
          {i < totalPages && <p className="text-[#1F2B6C]">-</p>}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="sm:px-[200px] px-[30px] flex flex-wrap justify-between font-sans max-xl:flex-col-reverse">
      <div className="w-[68%] max-xl:w-full">
        {currentArticles.map((box) => (
          <div key={box.id} className="mb-[30px]">
            <Image
              src={box.img}
              alt="Picture of the author"
              className="w-full"
            />
            <div className="flex gap-5 mt-[20px] mb-[15px] text-[#000000] max-sm:text-[11px]">
              <div className="flex items-center gap-1">
                <Image src={cal} alt="Picture of the author" />
                <p>{box.date}</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src={person} alt="Picture of the author" />
                <p>By Author</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src={read} alt="Picture of the author" />
                <p>{box.read}</p>
              </div>
              <div className="flex items-center gap-1">
                <Image src={hart} alt="Picture of the author" />
                <p>{box.love}</p>
              </div>
            </div>
            <p className="text-[#1F2B6C] text-[32px] mb-[20px] font-title">
              {box.title}
            </p>
            <p className="h-[77px] line-clamp-3">{box.det}</p>
            <Link href={`../../news/${box.id}`}><div className="mt-[10px] flex gap-5 text-[#1F2B6C] items-center bg-[#BFD2F8] rounded-full w-fit p-[10px] cursor-pointer hover:translate-x-4 transition-all">
              <p>Read More</p>
              <Image src={vic} alt="Picture of the author" />
            </div></Link>
          </div>
        ))}

        <div className="flex justify-between items-center">
          <div
            onClick={handlePrevPage}
            className={`flex gap-3 text-[#159EEC] bg-[#BFD2F8] rounded-md cursor-pointer p-1 items-center hover:-translate-x-2 transition-all ${
              currentPage === 1
                ? "opacity-55 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
            <Image src={vic} alt="Previous" className="rotate-180" />
            <p>Previous Page</p>
          </div>

          <div className="flex">{renderPageNumbers()}</div>

          <div
            onClick={handleNextPage}
            className={`flex gap-3 text-[#159EEC] bg-[#BFD2F8] rounded-md cursor-pointer p-1 items-center hover:-translate-x-2 transition-all ${
              currentPage === totalPages
                ? "opacity-55 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
            <p>Next Page</p>
            <Image src={vic} alt="Next" />
          </div>
        </div>
      </div>
      <div className="w-[29%] max-xl:w-full">
        <div className="flex justify-between bg-[#1F2B6C] text-white rounded-md px-[10px] py-[15px] mb-[20px]">
          <input
            type="text"
            placeholder="Search"
            className=" appearance-none focus:outline-none bg-inherit"
          />
          <Image src={search} alt="Picture of the author" />
        </div>
        <div className="p-[20px] border-gray-300 border-[1px] rounded-md max-xl:hidden">
          <p className="text-[#1F2B6C] font-title text-[32px] mb-[20px]">
            Recent Posts
          </p>
          <div>
            {small.map((sm, ind) => {
              return (
                <div
                  key={ind}
                  className="flex gap-4 text-[14px] mb-[10px] items-center"
                >
                  <Image src={sm[0]} alt="Picture of the author" />
                  <div>
                    <p className="text-[#159EEC] text-[12px]">{sm[1]}</p>
                    <p>{sm[2]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-[20px] border-gray-300 border-[1px] rounded-md mt-[30px] max-xl:hidden">
          <p className="text-[#1F2B6C] font-title text-[32px] mb-[20px]">
            Categories
          </p>
          <div>
            {cat.map((oneCat, ind) => {
              return (
                <div
                  key={ind}
                  className="flex justify-between text-[18px] mb-[10px] items-center"
                >
                  <p>{oneCat[0]}</p>
                  <p className="bg-[#159EEC] text-white rounded-full pt-[1px] px-[7px]">
                    {oneCat[1]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
