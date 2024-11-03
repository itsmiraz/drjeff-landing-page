import React from "react";
import StateMentLine from "@/assets/icons/StateMentLine.svg";
import Lines from '@/assets/images/lines.png'
import Image from "next/image";

const StateMent = () => {
  return (
    <div className="bg-primaryColor px-[20px] overflow-hidden relative py-[59px]">
      <h3 className="font-plantinMTpro text-white font-serif text-center font-bold leading-[40px] md:leading-[50px] text-[30px] md:text-[34px]">
        Don't risk permanent damage. Act Now! <br />
        Exclusive Offer: Mention code{" "}
        <span className="text-[#D4AA4F] pb-4 md:pb-0 relative inline-block ">
          {" "}
          "URGENT RELIEF"
          <span className="absolute -bottom-0 md:-bottom-2 -right-2 md:right-0">
            <StateMentLine />
          </span>
        </span>{" "}
        <br />
        for $100 off your first visit.
      </h3>
      <Image className="absolute w-[200px] md:block hidden left-10 top-0" src={Lines} alt=""/>
      <Image className="absolute w-[200px] md:block hidden right-10 top-0" src={Lines} alt=""/>
    </div>
  );
};

export default StateMent;
