import { plantinMTPro } from "@/fonts/fonts";
import Image from "next/image";
import React from "react";
import StarterKitImage from "@/assets/images/starterKit.png";
import LineGraphic from "@/assets/icons/LineGraphicLarge.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
const Hero = () => {
  return (
    <div>
      <main className="flex overflow-hidden flex-col rounded-none">
        <section className="flex relative flex-col items-center px-16 pt-0.5 pb-36 w-full min-h-[842px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8ac0bf40a57f8d0586fbde61d9247fe2d8ed263508dcade06bfa2af319bff2?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mb-0 max-w-full w-full md:w-[1149px] ">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                  {/* <Header /> */}
                  <h1
                    className={`${plantinMTPro.variable} font-serif  mt-[60px] md:mt-20 text-[40px] leading-[46px] md:text-5xl font-bold md:leading-[60px] text-primaryColor`}
                  >
                    Ease your sciatica pain at home: Your personalized relief
                    plan.
                  </h1>
                  <p className="mt-[17px] font-sourceSansPro text-xl leading-7 text-[#1B365D] max-md:max-w-full">
                    Discover how to manage your mild to moderate sciatica
                    symptoms without expensive treatments or risky procedures.
                  </p>
                <div className="md:block hidden">
                <QuizResults />
                </div>
                </div>
              </div>
              <StarterKit />
            </div>
            <div className="block md:hidden">
                <QuizResults />
                </div>
          </div>
          
        </section>

      </main>
    </div>
  );
};

export default Hero;

const QuizResults = () => {
  return (
    <>
      <section className="flex flex-col px-[35px] py-[40px] mt-[50px] max-w-full bg-white border-2 border-solid border-gray-500 border-opacity-20 rounded-[40px] startKitShadow w-[413px] max-md:px-5 max-md:mt-10">
        <h2 className="self-center font-sourceSansPro text-4xl font-bold leading-none text-center text-[#7C9885]">
          Your quiz results
        </h2>
        <div className="flex flex-col items-start mt-7 bg-slate-100 rounded-[100px] max-md:pr-5">
          <div className="flex shrink-0 h-2.5 bg-[#7C9885] rounded-[100px_0px_0px_100px] w-[85px]" />
        </div>
        <p className="self-center  font-sourceSansPro  mt-5 text-2xl font-bold leading-none text-center text-[#D4AA4F]">
          Score: 4/10
        </p>
        <p className="mt-5 mr-5  font-sourceSansPro text-lg leading-6 text-[#1B365D] max-md:mr-2.5">
          Good news! Your sciatica symptoms are mild to moderate. With the right
          approach, you can significantly reduce your discomfort and prevent it
          from worsening. Here's how:
        </p>
      </section>
    </>
  );
};

const StarterKit = () => {
  return (
    <aside className="flex mt-20 max-w-[414px] flex-col ml-5  max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden rounded-[40px] relative px-[20px] py-[30px] md:p-[30px] bg-white startKitShadow flex-col w-full font-bold max-md:mt-10">
        <div className="flex gap-[5px] md:items-center items-start md:gap-[15px] justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-plantinMTpro font-serif  leading-[26px] md:leading-8 text-[#1B365D]">
              Introducing the "Sciatica relief starter kit"
            </h2>
            <div className="flex gap-[11px] self-start items-center mt-5 leading-none whitespace-nowrap">
              <span className="text-2xl  font-sourceSansPro line-through text-[#A65D57]">
                $27
              </span>
              <span className="text-4xl font-sourceSansPro  text-[#D4AA4F]">
                $19
              </span>
            </div>
          </div>
          <Image
            loading="lazy"
            src={StarterKitImage}
            alt="Sciatica relief starter kit"
            className="object-contain shrink-0 w-36 max-w-full rounded-none aspect-[1.11]"
          />
        </div>
      <div className="md:w-full w-[297px] overflow-hidden">
      <LineGraphic />
      </div>

        <h3 className="self-start mt-2 underline text-lg leading-none text-[#7C9885]">
          What's inside:
        </h3>
        <ul className="self-start font-normal font-sourceSansPro mt-5 text-base leading-7 text-blue-950 list-none pl-0">
          <li>
            <span className="font-bold">1. "Sciatica SOS" PDF Guide:</span>{" "}
            Learn the exact techniques Dr. Jeff uses to help patients find
            immediate relief
          </li>
          <li>
            <span className="font-bold">2. 30-minute Video Tutorial:</span>{" "}
            Watch Dr. Jeff demonstrate proper stretches and exercises
          </li>
          <li>
            <span className="font-bold">3. 30-day Pain Tracking Journal:</span>{" "}
            Monitor your progress and identify triggers
          </li>
          <li>
            <span className="font-bold">4. Bonus:</span> "5 Foods That Fight
            Inflammation" mini-guide
          </li>
        </ul>
        <button className="flex leading-[24px] gap-3 px-16 py-[13px] mt-10 text-sm  items-center text-center text-white bg-[#D4AA4F] rounded-[100px] max-md:px-5 max-md:mt-10">
          <span className="grow">Get instant access for Just $19</span>
          <span>
            <LeftArrow />
          </span>
        </button>
      </div>
    </aside>
  );
};
