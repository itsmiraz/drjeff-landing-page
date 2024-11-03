import { plantinMTPro } from "@/fonts/fonts";
import Image from "next/image";
import React from "react";
import StarterKitImage from "@/assets/images/urgent-starterkit.png";
import LineGraphic from "@/assets/icons/LineGraphicLarge.svg";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import UnderLine from "@/assets/icons/RoundedUnderLine.svg";

import LeftArrowCustom from "@/assets/icons/LeftArrowCustom.svg";
const UrgentHero = () => {
  return (
    <div>
      <main className="flex flex-col rounded-none">
        <section className="flex relative flex-col items-center px-16 pt-0.5 pb-36 w-full min-h-[842px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8ac0bf40a57f8d0586fbde61d9247fe2d8ed263508dcade06bfa2af319bff2?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mb-0 max-w-full w-[1149px] max-md:mb-2.5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                  {/* <Header /> */}
                  <h1
                    className={`${plantinMTPro.variable} font-serif self-stretch mt-20 text-5xl font-bold leading-[60px] text-blue-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]`}
                  >
                    <span className="text-[#A65D57] pb-1 relative inline-block">
                      {" "}
                      Urgent:
                      <span className="absolute left-0 -bottom-3">
                        {" "}
                        <UnderLine />
                      </span>
                    </span>{" "}
                    Your sciatica <br /> needs immediate <br /> attention
                  </h1>
                  <p className="mt-[17px] font-sourceSansPro text-xl leading-7 text-[#1B365D] max-md:max-w-full">
                    Don't let another day of severe pain control your life. Our
                    revolutionary DOSAE™ method can help - without surgery.
                  </p>
                  <QuizResults />
                </div>
              </div>
              <StarterKit />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UrgentHero;

const QuizResults = () => {
  return (
    <>
      <section className="flex flex-col pl-[30px] py-[40px] mt-[50px] max-w-full bg-white border-2 border-solid border-gray-500 border-opacity-20 rounded-[40px] startKitShadow w-[413px] max-md:px-5 max-md:mt-10">
        <h2 className="self-center pr-[30px] font-sourceSansPro text-4xl font-bold leading-none text-center text-[#7C9885]">
          Your quiz results
        </h2>
       <div className="pr-[30px]">
       <div className="flex flex-col items-start mt-7 bg-slate-100 rounded-[100px] max-md:pr-5">
          <div className="flex shrink-0 h-2.5 bg-[#7C9885] rounded-[100px_0px_0px_100px] w-[85px]" />
        </div>
       </div>
        <p className="self-center pr-[30px]  font-sourceSansPro  mt-5 text-2xl font-bold leading-none text-center text-[#D4AA4F]">
          Score: 6/10
        </p>
        <p className="mt-5 mr-5  font-sourceSansPro text-lg leading-6 text-[#1B365D] max-md:mr-2.5">
          Your sciatica score indicates severe symptoms that require prompt,
          expert care. You're at risk of long-term nerve damage if left
          untreated.
        </p>
      </section>
    </>
  );
};

const StarterKit = () => {
  return (
    <aside className="flex mt-20 max-w-[414px] flex-col ml-5  max-md:ml-0 max-md:w-full">
      <div className="flex rounded-[40px] relative p-[30px] bg-white startKitShadow flex-col w-full font-bold max-md:mt-10">
        <div className="flex gap-[15px] pb-[20px] justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-plantinMTpro font-serif  leading-[30px] text-[#1B365D]">
              Your severe sciatica needs
            </h2>
            <p className="font-plantinMTpro mt-1 font-serif font-bold text-[22px] text-[#A65D57] px-[10px] py-[6px] bg-[#A65D57]/10 rounded-[4px]">
              Attention Now
            </p>
          </div>
          <Image
            loading="lazy"
            src={StarterKitImage}
            alt="Sciatica relief starter kit"
            className="object-contain shrink-0 max-w-full rounded-none aspect-[1.11]"
          />
        </div>
        <LineGraphic />

        <h3 className="self-start mt-[20px] underline text-lg leading-none text-[#7C9885]">
          The DOSAE™ Method:
        </h3>

        <ul className="mt-[10px]">
          <li>
            <p className="text-[#1B365D]  font-normal font-sourceSansPro text-[16px]">
              ✓ 90% Success Rate, Zero Surgery
            </p>
          </li>
          <li>
            <p className="text-[#1B365D] font-normal  font-sourceSansPro text-[16px]">
              ✓ Same-Week Relief Possible
            </p>
          </li>
          <li>
            <p className="text-[#1B365D]  font-normal font-sourceSansPro text-[16px]">
              ✓ Personalized Treatment Plan
            </p>
          </li>
        </ul>

        <div className="border mt-[20px] rounded-[20px] py-[14px] px-[32px] border-dashed border-[#A65D57] bg-[#F5F7F9]">
          <p className="text-primaryColor font-semibold font-sourceSansPro">
            🔥 Limited Emergency Slots This Week
          </p>
          <p className="text-primaryColor font-semibold font-sourceSansPro">
            ⭐ $100 Off First Visit - Expires Soon
          </p>
        </div>
        <div className="flex gap-x-3 mt-[55px] items-center">
          <button className="flex h-fit whitespace-nowrap leading-[24px] items-center gap-2 px-3 py-[13px]  text-center text-white bg-[#D4AA4F] text-[14px] rounded-[100px] ">
            <span className="grow">Book priority consultation</span>
            <span className="mt-1">
              <LeftArrow />
            </span>
          </button>
          <button className="flex h-fit whitespace-nowrap leading-[24px]  items-center gap-2 px-3 py-[13px]    text-center text-[#1B365D] bg-[#F5F7F9] text-[14px] rounded-[100px] ">
            <span className="grow">Have us call you</span>
            <span className="mt-1">
              <LeftArrowCustom />
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};
