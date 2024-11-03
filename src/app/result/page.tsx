import Hero from "@/components/ResultPage/hero";
import MeetDrJeff from "@/components/ResultPage/meetDrJeff";
import Satisfaction from "@/components/ResultPage/satisfaction";
import TestimonialSection from "@/components/ResultPage/testimonialSection";
import WhyTrustUs from "@/components/ResultPage/whyTrust";
import Footer from "@/components/SciaticaLandingPage/components/footer";
import TopBanner from "@/components/SciaticaLandingPage/components/topBanner";
import { sourceSansPro } from "@/fonts/fonts";
import React from "react";

const Result = () => {
  return (
    <main
      className={`min-h-screen mx-auto max-w-[2000px] bg-white text-[#1B365D] ${sourceSansPro.variable} font-sans`}
    >
      <TopBanner />
      <Hero />
      <WhyTrustUs />
      <MeetDrJeff/>
       <TestimonialSection />
    <Satisfaction/>
      <Footer/> 
    </main>
  );
};

export default Result;
