import ProfileForm from "@/app/components/ProfileForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-[5%] ">
      <div className="w-full flex justify-center items-center">
        <ProfileForm />
      </div>
    </div>
  );
};

export default page;
