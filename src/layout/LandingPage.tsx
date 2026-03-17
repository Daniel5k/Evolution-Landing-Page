import CarModels from "../components/CarModels/CarModels";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices/OurServices";

const LandingPage = () => {
  return (
    <div className="min-h-screen px-4 text-black bg-red w-full">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CarModels />
      <OurServices />
    </div>
  );
};

export default LandingPage;
