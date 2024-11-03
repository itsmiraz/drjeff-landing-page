import React from "react";
import PlayIcon from "@/assets/icons/VideoPlayIcon.svg";
import BrownUnderline from "@/assets/icons/BrownUnderLine.svg";

const Testimonials = () => {
  const testimonials = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/da67b3182f2d4153722dd91bfaf2502c6f1fddc3944e4fca8d890731b0d15c82?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      quoteSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc3a461bc82001c60a2755d4cac3184aa6056a22ff6824e829bec713c57bd9d3?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      quote: "From wheelchair to walking in 8 weeks!",
      name: "John D., Verified Patient",
      description:
        "Tony once lived dictated by severe sciatic pain, which made even simple postures a calculated struggle. Despite exploring numerous treatments from yoga to chiropractic care, relief was fleeting—until he visited Dr. Jeff at the Midwest Disc Clinic.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ba2003c521a96240398431d8cca9e3ac0450ec25c9849631268d8b4319d1996e?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      quoteSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6164c396eef0aa259d9ec52270626fdef391f7a092a36fb9caed59b94f8eb06?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      quote:
        "I thought I'd have to live with the pain forever. Dr. Jeff's techniques changed everything!",
      name: "Meet:  TJ",
      description:
        "Previously suffering from severe pain and discomfort, which left him hunched and despondent, TJ felt trapped by his condition. After numerous unsuccessful visits to chiropractors, he was skeptical about trying another treatment.",
    },
  ];

  const reviews = [
    {
      text: "Streamlines operations in our thriving team of 32+ people. Its blend of simplicity and data-driven insights are invaluable as we scale and grow keeps everything streamlined and running smoothly for our agency in one",
      logoSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/63f2ad6284ee8896f2385e7855c52db88fca75cded86a911f7233550cc69323a?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee904eb3b685bc9c5ad4ba1ac62afdb14099706c05ce59eb2b8554020fcd580?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      name: "Diana Mancía",
      position: "Product Designer at Ravn",
      ratingSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae85313704ce9869460712b8b849ad81f9fc45079c9a2b477430c9f059557e8?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
    },
    {
      text: "Streamlines operations in our thriving team of 32+ people. Its blend of simplicity and data-driven insights are invaluable as we scale and grow keeps everything streamlined and running smoothly for our agency in one",
      logoSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/63f2ad6284ee8896f2385e7855c52db88fca75cded86a911f7233550cc69323a?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee904eb3b685bc9c5ad4ba1ac62afdb14099706c05ce59eb2b8554020fcd580?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      name: "Diana Mancía",
      position: "Product Designer at Ravn",
      ratingSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae85313704ce9869460712b8b849ad81f9fc45079c9a2b477430c9f059557e8?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
    },
    {
      text: "Streamlines operations in our thriving team of 32+ people. Its blend of simplicity and data-driven insights are invaluable as we scale and grow keeps everything streamlined and running smoothly for our agency in one",
      logoSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/63f2ad6284ee8896f2385e7855c52db88fca75cded86a911f7233550cc69323a?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee904eb3b685bc9c5ad4ba1ac62afdb14099706c05ce59eb2b8554020fcd580?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
      name: "Diana Mancía",
      position: "Product Designer at Ravn",
      ratingSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae85313704ce9869460712b8b849ad81f9fc45079c9a2b477430c9f059557e8?placeholderIfAbsent=true&apiKey=0677bc850b87458aa18c31a8695d609c",
    },
  ];

  return (
    <div className="bg-primaryColor pb-[60px] pt-[80px]">
      <div className="max-w-[1078px] mx-auto">
        <section
          data-layername="testimonials"
          className="flex flex-col rounded-none"
        >
          <h2
            data-layername="lifeChangedPainRelievedHearOurPatientsStories"
            className="z-10 self-center font-plantinMTpro font-serif text-4xl font-bold leading-none text-center text-white max-md:max-w-full"
          >
            Life changed, Pain relieved: Hear our patient's stories
          </h2>
          <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-[30px] max-md:flex-col">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
          <div className="mt-8 w-full max-md:max-w-full">
            <div className="flex gap-[30px] max-md:flex-col">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="mt-[50px]">
        <p className="font-sourceSansPro  text-white text-center font-bold text-2xl ">
          Trusted by{" "}
          <span className="text-[#D4AA4F] relative inline-block">
            1,000+
            <span>
              <BrownUnderline />
            </span>
          </span>{" "}
          Pain-Free Patients
        </p>
      </div>
    </div>
  );
};

export default Testimonials;

interface TestimonialCardProps {
  imageSrc: string;
  quoteSrc: string;
  quote: string;
  name: string;
  description: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quoteSrc,
  quote,
  name,
  description,
}) => {
  return (
    <article
      data-layername="column"
      className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
    >
      <div
        data-layername="bg"
        className="flex flex-col grow pb-10 w-full bg-white rounded-[40px] shadow-[0px_30px_60px_rgba(189,189,189,0.16)] max-md:mt-8 max-md:max-w-full"
      >
        <div className="flex relative flex-col items-start px-4 pt-40 pb-4 w-full rounded-none min-h-[240px] max-md:pt-24 max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />

          <div className="absolute left-4 bottom-4">
            <PlayIcon />
          </div>

          {/* <img loading="lazy" src={quoteSrc} alt="Quote icon" className="object-contain aspect-square w-[58px]" /> */}
        </div>
        <div className="flex flex-col px-5 mt-5 text-base text-blue-950 max-md:max-w-full">
          <blockquote className="text-xl font-plantinMTpro font-serif font-semibold leading-7 max-md:mr-2 max-md:max-w-full">
            {quote}
          </blockquote>
          <p
            data-layername="meetSarahM"
            className="self-start underline mt-[20px] font-bold text-[#7C9885]"
          >
            {name}
          </p>
          <p className="mt-[10px] font-normal font-sourceSansPro text-primaryColor leading-[26px] max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
interface ReviewCardProps {
  text: string;
  logoSrc: string;
  avatarSrc: string;
  name: string;
  position: string;
  ratingSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  logoSrc,
  avatarSrc,
  name,
  position,
  ratingSrc,
}) => {
  return (
    <article
      data-layername="column"
      className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
    >
      <div className="flex flex-col p-6 mx-auto w-full bg-white rounded-[40px] shadow-[0px_30px_60px_rgba(189,189,189,0.16)] max-md:px-5 max-md:mt-7">
        <p
          data-layername="streamlinesOperationsInOurThrivingTeamOf32PeopleItsBlendOfSimplicityAndDataDrivenInsightsAreInvaluableAsWeScaleAndGrowKeepsEverythingStreamlinedAndRunningSmoothlyForOurAgencyInOne"
          className="text-base leading-7 text-blue-950 max-md:mr-1"
        >
          {text}
        </p>
        <img
          loading="lazy"
          src={logoSrc}
          alt="Company logo"
          className="object-contain mt-14 max-w-full aspect-[6.8] w-[109px] max-md:mt-10"
        />
        <div className="flex gap-5 justify-between mt-6 text-xs">
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src={avatarSrc}
              alt={`${name}'s avatar`}
              className="object-contain shrink-0 w-10 rounded-full aspect-square"
            />
            <div className="flex flex-col self-start">
              <p
                data-layername="dianaMancia"
                className="self-start font-bold rotate-[-1.3877787807814457e-17rad] text-blue-950"
              >
                {name}
              </p>
              <p
                data-layername="productDesignerAtRavn"
                className="mt-1.5 font-semibold text-gray-500 rotate-[-1.3877787807814457e-17rad]"
              >
                {position}
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src={ratingSrc}
            alt="Rating"
            className="object-contain shrink-0 my-auto aspect-[2.31] w-[74px]"
          />
        </div>
      </div>
    </article>
  );
};
