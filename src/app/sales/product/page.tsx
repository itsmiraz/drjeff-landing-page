import Hero from "@/components/salesProduct/hero";
import MeetDrJeff from "@/components/salesProduct/meetDrJeff";
import Satisfaction from "@/components/salesProduct/satisfaction";
import TestimonialSection from "@/components/salesProduct/testimonialSection";
import WhyTrustUs from "@/components/salesProduct/whyTrust";
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
      <MeetDrJeff />
      <TestimonialSection />
      <Satisfaction />
      <Footer />
    </main>
  );
};

export default Result;
