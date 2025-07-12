import FaqSection from "./components/Faqs";
import SendNowFeature from "./components/Feature";
import NewsletterFooter from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SecureSection from "./components/Secure";
import FeatureList from "./components/Verify";

export default function Home() {
  return (
    <div className="w-full bg-blue-500 h-full">
      <div className="w-full">
        <div className="h-full w-full flex flex-col">
          <Navbar />
        </div>
        <HeroSection />
        <SendNowFeature />
        <FeatureList />
        <SecureSection />
        <FaqSection />
        <div className="px-[5%] py-[4%] bg-white">
          <NewsletterFooter />
        </div>
      </div>
    </div>
  );
}
// bg-gradient-to-r from-[#c9edff] from-15% via-[#f5fbff] via-40% to-white to-90%
