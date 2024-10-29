import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { QuizQuestion, QuizState, SalesPageType } from './types/quiz';
import { quizQuestions } from './data/quizQuestions';
import { cn } from '../lib/utils';
import localFont from 'next/font/local';

const plantinMTPro = localFont({
  src: [
    {
      path: '../fonts/PlantinMTPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PlantinMTPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-plantin-mt-pro'
});

export default function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 1,
    answers: {},
    name: '',
    email: '',
    completed: false
  });

  const currentQuestion = quizQuestions.find(q => q.id === quizState.currentQuestion);
  const progress = ((quizState.currentQuestion - 1) / quizQuestions.length) * 100;

  const handleYesNo = (answer: boolean) => {
    setQuizState(prev => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentQuestion]: answer },
      currentQuestion: prev.currentQuestion + 1
    }));
  };

  const handleInput = (value: string) => {
    if (currentQuestion?.type === 'name') {
      setQuizState(prev => ({ ...prev, name: value }));
    } else if (currentQuestion?.type === 'email') {
      setQuizState(prev => ({ ...prev, email: value }));
    }
  };

  const handleSubmit = async () => {
    // Determine which sales page to show based on answers
    const salesPage: SalesPageType = determineSalesPage(quizState.answers);
    
    // Submit to email marketing tool
    await submitToEmailMarketing({
      name: quizState.name,
      email: quizState.email,
      answers: quizState.answers
    });

    // Redirect to appropriate sales page
    window.location.href = `/sales/${salesPage}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="bg-white p-8 md:p-10 rounded-[1.5rem] shadow-xl w-full flex flex-col justify-between relative overflow-hidden min-h-[350px] border border-[#7C9885] border-opacity-20"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-0 left-0 h-1.5 bg-[#7C9885] rounded-t-lg"
      />

      <div className="flex-1">
        <h3 className={`${plantinMTPro.variable} font-serif text-lg md:text-xl font-bold mb-4 text-center`}>
          Learn How to Eliminate Sciatica Without Surgery 👇
        </h3>
        
        {/* Added divider */}
        <div className="w-full h-[1px] bg-[#7C9885] opacity-20 mb-6" />

        <p className="text-lg md:text-xl mb-8 text-gray-700">
          <span className="font-bold mr-2">{currentQuestion?.id}.</span>
          {currentQuestion?.text}
        </p>

        {currentQuestion?.type === 'yes-no' && (
          <div className="flex space-x-4 mb-8">
            <Button 
              onClick={() => handleYesNo(true)}
              className="w-full bg-[#D4AA4F] hover:bg-[#c29a45] text-white font-bold text-lg rounded-[1rem]"
            >
              Yes
            </Button>
            <Button 
              onClick={() => handleYesNo(false)}
              className="w-full bg-[#D4AA4F] hover:bg-[#c29a45] text-white font-bold text-lg rounded-[1rem]"
            >
              No
            </Button>
          </div>
        )}

        {/* Input fields and buttons section */}
        {(currentQuestion?.type === 'name' || currentQuestion?.type === 'email') && (
          <div className="space-y-4 mb-8">
            <Input
              type={currentQuestion.type === 'email' ? 'email' : 'text'}
              placeholder={currentQuestion.type === 'email' ? 'Your email address' : 'Your name'}
              value={currentQuestion.type === 'email' ? quizState.email : quizState.name}
              onChange={(e) => handleInput(e.target.value)}
              className={`w-full rounded-[1rem] ${plantinMTPro.variable} font-serif`}
            />
            <Button 
              onClick={() => setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }))}
              disabled={
                (currentQuestion.type === 'email' && !quizState.email) ||
                (currentQuestion.type === 'name' && !quizState.name)
              }
              className="w-full bg-[#D4AA4F] hover:bg-[#c29a45] text-white font-bold text-lg rounded-[1rem]"
            >
              {currentQuestion.type === 'email' ? 'Send me the results' : 'Continue'}
            </Button>
          </div>
        )}

        {/* Go Back button and Progress bar */}
        <div className="w-full space-y-4">
          {quizState.currentQuestion > 1 && (
            <button
              onClick={() => setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }))}
              className="flex items-center text-sm text-gray-500 hover:text-[#7C9885] transition-colors mb-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Go Back
            </button>
          )}
          
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#7C9885] rounded-full"
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-center text-gray-600">{Math.round(progress)}% Complete</p>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to determine sales page
function determineSalesPage(answers: Record<number, boolean>): SalesPageType {
  // Add your logic here to determine which sales page to show
  // Example: if they answered yes to question 1 and no to question 2, show 'acute'
  return 'acute';
}

// Helper function to submit to email marketing
async function submitToEmailMarketing(data: {
  name: string;
  email: string;
  answers: Record<number, boolean>;
}) {
  // Add your email marketing submission logic here
  // Example: API call to your email marketing tool
}

