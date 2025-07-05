import Accordion from "./components/Accordion";
import NewsletterFooter from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full bg-linear-[45deg,#ffffff,#c9edff,#ffffff] h-full">
        <div className="w-full">
          <div className="h-full w-full flex flex-col">
            <Navbar />
          </div>
          <HeroSection />
          <div className="px-[5%]">
            <NewsletterFooter />
          </div>
        </div>
      </div>
    </>
  );
}
// bg-gradient-to-r from-[#c9edff] from-15% via-[#f5fbff] via-40% to-white to-90%