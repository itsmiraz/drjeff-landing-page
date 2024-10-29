import PhoneIcon from "@/assets/icons/phoneIcon.svg";
import LocationIcon from "@/assets/icons/location.svg";

const TopBanner = () => {
  return (
    <div className="w-full  text-[#F5F7F9] py-[2px]  bg-[#1B365D]">
    <div className="max-w-[1440px] flex justify-start gap-x-[10px] mx-auto">
      <div className="flex items-center gap-x-[4px]">
        <div>
          <PhoneIcon />{" "}
        </div>
        <p className="text-[12px] underline  leading-[16px] font-semibold font-sans">
          1-260-250-4303{" "}
        </p>
      </div>
      <div className="flex items-center gap-x-[4px]">
        <div>
          <LocationIcon />{" "}
        </div>
        <p className="text-[12px]   leading-[16px] font-semibold font-sans">
          {" "}
          Midwest Disc Clinic, Shipshewana{" "}
        </p>
      </div>
    </div>
  </div>
  )
}

export default TopBanner