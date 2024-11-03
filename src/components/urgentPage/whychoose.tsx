import React from "react";
import LeftPointerVector from "@/assets/icons/LeftPointerVector.svg";
import CardBg from "@/assets/images/cardDesign.png";
import Image from "next/image";
import WhyChooseUsCardBlurBg from "@/assets/images/why-choose-us-bg-blur.png";
import BgGlow from "@/assets/icons/bgGlow.svg";

const WhyChoose = () => {
  const whyChooseData = [
    {
      title: "Your sciatica and spine care specialist",
      options: [
        "22+ years of dedicated spine care expertise.",
        "Advanced training in Spinal Biomechanical Engineering.",
        "Creator of the revolutionary DOSAE™ method.",
        "Specialized in non-surgical disc treatments.",
        `Author of "Never Look Back - A Simple Guide to the Causes and Care for Back Pain".`,
      ],
    },
    {
      title: "Cutting-edge expertise",
      options: [
        "Dr. Jeff's advanced training in MRI analysis ensures accurate diagnosis of your specific condition.",
        "Combines the latest research with hands-on experience to deliver optimal results.",
        "Continually updates treatment protocols based on the most recent advancements in spine care.",
      ],
    },
    {
      title: "Proven track record",
      options: [
        "Helped thousands of patients avoid risky surgeries.",
        "Specializes in complex cases that haven't responded to traditional treatments.",
        "Recognized as a leader in non-surgical spine care in Northern Indiana.",
      ],
    },
    {
      title: "State-of-the-art diagnostic tools",
      options: [
        "In-house digital X-rays for immediate analysis.",
        "Access to high-quality MRI technology.",
        "Comprehensive in-house MRI analysis by Dr. Jeff himself, ensuring nothing is overlooked.",
      ],
    },
  ];

  return (
    <div className="bg-[#F5F7F9] px-[20px] pt-[60px] md:pt-[150px] pb-[80px]">
      <h1 className="text-[30px] md:text-[40px] text-center font-bold font-plantinMTpro font-serif text-primaryColor">
        Why choose Midwest Disc Clinic?
      </h1>
      <div className="pt-[40px] relative pb-[50px] max-w-[1078px] mx-auto relative grid  grid-cols-1 gmd:grid-cols-2 place-content-center  place-items-center gap-[30px]">
        {whyChooseData.map((item) => (
          <div className="md:w-[524px] z-30 relative md:h-[274px] overflow-hidden relative  shadow-md p-[20px] rounded-[20px]">
            <div className="z-10 relative min-h-[204px] bg-transparent h-full w-full   rounded-[20px]">
              <div className="md:pl-[20px] py-[14px]">
                <h3 className="text-[24px] z-20 relative tracking-tighter  leading-[30px] font-bold font-plantinMTpro font-serif text-primaryColor">
                  {item.title}
                </h3>
                <ul className="mt-2 z-20 relative">
                  {item.options.map((option) => (
                    <li className="flex items-start gap-x-2 ">
                      <div className="mt-2">
                        <LeftPointerVector />
                      </div>

                      <p className="text-primaryColor leading-[30px] font-sourceSansPro text-[16px] md:text-[18px] ">
                        {option}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                className="w-full h-full absolute top-0 left-0"
                src={WhyChooseUsCardBlurBg}
                alt=""
              />
            </div>
            <Image
              className="object-cover left-0 top-0 absolute w-full h-full"
              src={CardBg}
              loading="lazy"
              alt=""
            />
          </div>
        ))}
        <div className="w-[300px] h-[300px] absolute transform md:-translate-x-1/2 -translate-y-1/2 -left-40 md:left-1/4 top-1/4">
          <BgGlow />
        </div>
      </div>
      <p className="font-sourceSansPro  text-[#1B365D]/80 text-center  text-[18px] font-semibold ">
        Dr. Jeff's unique combination of extensive experience, advanced
        training, and innovative treatment methods makes Midwest Disc Clinic{" "}
        <br className="md:block hidden" /> the premier choice for severe sciatica cases. Don't trust your
        spine to anyone less qualified – your quality of life depends on it.
      </p>
    </div>
  );
};

export default WhyChoose;
