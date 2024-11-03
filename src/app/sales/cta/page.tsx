import Footer from "@/components/SciaticaLandingPage/components/footer";
import TopBanner from "@/components/SciaticaLandingPage/components/topBanner";
import CTA from "@/components/salesCta/cta";
import Faq from "@/components/salesCta/faq";
import SalesCtaHero from "@/components/salesCta/hero";
import UrgentHero from "@/components/salesCta/hero";
import Satisfaction from "@/components/salesCta/satisfaction";
import StateMent from "@/components/salesCta/stateMent";
import SuccessStory from "@/components/salesCta/successStory";
import Testimonials from "@/components/salesCta/testimonials";
import WhyChoose from "@/components/salesCta/whychoose";
import { sourceSansPro } from "@/fonts/fonts";
import React from "react";

const Urgent = () => {
  return (
    <main
      className={`min-h-screen mx-auto max-w-[2000px] bg-white text-[#1B365D] ${sourceSansPro.variable} font-sans`}
    >
      <TopBanner />
      <SalesCtaHero />
      <Testimonials />
      <WhyChoose />
      <Satisfaction />
      <SuccessStory />
      <StateMent />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
};

export default Urgent;
