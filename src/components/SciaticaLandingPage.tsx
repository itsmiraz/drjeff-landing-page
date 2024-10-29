"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import { cn } from "../lib/utils";
import localFont from "next/font/local";
import { Source_Sans_Pro } from "next/font/google";
import Quiz from "./Quiz";
import PhoneIcon from "@/assets/icons/phoneIcon.svg";
import LocationIcon from "@/assets/icons/location.svg";
import BackgroundGraphic from "@/assets/images/desktop-bg-graphic.webp";
import UnderLineGraphic from "@/assets/icons/UnderlineGraphic.svg";


const plantinMTPro = localFont({
  src: [
    {
      path: "../fonts/PlantinMTPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PlantinMTPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-plantin-mt-pro",
});

const sourceSansPro = Source_Sans_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});

const buttonVariants = {
  default:
    "bg-[#D4AA4F] hover:bg-[#c29a45] text-white transition-all duration-300 shadow-md",
  rounded: "rounded-lg",
};

export default function SciaticaLandingPage() {
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

  const scrollToQuiz = () => {
    const quizElement = document.getElementById("quiz-section");
    if (quizElement) {
      quizElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen mx-auto max-w-[2000px] bg-white text-[#1B365D] ${sourceSansPro.variable} font-sans`}
    >
      {/* Top Banner */}
      <div className="w-full  text-[#F5F7F9] py-[2px]  bg-[#1B365D]">
        <div className="max-w-[1440px] flex justify-start gap-x-[10px] mx-auto">
          <div className="flex items-center gap-x-[4px]">
            <div>
              <PhoneIcon />{" "}
            </div>
            <p className="text-[12px] underline  leading-[16px] font-semibold font-sans">
              1-260-250-4303{" "}
            </p>
          </div>
          <div className="flex items-center gap-x-[4px]">
            <div>
              <LocationIcon />{" "}
            </div>
            <p className="text-[12px]   leading-[16px] font-semibold font-sans">
              {" "}
              Midwest Disc Clinic, Shipshewana{" "}
            </p>
          </div>
        </div>
      </div>

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

        {/* Make content relative to stay above background */}
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
              Suffering from Sciatica? <br/> Discover your path to relief in 60
              Seconds
            </h1>
            <div className="absolute right-10 top-28">
            <UnderLineGraphic/>
            </div>
            <p className="text-xl md:text-2xl mb-8 md:mb-16 max-w-[800px] mx-auto">
              Are shooting pains down your leg controlling your life? You're not
              alone. Thousands have found relief through our revolutionary
              approach.
            </p>

            {/* Mobile Arrow - Only show on mobile */}
            <div className="block md:hidden w-full flex justify-center mb-6">
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

          <div
            id="quiz-section"
            className="grid md:grid-cols-2 gap-4 md:gap-12 items-start mb-8 md:mb-8 px-4 md:px-0"
          >
            {/* Quiz Section */}
            <div className="flex flex-col md:order-2">
              <Quiz />
              <div className="text-center mt-3 mb-12">
                {" "}
                {/* Added mb-12 for more space before the next section */}
                <div className="text-[#1B365D] flex items-center justify-center space-x-2">
                  <p className="text-sm">⭐⭐⭐⭐⭐ 4.98</p>
                  <div className="flex items-center">
                    <Image
                      src="/google.svg"
                      alt="Google"
                      width={16}
                      height={16}
                      className="inline-block"
                    />
                    <span className="text-sm text-gray-600 ml-1">Reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Show second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative md:order-1"
            >
              <h2
                className={`${plantinMTPro.variable} font-serif text-lg md:text-xl font-bold mb-4`}
              >
                Take This Quick Quiz to Uncover Your Personalized Sciatica
                Solution
              </h2>
              <p className="text-lg md:text-xl mb-4">
                Answer 9 simple questions and:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Reveal the potential root cause of your sciatica",
                  "Learn if you're a candidate for our non-surgical DOSAE™ method",
                  "Get immediate tips to alleviate your pain (even before your first appointment!)",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      x: isVisible ? 0 : -20,
                    }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-[24px] h-[24px] bg-[#D4AA4F] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      <span className="flex items-center justify-center w-full h-full">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-base md:text-lg">
                      {item.includes("Reveal") && (
                        <span>
                          <span className="font-bold">Reveal</span> the
                          potential root cause of your sciatica
                        </span>
                      )}
                      {item.includes("Learn") && (
                        <span>
                          <span className="font-bold">Learn</span> if you're a
                          candidate for our non-surgical DOSAE™ method
                        </span>
                      )}
                      {item.includes("Get immediate tips") && (
                        <span>
                          <span className="font-bold">Get immediate tips</span>{" "}
                          to alleviate your pain (even before your first
                          appointment!)
                        </span>
                      )}
                    </span>
                  </motion.div>
                ))}

                {/* Desktop Arrow - Only show on desktop */}
                <div className="hidden md:block relative mt-8">
                  <motion.div
                    animate={{
                      x: [-5, 15, -5],
                      rotate: [-2, 0, -2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[-40px]"
                  >
                    <svg
                      width="120"
                      height="60"
                      viewBox="0 0 120 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 30c0 0 70 0 90 0M90 30c0 0-20-15-20-20M90 30c0 0-20 15-20 20"
                        stroke="#A65D57"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-full bg-[#7C9885] py-8"
      >
        <div className="max-w-[1270px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-8">
          {/* Adjusted padding for mobile */}
          <h3
            className={`${plantinMTPro.variable} font-serif text-lg md:text-xl text-center text-white mb-4 md:mb-6`}
          >
            {/* Reduced font size */}
            Dr. Jeff's Expertise Recognized By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
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
        </div>
      </motion.section>

      <section className="w-full bg-[#F5F7F9]">
        <div className="max-w-[1070px] mx-auto px-4 md:px-8 lg:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-16"
          >
            <h2
              className={`${plantinMTPro.variable} font-serif text-3xl font-bold text-center mb-8`}
            >
              Why This Quiz Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-full h-48 relative">
                  <Image
                    src="/drjeff.png"
                    alt="Dr. Jeff Garofalo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <CardContent className="p-6 pb-4">
                  <h3
                    className={`${plantinMTPro.variable} font-serif text-xl font-bold mb-2`}
                  >
                    Expert-Created
                  </h3>
                  <p className="text-sm md:text-base">
                    Developed by Dr. Jeff Garofalo, a spine specialist with over
                    22 years of experience in non-surgical sciatica treatment.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-full h-48 relative">
                  <Image
                    src="/consult.webp"
                    alt="Proven Results"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardContent className="p-6 pb-4">
                  <h3
                    className={`${plantinMTPro.variable} font-serif text-xl font-bold mb-2`}
                  >
                    Proven Results
                  </h3>
                  <p className="text-sm md:text-base">
                    Our approach has helped thousands of patients avoid risky
                    surgery and find lasting relief from sciatica pain.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-full h-48 relative">
                  <Image
                    src="/xrayanalysis.webp"
                    alt="Personalized Approach"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardContent className="p-6 pb-4">
                  <h3
                    className={`${plantinMTPro.variable} font-serif text-xl font-bold mb-2`}
                  >
                    Personalized Approach
                  </h3>
                  <p className="text-sm md:text-base">
                    Get a tailored treatment plan based on your unique symptoms,
                    history, and lifestyle factors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-white p-8 rounded-[1.5rem] shadow-lg mb-16"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-[60%] flex items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center mr-4 md:mr-6 relative overflow-hidden">
                  <Image
                    src="/patient.png"
                    alt="Patient Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote
                    className={`${plantinMTPro.variable} font-serif text-xl md:text-2xl font-bold italic text-[#1B365D] mb-2`}
                  >
                    "I went from barely walking to pain-free in weeks!"
                  </blockquote>
                  <p className="text-base md:text-lg text-[#7C9885]">
                    - Tony R., Actual Patient
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[40%] flex flex-col justify-center">
                <p className="text-lg mb-4">
                  Don't let sciatica control another day of your life. Take the
                  first step towards relief now.
                </p>
                <Button
                  onClick={scrollToQuiz}
                  className={cn(
                    "bg-[#D4AA4F] hover:bg-[#c29a45] text-white transition-all duration-300 shadow-md",
                    "rounded-[1rem]", // Smaller border radius
                    `${plantinMTPro.variable} font-serif w-full text-sm md:text-base py-4 min-h-[60px] leading-tight font-bold`
                  )}
                >
                  Yes, I Want My Personalized
                  <br />
                  Sciatica Solution!
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="text-center"
          >
            <p className="text-sm italic">
              P.S. After completing the quiz, you'll receive a FREE report: "5
              At-Home Techniques to Ease Sciatica Pain Tonight"
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#1B365D] text-white py-8">
        <div className="max-w-[1070px] mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dr. Jeff Garofalo. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
