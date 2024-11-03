import React from "react";
import SatisfactionImage from "@/assets/images/satisfication.png";
import Image from "next/image";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import BrownLeftArrow from "@/assets/icons/BrownLeftArrow.svg";

const Satisfaction = () => {
  return (
    <div className="mt-[150px] pb-20 ">
      <div className="max-w-[857px] px-[20px] h-fit py-[30px] pl-[30px] relative gap-x-[51px] md:flex-row flex-col flex items-center rounded-[20px] bg-[#F5F7F9] mx-auto">
        <div className="relative max-w-[270px] w-full md:min-w-[242px] h-full">
          <Image src={SatisfactionImage} className="w-full h-full" alt="" />
        </div>
        <div>
          <h2 className="text-[30px] text-center md:text-[34px] leading-[36px] md:leading-[46px] font-bold font-plantinMTpro font-serif text-primaryColor">
            If you don't see improvement within 30 days, we'll refund your
            purchase - no questions asked!
          </h2>
          <button className="flex mt-[35px] mx-auto md:mx-0 font-bold leading-[24px] gap-3 px-16 py-[13px]  text-sm  items-center text-center text-white bg-[#D4AA4F] rounded-[100px] max-md:px-5 ">
            <span className="grow">Yes, I Want Relief Now</span>
            <span>
              <LeftArrow />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-[80px] px-[20px] flex flex-col justify-center items-center">
      <p className="text-center  text-[22px] font-sourceSansPro text-primaryColor font-semibold">
        P.S. Want to start for free? Download our "5 Quick Sciatica Relief
        Techniques" PDF now!
      </p>
      <button className="bg-[#F5F7F9] flex gap-x-[10px] leading-[24px] justify-center items-center text-[#D4AA4F] font-bold font-sourceSansPro text-[14px]  mt-[30px] text-center w-[228px] px-4 rounded-full py-[14px]">
        Free Download <BrownLeftArrow/>
      </button>
      </div>
    </div>
  );
};

export default Satisfaction;
