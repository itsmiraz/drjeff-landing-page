"use client";
import React, { useState } from "react";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
const Faq = () => {
  const data = [
    {
      title: "1. What is DOSAE™?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title:
        "2. Is the DOSAE™ as effective as surgery for treating spinal issues?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "3. How much time commitment is required for DOSAE™ treatment?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "4. Do we need an MRI?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "5. When can I expect relief from spinal disc pain?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  return (
    <div className="bg-[#F5F7F9] px-[20px] pt-[150px] pb-[80px] ">
      <div>
        <h3 className="text-center text-primaryColor font-bold text-[36px] md:text-[40px] leading-[44px]  font-plantinMTpro font-serif">
          Frequently asked questions
        </h3>
        <div className="mt-[51px] max-w-[1078px] mx-auto  space-y-[20px]">
          {data.map((item, i) => (
            <Accordion length={data.length} i={i} data={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

export type AccordionProps = {
  length: number;
  i: number;
  data: {
    title: string;
    content: string;
  };
};
const Accordion = ({ data }: AccordionProps) => {
  const { title, content } = data;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`pt-6 px-[30px] py-[25px] bg-white  rounded-[20px]  pb-6 select-none`}
    >
      <button
        className="w-full select-none text-primaryColor text-[18px] font-sourceSansPro font-semibold gap-x-6 text-left flex  justify-between items-center "
        onClick={toggleAccordion}
      >
        {title}
        <div
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          }  duration-300 transition-all `}
        >
          <ArrowDown />
        </div>
      </button>

      <div
        className={`overflow-hidden duration-700 transition-all transition-max-height ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="py-2 text-caption-1-large pr-10 text-[#1B365D]/80 text-[14px] font-normal font-sourceSansPro leading-[22px]">
          {content}
        </div>
      </div>
    </div>
  );
};
