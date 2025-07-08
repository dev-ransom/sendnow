import Navbar from "@/app/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 lg:pt-[100px] pt-[130px] bg-[#f3fbff]">
        {" "}
        {/* Adjust pt-[100px] to match your navbar height */}
        <div className="flex flex-col  w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default layout;
