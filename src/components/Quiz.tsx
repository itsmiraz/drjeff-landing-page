import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { QuizQuestion, QuizState,  } from "./types/quiz";
import { quizQuestions } from "./data/quizQuestions";
import { cn } from "../lib/utils";
import localFont from "next/font/local";
import RightFillArrow from "@/assets/icons/RightFillArrow.svg";
import LineGraphic from "@/assets/icons/LineGraphic.svg";
import Star from "@/assets/icons/Star.svg";
import Google from "@/assets/icons/Google.svg";


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

interface EnhancedQuizState extends QuizState {
  score: number;
}

export default function Quiz() {
  const [quizState, setQuizState] = useState<EnhancedQuizState>({
    currentQuestion: 1,
    answers: {},
    name: "",
    email: "",
    completed: false,
    score: 0,
  });

  const currentQuestion = quizQuestions.find(
    (q) => q.id === quizState.currentQuestion
  );
  const progress =
    ((quizState.currentQuestion - 1) / quizQuestions.length) * 100;

  const calculateScore = (answer: boolean, questionId: number): number => {
    // Add your scoring logic here based on the specific questions
    // Example: Each "Yes" adds 1 point, each "No" adds 0 points
    return answer ? 1 : 0;
  };

  const handleYesNo = (answer: boolean) => {
    const additionalScore = calculateScore(answer, quizState.currentQuestion);
    
    setQuizState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentQuestion]: answer },
      currentQuestion: prev.currentQuestion + 1,
      score: prev.score + additionalScore,
    }));
  };

  const handleInput = (value: string) => {
    if (currentQuestion?.type === "name") {
      setQuizState((prev) => ({ ...prev, name: value }));
    } else if (currentQuestion?.type === "email") {
      setQuizState((prev) => ({ ...prev, email: value }));
    }
  };

  const handleSubmit = async () => {
    // Submit to email marketing tool
    await submitToEmailMarketing({
      name: quizState.name,
      email: quizState.email,
      answers: quizState.answers,
      score: quizState.score,
    });

    localStorage.setItem('quizResults', JSON.stringify(quizState.score));
    // Redirect based on score
    const redirectPath = determineSalesPage(quizState.score);
    window.location.href = `/sales/${redirectPath}`;
  };

  return (
    <div className="bg-primaryColor shadow-xl p-0 rounded-[40px]">
      <motion.div className="bg-[#FFFFFF] rounded-[40px] pt-[43px] px-[25px] pb-[20px]">
        <div className="space-y-[9px] pb-[9px]">
          <h3
            className={`${plantinMTPro.variable} text-center leading-[34px] font-serif font-bold text-[24px] text-primaryColor`}
          >
            Learn how to eliminate sciatica without surgery
          </h3>
          <LineGraphic />
        </div>

        <p className="text-[18px] md:text-[18px] leading-[24px] font-semibold mb-8 text-primaryColor">
          <span className="mr-1">{currentQuestion?.id}.</span>
          {currentQuestion?.text}
        </p>

        {currentQuestion?.type === "yes-no" && (
          <div className="flex space-x-4 mb-8">
            <Button
              onClick={() => handleYesNo(true)}
              className="w-full md:h-[50px] bg-[#D4AA4F] hover:bg-[#c29a45] leading-[24px] text-white px-[50px] md:px-[69px] py-[12px] font-bold text-[16px] rounded-full"
            >
              Yes
            </Button>
            <Button
              onClick={() => handleYesNo(false)}
              className="w-full md:h-[50px] bg-[#F5F7F9] hover:bg-[#e6e6e6] leading-[24px] text-primaryColor px-[50px] md:px-[69px] py-[12px] font-bold text-[16px] rounded-full"
            >
              No
            </Button>
          </div>
        )}

        {(currentQuestion?.type === "name" ||
          currentQuestion?.type === "email") && (
          <div className="space-y-4 mb-8">
            <Input
              type={currentQuestion.type === "email" ? "email" : "text"}
              placeholder={
                currentQuestion.type === "email"
                  ? "Your email address"
                  : "Your name"
              }
              value={
                currentQuestion.type === "email"
                  ? quizState.email
                  : quizState.name
              }
              onChange={(e) => handleInput(e.target.value)}
              className={`w-full rounded-full ${plantinMTPro.variable} font-serif`}
            />
            <Button
              onClick={currentQuestion.type === "email" ? handleSubmit : () =>
                setQuizState((prev) => ({
                  ...prev,
                  currentQuestion: prev.currentQuestion + 1,
                }))
              }
              disabled={
                (currentQuestion.type === "email" && !quizState.email) ||
                (currentQuestion.type === "name" && !quizState.name)
              }
              className="w-full whitespace-nowrap md:h-[50px] bg-[#D4AA4F] hover:bg-[#c29a45] leading-[24px] text-white px-[69px] py-[12px] font-bold text-[16px] rounded-full"
            >
              {currentQuestion.type === "email"
                ? "Send me the results"
                : "Continue"}
            </Button>
          </div>
        )}

        <div className="w-full space-y-[5px]">
          <p className="text-sm font-sourceSansPro font-semibold text-primaryColor">
            {Math.round(progress)}% Complete
          </p>
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#7C9885] rounded-full"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="flex mt-[30px] justify-center items-center">
          {quizState.currentQuestion > 1 && (
            <button
              onClick={() =>
                setQuizState((prev) => ({
                  ...prev,
                  currentQuestion: prev.currentQuestion - 1,
                  // Subtract the score for the previous answer when going back
                  score: prev.score - (prev.answers[prev.currentQuestion - 1] ? 1 : 0),
                }))
              }
              className="flex gap-x-[6px] items-center text-[12px] font-semibold text-[#1B365D] hover:text-[#152b49] transition-colors mb-2"
            >
              <RightFillArrow />
              Go Back
            </button>
          )}
        </div>
      </motion.div>
      <div className="flex gap-x-[4px] justify-center text-white py-[14px] items-center">
        <div className="flex gap-x-[4px]">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="text-[16px] font-semibold font-sourceSansPro text-white">4.98</p>
        <Google />
        <p className="text-[16px] font-semibold font-sourceSansPro text-white">Reviews</p>
      </div>
    </div>
  );
}

// Helper function to determine sales page based on score
function determineSalesPage(score: number) {
  // Redirect based on score ranges
  if (score >= 1 && score <= 5) {
    return "product";
  } else if (score >= 6 && score <= 10) {
    return "cta";
  } else {
    // Default fallback
    return "product";
  }
}

// Helper function to submit to email marketing
async function submitToEmailMarketing(data: {
  name: string;
  email: string;
  answers: Record<number, boolean>;
  score: number;
}) {
  // Add your email marketing submission logic here
  // Example: API call to your email marketing tool
  // Now includes the score in the submission
}