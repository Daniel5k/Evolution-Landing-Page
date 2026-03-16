import heroImage from "../HeroSection/images/11fe4583713319.5d4499eab721f.jpg";
import FloatingDetails from "./FloatingDetails";

const HeroSection = () => {
  return (
    // <div className="px-4 mt-2 grid grid-flow-col grid-cols-4 gap-8">
    <div className="px-4 mt-2 grid grid-flow-row grid-rows-2 gap-4 md:grid-flow-col md:grid-cols-4 md:grid-rows-1">
      {/* hero section write-up */}

      <div className="grid col-span-1 items-center text-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg text-nowrap">Future of Mobility</h2>
          <p className="text-[12px] text-left">
            Discover Your Perfect Electric Vehicle
          </p>
        </div>
        <p className="text-sm text-[#299D90]">Welcome, Ganisetti Teja</p>
        <div className="">
          <p className="bg-[#299D90] text-white px-4 text-sm rounded-2xl py-2 text-center">
            Explore Now
          </p>
        </div>
        <div className="flex justify-between gap-3 text-[12px]">
          <div>
            <p className=" font-bold text-[#299D90]">500+</p>
            <p>Vehicles</p>
          </div>
          <div>
            <p className=" font-bold text-[#299D90]">1200+</p>
            <p>Changing Stations</p>
          </div>
          <div>
            <p className=" font-bold text-[#299D90]">50K+</p>
            <p>Happy Users</p>
          </div>
        </div>
      </div>

      {/* Hero section image part */}

      {/* <div className="grid col-start-3 col-span-3 overflow-hidden"> */}
      <div className="relative grid row-start-2 row-span-1 overflow-hidden md:col-start-3 md:col-span-3 md:row-start-1">
        <img
          src={heroImage}
          alt="electric motor charging"
          className="object-cover w-full rounded-xl h-80"
        />
        <FloatingDetails />
      </div>
    </div>
  );
};

export default HeroSection;
