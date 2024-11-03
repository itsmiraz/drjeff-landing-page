"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MobileBackgroundGraphic from "@/assets/images/desktop-bg-graphic.webp";
import BackgroundGraphic from "@/assets/images/desktop-bg-graphic.webp";
import UnderLineGraphic from "@/assets/icons/UnderlineGraphic.svg";
import { plantinMTPro } from "@/fonts/fonts";
import Quiz from "@/components/Quiz";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import Dot from "@/assets/icons/Dot.svg";
const heroStepData = [
  "Reveal the potential root cause of your sciatica",
  `Learn if you're a candidate for our non-surgical DOSAE™ method`,
  "Get immediate tips to alleviate your pain (even before your first appointment!)",
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Handle window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main
      style={{
        backgroundImage: `url(${
          isMobile ? MobileBackgroundGraphic.src : BackgroundGraphic.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-12 md:px-8 lg:px-16 mx-auto  md:h-[985px] relative"
    >
      <div className="max-w-[1270px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="text-center px-[34px]  mb-12"
        >
          <h1
            className={`${plantinMTPro.variable} font-serif text-[40px] md:text-5xl lg:text-[50px] font-bold md:mb-6 leading-[50px] lg:leading-[60px]`}
          >
            Suffering from Sciatica? <br /> Discover your path to relief in 60
            Seconds
          </h1>
          <div className="relative mx-auto flex justify-center md:absolute md:right-10  md:top-28">
            <UnderLineGraphic />
          </div>
          <p className="text-xl md:text-[20px] mt-[23px] md:mt-0 mb-8 md:mb-16 max-w-[800px] mx-auto">
            Are shooting pains down your leg controlling your life? You're not
            alone. Thousands have found relief through our revolutionary
            approach.
          </p>

          
        </motion.div>

        {/*Quiz section */}

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
           transition={{ duration: 0.7,delay:0.3 }}
        className="max-w-[1070px] px-[20px] mx-auto  flex md:flex-row flex-col-reverse justify-between gap-y-[50px] items-center ">
          <div>
            <h2
              className={`font-plantinMTpro font-serif text-[24px] md:text-[26px] text-[#1B365D] leading-[36px] font-bold `}
            >
              Take this quick Quiz to uncover your personalized sciatica
              solution.
            </h2>
            <p className="font-sourceSansPro py-[17px]  text-[18px] md:text-xl font-semibold text-[#1B365D] ">
              Answer 9 simple questions and:
            </p>
            <ul className="space-y-[10px] md:space-y-[13px] mb-[60px]">
              {heroStepData.map((item, i) => (
                <li
                  className="flex items-start md:items-center gap-[14px]"
                  key={i}
                >
                  <div className="mt-1 md:mt-0">
                  <Dot /></div>{" "}
                  <p className="text-[16px] md:leading-normal leading-[17px] font-sourceSansPro text-[#1B365D]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <button className="font-sourceSansPro text-center justify-center flex items-center gap-x-[10px] font-bold text-white whitespace-nowrap bg-[#D4AA4F] py-[13px] px-[4px] md:w-fit w-full md:px-[24px] rounded-full ">
              Start your 60-Second sciatica quiz now <LeftArrow />
            </button>
          </div>
          <div id="quiz-section" className="w-full md:max-w-[413px]">
            <Quiz />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
