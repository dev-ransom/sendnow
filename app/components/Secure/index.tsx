import Image from "next/image";
import React from "react";

const FEATURES = [
  {
    title: "End-to-End Encryption",
    description: "Messages are safe in transit and at rest.",
  },
  {
    title: "High Performance",
    description: "Built to handle thousands of users in real time.",
  },
];

const SecureSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[350px] h-[500px]">
              <Image
                src="/images/secure.png"
                alt="Secure communication illustration"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#18B1FF]">Secure</span>, Scalable &
              Lightning Fast
            </h1>

            <div className="space-y-6">
              {FEATURES.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureSection;
