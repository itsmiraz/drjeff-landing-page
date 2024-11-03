import React from "react";
import StateMentLine from "@/assets/icons/StateMentLine.svg";
const StateMent = () => {
  return (
    <div className="bg-primaryColor py-[59px]">
      <h3 className="font-plantinMTpro text-white font-serif text-center font-bold leading-[50px] text-[34px]">
        Don't risk permanent damage. Act Now! <br />
        Exclusive Offer: Mention code{" "}
        <span className="text-[#D4AA4F] relative inline-block ">
          {" "}
          "URGENT RELIEF"
          <span className="absolute -bottom-2 right-0">
            <StateMentLine />
          </span>
        </span>{" "}
        <br />
        for $100 off your first visit.
      </h3>
    </div>
  );
};

export default StateMent;
