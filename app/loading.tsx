import React from "react";
import LogoLoader from "./components/loader/LogoLoader";


const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center ">
      <LogoLoader />
    </div>
  );
};

export default Loading;
