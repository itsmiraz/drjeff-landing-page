import HandIcon from "@/assets/icons/handIcon.svg";
import DrJeff from "@/assets/images/dr-jeff-card.png";
import Image from "next/image";
const MeetDrJeff = () => {
  const data = [
    "22+ years of dedicated spine care experience",
    "Advanced training in Spinal Biomechanical Engineering",
    "Specialized in non-surgical disc treatments",
    "Creator of the revolutionary DOSAE™ method",
    `Author of "Never Look Back - A Simple Guide to the Causes and Care for Back Pain"`,
    "Helped thousands avoid risky surgeries and regain their lives",
  ];
  return (
    <div className="md:py-[150px] flex justify-center items-center">
      <div className="max-w-[1077px] gap-y-[20px] gap-x-[130px] flex md:flex-row flex-col justify-between items-center mx-auto py-[43px] px-[30px] md:px-[40px] rounded-[40px] bg-[#F5F7F9]">
        <div className="w-full  md:w-[50%]">
          <p className="font-plantinMTpro font-serif text-[20px] text-primaryColor font-bold ">Meet Your Sciatica Expert:</p>
          <h3 className="font-plantinMTpro font-serif text-[34px] md:text-[40px] text-primaryColor font-bold">Dr. Jeff Garofalo</h3>

          <ul className="space-y-[10px] mt-[23px]">
            {data.map((item, i) => (
              <li className="flex items-start gap-x-[11px] ">
               <div className="mt-1">
               <HandIcon />
               </div>
                 
                <p className="text-[16px] md:text-lg leading-[18px] font-sourceSansPro text-primaryColor">{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-base md:block hidden mt-[89px] font-sourceSansPro text-primaryColor ">
            Dr. Jeff's unique approach combines cutting-edge technology with a
            deep understanding of spinal mechanics. His expertise in advanced
            MRI analysis allows for precise diagnosis and targeted treatment
            plans, even for complex cases.
          </p>
        </div>
        <div className="relative  w-full md:w-[373px]">
          <Image src={DrJeff} className="w-full h-full" alt="" />
          <p className="text-base block md:hidden mt-[20px] font-sourceSansPro text-primaryColor ">
            Dr. Jeff's unique approach combines cutting-edge technology with a
            deep understanding of spinal mechanics. His expertise in advanced
            MRI analysis allows for precise diagnosis and targeted treatment
            plans, even for complex cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetDrJeff;
