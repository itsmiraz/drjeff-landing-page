import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { plantinMTPro } from "@/fonts/fonts";
import LogosTop from '@/assets/images/logo/loogs-top.png'
import LogosBottom from '@/assets/images/logo/logos-bottom.png'

const RecognizedBy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const logos = [
    {
      name: "ABC News",
      src: "/ABC_News_logo_2021.svg.webp",
      width: 150,
      height: 75,
    },
    { name: "Fox News Channel", src: "/logo3.webp", width: 150, height: 75 },
    {
      name: "Indianapolis Tribune",
      src: "/indianapolistribune.svg",
      width: 200,
      height: 75,
    },
    {
      name: "The Indiana Times",
      src: "/indianatimes.svg",
      width: 200,
      height: 75,
    },
    { name: "MarketWatch", src: "/download.svg", width: 180, height: 75 },
    {
      name: "Fort Wayne's NBC",
      src: "/fortwaynesnbc.svg",
      width: 180,
      height: 75,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0: 100 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="w-full  rounded-[20px] drop-shadow-md mx-auto md:max-w-[1300px] bg-white py-8"
    >
      <div className="max-w-[1270px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-8">
        {/* Adjusted padding for mobile */}
        <h3
          className={`${plantinMTPro.variable} font-serif text-lg md:text-xl text-center text-primaryColor mb-4 md:mb-6`}
        >
          {/* Reduced font size */}
          Dr. Jeff's Expertise Recognized By
        </h3>
       
        <div className="md:flex hidden flex-wrap justify-center items-center gap-2 md:gap-4">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-center justify-center rounded-md transition-all duration-300 p-1 md:p-2"
              style={{
                width: `${logo.width * (isMobile ? 0.8 : 1)}px`,
                height: `${logo.height * (isMobile ? 0.8 : 1)}px`,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="transition-all duration-300 filter grayscale hover:grayscale-0 object-contain opacity-50 hover:opacity-100"
                  sizes="(max-width: 768px) 80px, 150px"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden mt-[12px] space-y-[10px] flex flex-col justify-center items-center">
          <Image alt="" src={LogosTop}/>
          <Image alt="" src={LogosBottom}/>
        </div>
      </div>
    </motion.section>
  );
};

export default RecognizedBy;
