"use client";

import React from "react";

import TopBanner from "./components/topBanner";
import { sourceSansPro } from "@/fonts/fonts";
import Hero from "./components/hero";
import RecognizedBy from "./components/recognizedBy";
import WhyQuizMatters from "./components/whyQuizMatters";
import Footer from "./components/footer";

export default function SciaticaLandingPage() {
  return (
    <div
      className={`min-h-screen mx-auto max-w-[2000px] bg-white text-[#1B365D] ${sourceSansPro.variable} font-sans`}
    >
      <TopBanner />
      <Hero />
     <RecognizedBy />
   <WhyQuizMatters />
      <Footer /> 
    </div>
  );
}
