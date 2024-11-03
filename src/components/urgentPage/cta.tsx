import React from "react";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const CTA = () => {
  return (
    <div className="py-[80px]">
      <div>
        <h2 className="text-[22px] font-semibold font-sourceSansPro text-primaryColor text-center">
          P.S. Severe sciatica won't resolve on its own. Every day you wait
          risks further damage. <br /> Take the first step towards a pain-free
          life now.
        </h2>
        <button className="flex mx-auto font-bold mt-[30px] h-fit whitespace-nowrap leading-[24px] items-center gap-2 px-[20px] py-[13px]  text-center text-white bg-[#D4AA4F] text-[14px] rounded-[100px] ">
          <span className="grow">Schedule your consultation online now</span>
          <span className="mt-1">
            <LeftArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CTA;
