import Footer from "@/components/SciaticaLandingPage/components/footer";
import TopBanner from "@/components/SciaticaLandingPage/components/topBanner";
import CTA from "@/components/urgentPage/cta";
import Faq from "@/components/urgentPage/faq";
import UrgentHero from "@/components/urgentPage/hero";
import Satisfaction from "@/components/urgentPage/satisfaction";
import StateMent from "@/components/urgentPage/stateMent";
import SuccessStory from "@/components/urgentPage/successStory";
import Testimonials from "@/components/urgentPage/testimonials";
import WhyChoose from "@/components/urgentPage/whychoose";
import { sourceSansPro } from "@/fonts/fonts";
import React from "react";

const Urgent = () => {
  return (
    <main
      className={`min-h-screen mx-auto max-w-[2000px] bg-white text-[#1B365D] ${sourceSansPro.variable} font-sans`}
    >
      <TopBanner />
      <UrgentHero />
      {/* <Testimonials/>
      <WhyChoose/>
      <Satisfaction/>
      <SuccessStory/>
      <StateMent/>
      <Faq/>
      <CTA/>
      <Footer/> */}
    </main>
  );
};

export default Urgent;
