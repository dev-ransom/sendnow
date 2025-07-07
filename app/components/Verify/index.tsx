"use client";
import Image from "next/image";
import React from "react";

const FeatureList = () => {
  const features = [
    "Real-time delivery confirmed",
    "Edited messages marked clearly",
    "Emoji support functional",
    "Media & file sharing tested",
    "User profiles display accurate info",
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#18B1FF0D]">
      <div className="px-4 sm:px-6 lg:px-[5%]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Tested. Verified. <br /> Ready.
            </h1>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-center ">
                  <Image
                    src="/images/bitcoin.png"
                    alt="testing"
                    width={100}
                    height={100}
                    className="w-[40px] h-[40px]"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          {/* feature Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/rafiki.png"
                alt="Secure communication illustration"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
