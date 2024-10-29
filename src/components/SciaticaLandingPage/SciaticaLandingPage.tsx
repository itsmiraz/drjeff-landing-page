"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { cn } from "../../lib/utils";
import localFont from "next/font/local";
import { Source_Sans_Pro } from "next/font/google";
import Quiz from "../Quiz";

import TopBanner from "./components/topBanner";
import { plantinMTPro, sourceSansPro } from "@/fonts/fonts";
import Hero from "./components/hero";

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
      <TopBanner />
      <Hero />

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
