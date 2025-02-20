import React from "react";
import phone from "../../../public/Img/Group 188 (2).png";
import Image from "next/image";

export default function Content() {

  return (
    <div>
      <div className="sm:px-[200px] px-[30px] max-xl:flex-col max-xl:gap-5 flex flex-wrap justify-between py-[60px]">
        <div className="flex flex-col gap-7 relative  xl:w-[49%]">
          <div>
            <p className="text-[#1F2B6C] sm:text-[32px] text-[28px] ">
              Book an Appointment
            </p>
            <p className="sm:w-[407px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>
          <div className="max-md:flex max-md:justify-center max-md:flex-col">
            <div className="grid grid-rows-7 grid-cols-2  md:h-[445px] h-[700px] rounded-t-md overflow-hidden max-md:grid-cols-1 max-md:grid-rows-11">
              <input
                type="text"
                placeholder="Name"
                className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
              />
              <select
                name="Gender"
                id="Gender-select"
                className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
              />
              <input
                type="text"
                placeholder="Phone"
                className=" appearance-none focus:outline-none bg-[#1F2B6C] p-2 text-white border-gray-300 border-[1px]"
              />
              <select
                name="Date"
                id="Date-select"
                className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]"
              >
                <option value="">Date</option>
                <option value="12/7/2025">12/7/2025</option>
                <option value="13/8/2025">13/8/2025</option>
              </select>
              <select
                name="Time"
                id="Time-select"
                className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]"
              >
                <option value="">Time</option>
                <option value="10pm">10pm</option>
                <option value="1pm">1pm</option>
              </select>
              <select
                name="Doctor"
                id="Doctor-select"
                className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]"
              >
                <option value="">Doctor</option>
                <option value="Ahmed">Ahmed</option>
                <option value="Sayed">Sayed</option>
              </select>
              <select
                name="Department"
                id="Department-select"
                className="bg-[#1F2B6C] text-white focus:outline-none border-gray-300 border-[1px]"
              >
                <option value="">Department</option>
                <option value="Surgery">Surgery</option>
                <option value="Examination">Examination</option>
                <option value="Neurology">Neurology</option>
              </select>
              <textarea
                placeholder="Message"
                className=" appearance-none bg-[#1F2B6C] p-2 text-white md:col-span-2 row-span-3 focus:outline-none border-gray-300 border-[1px] border-b-none"
              />
            </div>
            <div className="w-full text-center py-3 bg-[#BFD2F8] text-[#1F2B6C] font-sans hover:bg-[#159EEC] hover:font-bold transition-all cursor-pointer">
              SUPMIT
            </div>
          </div>
        </div>
        <div className="xl:w-[49%] bg-[#1F2B6C] text-white font-sans flex flex-col justify-center items-center rounded-md text-[18px] sm:p-[30px] p-[20px] sm:px-[60px]">
          <h2 className="text-[#BFD2F8] text-[48px] font-title mb-[40px]">
            Shedule hours
          </h2>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Monday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Tuesday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Wednesday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Thursday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Friday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Saturday</p>
            <p>-</p>
            <p className="w-[167px] ">09:00 AM - 07:00 PM</p>
          </div>
          <div className="flex justify-between w-full mb-[25px]">
            <p className="w-[100px]">Sunday</p>
            <p>-</p>
            <p className="w-[167px] ">Closed</p>
          </div>
          <div className="w-[50%] h-[2px] bg-[#BFD2F8] my-[20px]"></div>
          <div className="flex gap-3 text-[26px] items-center">
            <Image src={phone} alt="Picture of the author" />
            <div>
              <p>Emergency</p>
              <p className="text-[#BFD2F8]">(237) 681-812-255</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:px-[200px] px-[30px] h-[500px] max-lg:h-[400px] max-sm:h-[300px]">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Alexandria,%20city,%20Egypt+(Adress)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
