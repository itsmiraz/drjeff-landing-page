import React from 'react'
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import SatisfactionImage from "@/assets/images/satisfication.png";

import BrownLeftArrow from "@/assets/icons/BrownLeftArrow.svg";
import Image from 'next/image';
const Satisfaction = () => {
  return (
    <div className="mt-[60px] md:mt-[150px] pb-20 ">
    <div className="md:max-w-[857px] h-fit py-[30px] pl-[30px] relative gap-x-[51px] flex md:flex-row flex-col items-center rounded-[20px] bg-[#F5F7F9] mx-auto">
      <div className="relative min-w-[242px] h-full">
        <Image src={SatisfactionImage} className="w-full h-full" alt="" />
      </div>
      <div>
        <h2 className="text-[30px] md:text-start text-center md:text-[34px] leading-[36px] md:leading-[46px] font-bold font-plantinMTpro font-serif text-primaryColor">
        Our Midwest Disc Clinic family value guarantee. Your satisfaction is our priority, or your money back!
        </h2>
        <button className="flex mt-[35px] md:mx-0 mx-auto font-bold leading-[24px] gap-3 px-16 py-[13px]  text-sm  items-center text-center text-white bg-[#D4AA4F] rounded-[100px] max-md:px-5 ">
          <span className="grow">Schedule your consultation online now</span>
          <span>
            <LeftArrow />
          </span>
        </button>
      </div>
    </div>

 
  </div>
  )
}

export default Satisfaction