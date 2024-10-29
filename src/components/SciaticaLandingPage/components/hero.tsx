"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import BackgroundGraphic from "@/assets/images/desktop-bg-graphic.webp";
import UnderLineGraphic from "@/assets/icons/UnderlineGraphic.svg";
import { plantinMTPro } from "@/fonts/fonts";
import Image from "next/image";
import Quiz from "@/components/Quiz";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import Dot from '@/assets/icons/Dot.svg'
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
          isMobile ? BackgroundGraphic.src : BackgroundGraphic.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-12 px-4 md:px-8 lg:px-16 mx-auto relative"
    >
      {/* Add background pattern container */}
      {/* <div
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{
        backgroundImage: `url('/')`,
        backgroundSize: "200px",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    /> */}

      <div className="max-w-[1270px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1
            className={`${plantinMTPro.variable} font-serif text-4xl md:text-5xl lg:text-[50px] font-bold mb-6 lg:leading-[60px]`}
          >
            Suffering from Sciatica? <br /> Discover your path to relief in 60
            Seconds
          </h1>
          <div className="absolute right-10 top-28">
            <UnderLineGraphic />
          </div>
          <p className="text-xl md:text-[20px] mb-8 md:mb-16 max-w-[800px] mx-auto">
            Are shooting pains down your leg controlling your life? You're not
            alone. Thousands have found relief through our revolutionary
            approach.
          </p>

          {/* Mobile Arrow - Only show on mobile */}
          <div className=" md:hidden w-full flex justify-center mb-6">
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="40"
                height="80"
                viewBox="0 0 40 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0v60M20 60L5 45M20 60l15-15"
                  stroke="#A65D57"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/*Quiz section */}

        <div className="max-w-[1070px] mx-auto flex justify-between items-center ">
          <div>
            <h2 className={`font-plantinMTpro font-serif text-[26px] text-[#1B365D] leading-[36px] font-bold `}>
              Take this quick Quiz to uncover your personalized sciatica
              solution.
            </h2>
            <p className="font-sourceSansPro py-[17px]  text-xl font-semibold text-[#1B365D] ">Answer 9 simple questions and:</p>
            <ul className="space-y-[13px] mb-[60px]">
              {heroStepData.map((item, i) => (
                <li className="flex items-center gap-[14px]" key={i}>
                <Dot/>  <p className="text-[16px] font-sourceSansPro text-[#1B365D]">{item}</p>
                </li>
              ))}
            </ul>
            <button className="font-sourceSansPro flex items-center gap-x-[10px] font-bold text-white bg-[#D4AA4F] py-[13px] px-[24px] rounded-full ">
              Start your 60-Second sciatica quiz now <LeftArrow />
            </button>
          </div>
         <div className="max-w-[413px]">
         <Quiz />
         </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

// <div
// id="quiz-section"
// className="grid md:grid-cols-2 gap-4 md:gap-12 items-start mb-8 md:mb-8 px-4 md:px-0"
// >
// {/* Quiz Section */}
// <div className="flex flex-col md:order-2">
//   <Quiz />
//   <div className="text-center mt-3 mb-12">
//     {" "}
//     {/* Added mb-12 for more space before the next section */}
//     <div className="text-[#1B365D] flex items-center justify-center space-x-2">
//       <p className="text-sm">⭐⭐⭐⭐⭐ 4.98</p>
//       <div className="flex items-center">
//         <Image
//           src="/google.svg"
//           alt="Google"
//           width={16}
//           height={16}
//           className="inline-block"
//         />
//         <span className="text-sm text-gray-600 ml-1">Reviews</span>
//       </div>
//     </div>
//   </div>
// </div>

// {/* Text Content - Show second on mobile */}
// <motion.div
//   initial={{ opacity: 0, x: -20 }}
//   animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
//   transition={{ duration: 0.7, delay: 0.2 }}
//   className="relative md:order-1"
// >
//   <h2
//     className={`${plantinMTPro.variable} font-serif text-lg md:text-xl font-bold mb-4`}
//   >
//     Take This Quick Quiz to Uncover Your Personalized Sciatica
//     Solution
//   </h2>
//   <p className="text-lg md:text-xl mb-4">
//     Answer 9 simple questions and:
//   </p>
//   <div className="space-y-3 mb-8">
//     {[
//       "Reveal the potential root cause of your sciatica",
//       "Learn if you're a candidate for our non-surgical DOSAE™ method",
//       "Get immediate tips to alleviate your pain (even before your first appointment!)",
//     ].map((item, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, x: -20 }}
//         animate={{
//           opacity: isVisible ? 1 : 0,
//           x: isVisible ? 0 : -20,
//         }}
//         transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//         className="flex items-center space-x-3"
//       >
//         <div className="w-[24px] h-[24px] bg-[#D4AA4F] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
//           <span className="flex items-center justify-center w-full h-full">
//             {index + 1}
//           </span>
//         </div>
//         <span className="text-base md:text-lg">
//           {item.includes("Reveal") && (
//             <span>
//               <span className="font-bold">Reveal</span> the
//               potential root cause of your sciatica
//             </span>
//           )}
//           {item.includes("Learn") && (
//             <span>
//               <span className="font-bold">Learn</span> if you're a
//               candidate for our non-surgical DOSAE™ method
//             </span>
//           )}
//           {item.includes("Get immediate tips") && (
//             <span>
//               <span className="font-bold">Get immediate tips</span>{" "}
//               to alleviate your pain (even before your first
//               appointment!)
//             </span>
//           )}
//         </span>
//       </motion.div>
//     ))}

//     {/* Desktop Arrow - Only show on desktop */}
//     <div className="hidden md:block relative mt-8">
//       <motion.div
//         animate={{
//           x: [-5, 15, -5],
//           rotate: [-2, 0, -2],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute right-[-40px]"
//       >
//         <svg
//           width="120"
//           height="60"
//           viewBox="0 0 120 60"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0 30c0 0 70 0 90 0M90 30c0 0-20-15-20-20M90 30c0 0-20 15-20 20"
//             stroke="#A65D57"
//             strokeWidth="6"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </motion.div>
//     </div>
//   </div>
// </motion.div>
// </div>
