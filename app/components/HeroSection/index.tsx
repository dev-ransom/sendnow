"use client";
import { useState } from "react";
import { ActionButton } from "../Button/ActionButton";
import { TypingText } from "../TypingText";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const router = useRouter();
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

    const handleGetStarted = () => {
      router.push('/auth/signup')
  };

  return (
    <section className="pt-[150px] w-full flex flex-col pb-[70px]">
      <div className="flex sm:px-6 lg:px-[5%] px-[8%] justify-between lg:flex-row flex-col">
        <div className="flex-1 px-2 lg:mt-[100px] lg:max-w-[50%] w-full">
          <div className="w-full">
            <TypingText phrases={["SendNow", "SendNow", "SendNow"]} />
            <h2 className="lg:text-5xl text-2xl mt-2 mb-6 font-semibold">
              Chat – Instant, Secure, <br />
              Smarter Messaging
            </h2>
            <p className="text-[#797979] lg:text-[20px] text-sm">
              Real-time conversations, media sharing, and smart{" "}
              <br className="lg:flex hidden" /> features to keep communication
              smooth and intuitive.
            </p>
            <div className="flex justify-start gap-[20px] pt-6">
              <ActionButton
                className="w-[150px] h-[65px] cursor-pointer"
                childProps="font-light"
                variant="primary"
                isLoading={isDownloading}
                onClick={handleDownload}
              >
                Download
              </ActionButton>
              <ActionButton
                className="w-[150px] h-[65px] cursor-pointer "
                variant="secondary"
                childProps="font-light"
                isLoading={false}
                onClick={handleGetStarted}
              >
                Get Started
              </ActionButton>
            </div>
          </div>
        </div>
        <div className="flex-1 relative mt-9 flex justify-end">
          <div className="flex relative lg:max-w-[500px] w-full"></div>
          <img
            src="/images/underbg.png"
            alt="bg"
            className="w-[450px] h-[431px] object-contain"
          />
          <img
            src="/images/hero.png"
            alt="hero"
            className="w-[450px] h-[475px] object-contain absolute lg:right-[-30px] lg:top-[-45px] top-[-36px] right-[30px]"
          />
          <img
            src="/images/top_star.png"
            alt=""
            className="size-[30px] absolute top-[10px] right-4"
          />
          <img
            src="/images/chatIcon.png"
            alt="chaticon"
            className="size-[80px] absolute top-[80px] rotate-[-12deg] object-cover right-[50%]"
          />
          <img
            src="/images/chatIcon.png"
            alt="chaticon"
            className="size-[65px] absolute bottom-[180px] right-[-40px] rotate-15 object-cover"
          />
          <img
            src="/images/top_star.png"
            alt="star"
            className="size-[60px] absolute bottom-[10px] right-[-30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
