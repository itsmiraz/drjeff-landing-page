import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { plantinMTPro } from '@/fonts/fonts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const WhyQuizMatters = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      setIsVisible(true);
      // Handle window width
      const handleResize = () => {
        // setIsMobile(window.innerWidth < 768);
      };
  
      // Set initial value
      handleResize();
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const scrollToQuiz = () => {
      const quizElement = document.getElementById("quiz-section");
      if (quizElement) {
        quizElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
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

  )
}

export default WhyQuizMatters