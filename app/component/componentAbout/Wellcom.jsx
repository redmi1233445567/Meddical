import React from 'react'
import img from "../../../public/Img/Rectangle 3.png"
import Image from 'next/image'

export default function Wellcom() {
  return (
    <div className="sm:px-[150px] px-[30px] w-full flex gap-7 my-[60px] flex-wrap max-lg:justify-center ">
      <Image src={img} alt="Picture of the author" />
      <div >
          <p className="text-[18px] font-sans text-[#159EEC]">Welcome to Hospital name</p>
          <p className='sm:text-[48px] text-[30px] text-[#1F2B6C]'>Best Care for Your <br/>Good Health</p>
          <div className="flex gap-5 mt-[20px] flex-wrap">
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">A Passion for Healing</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">All our best</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">A Legacy of Excellence</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">5-Star Care</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">Believe in Us</p>
              </div>
              <div className="flex gap-3 items-center mb-[10px]">
                <div className="w-[16px] bg-[#159EEC] rounded-full h-[16px]"></div> <p className="text-[18px] text-[#000000]">Always Caring</p>
              </div>
            </div>
          </div>
          <p className="sm:w-[470px] my-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p className="sm:w-[470px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
          
        </div>
    </div>
  )
}
