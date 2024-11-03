import React from "react";
import Develop from "@/assets/icons/Develop.svg";
import Patient from "@/assets/icons/Patient.svg";
import Drug from "@/assets/icons/Drug.svg";

const WhyTrustUs = () => {
  return (
    <div className="bg-[#1B365D] relative pt-[50px] pb-[79px] ">
      <h2 className="text-[40px] font-bold text-white text-center font-plantinMTpro font-serif">
        Why trust our approach?
      </h2>
      <ul className="flex gap-x-[51px] pt-[45px] justify-center items-center">
        <li className="flex   gap-x-[20px] justify-center items-center">
          <Develop />
          <h3 className="text-[20px] font-bold text-white  font-plantinMTpro leading-[24px] font-serif">Developed by  Dr. Jeff <br /> Garofalo, 22+ year spine <br /> expert.</h3>
        </li>
        <li className="flex  gap-x-[20px] justify-center items-center">
          <Patient />
          <h3 className="text-[20px] leading-[24px] font-bold text-white  font-plantinMTpro font-serif">Used successfully by <br /> thousands of patients.</h3>
        </li>
        <li className="flex  gap-x-[20px] justify-center items-center">
          <Drug />
          <h3 className="text-[20px] leading-[24px] font-bold  text-white font-plantinMTpro font-serif">Non-invasive, drug-free <br /> methods.</h3>
        </li>
      </ul>

    </div>
  );
};

export default WhyTrustUs;
