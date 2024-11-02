import Hero from '@/components/ResultPage/components/hero'
import TestimonialSection from '@/components/ResultPage/components/testimonialSection'
import TopBanner from '@/components/SciaticaLandingPage/components/topBanner'
import { sourceSansPro } from '@/fonts/fonts'
import React from 'react'

const Result = () => {
  return (
    <main className={`min-h-screen mx-auto max-w-[2000px] bg-white text-[#1B365D] ${sourceSansPro.variable} font-sans`}>
<TopBanner/>
<Hero />
<TestimonialSection/>
    </main>

  )
}

export default Result