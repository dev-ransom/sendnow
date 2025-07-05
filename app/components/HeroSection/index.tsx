"use client";
import { useState } from "react";
import { ActionButton } from "../Button/ActionButton";
import { TypingText } from "../TypingText";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isGettingStarted, setIsGettingStarted] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const handleGetStarted = () => {
    setIsGettingStarted(true);
    setTimeout(() => setIsGettingStarted(false), 2000);
  };

  return (
    <section className="px-[5%] pt-[35px] w-full flex flex-col pb-[70px]">
      <div className="flex md:flex-row flex-col w-full justify-between items-center gap-2">
        <div className="flex-1 px-2 mt-[100px]">
          <div className="w-full">
            <TypingText phrases={["SendNow", "SendNow", "SendNow"]} />
            <h2 className="text-5xl mt-2 mb-6 font-semibold">
              Chat – Instant, Secure, <br />
              Smarter Messaging
            </h2>
            <p className="text-[#797979] text-[20px]">
              Real-time conversations, media sharing, and smart <br /> features
              to keep communication smooth and intuitive.
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
                isLoading={isGettingStarted}
                onClick={handleGetStarted}
              >
                Get Started
              </ActionButton>
            </div>
          </div>
        </div>
        <div className="flex-1 relative mt-9">
          <img
            src="/images/underbg.png"
            alt="bg"
            className="w-[260px] h-[380px]"
          />
          <img
            src="/images/hero.png"
            alt="hero"
            className="w-[250px] h-[399px] object-cover absolute top-[-20px] left-[-10px]"
          />
          <img
            src="/images/top_star.png"
            alt=""
            className="size-[30px] absolute top-[10px] right-[57%]"
          />
          <img
            src="/images/chatIcon.png"
            alt="chaticon"
            className="size-[80px] absolute top-[80px] left-[-24px] rotate-[-12deg] object-cover"
          />
          <img
            src="/images/chatIcon.png"
            alt="chaticon"
            className="size-[65px] absolute bottom-[150px] right-[47%] rotate-15 object-cover"
          />
          <img
            src="/images/top_star.png"
            alt="star"
            className="size-[60px] absolute bottom-[10px] right-[52%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
