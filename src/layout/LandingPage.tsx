import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen px-4 text-black bg-red w-full">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
