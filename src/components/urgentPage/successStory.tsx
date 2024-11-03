import PatientBefore from "@/assets/images/patient-before.png";
import PatientAfter from "@/assets/images/patient-after.png";
import Image from "next/image";

const SuccessStory = () => {
  return (
    <div className="pt-[20px] pb-[150px]">
      <h2 className="font-bold leading-[44px] text-center text-primaryColor text-[34px]">
        "I was skeptical after years of failed treatments. <br /> DOSAE™ gave me
        my life back!"
      </h2>
      <p className="text-[18px] pt-[11px] text-[#7C9885] text-center font-bold  font-sourceSansPro">
        - Lisa R., Actual Patient
      </p>
      <div className="flex justify-center pt-[40px]  items-center gap-[32px] ">
        <Image src={PatientBefore} alt="" />
        <Image src={PatientAfter} alt="" />
      </div>
    </div>
  );
};

export default SuccessStory;
