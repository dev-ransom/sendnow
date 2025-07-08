"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../Header";
import Text from "../Text";
import OTPInput from "react-otp-input";
import Button from "../Button/Button";

const VerifyCode = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {};

  const handleResendOTP = async () => {};

  return (
    <div className="flex flex-col w-full h-full px-0 lg:pt-0">
      <div className="w-full text-center relative h-[unset] md:h-full flex flex-col items-center bg-white dark:bg-brand-dark">
        <div className="text-left flex flex-col gap-4 mb-[30px]">
          <Header
            text="Verify Your Identity"
            textSize="text-[20px] text-nowrap"
          />
          <Text
            textSize="text-[14px]"
            text="Input the code we sent to your email to continue. You are one step away! Check your email for the code to complete verification."
          />
        </div>
        <div className="lg:w-[100%] w-full flex gap-6 flex-col items-center justify-center text-default-light dark:text-default-dark">
          <OTPInput
            containerStyle="justify-between gap-2"
            value={otp}
            onChange={setOtp}
            inputType="password"
            numInputs={5}
            renderSeparator={<span></span>}
            renderInput={(props, index) => (
              <input
                {...props}
                type="text"
                className="bg-white dark:bg-brand-dark text-base-light dark:text-base-dark border !w-[45px] !h-[45px] rounded-[8px] text-center text-xl outline-none focus:ring-2 focus:ring-base-light focus:border-base-light dark:focus:border-base-dark dark:focus:ring-base-dark pt-1 font-bold tracking-widest"
                value={otp[index] ? "*" : ""}
              />
            )}
          />
          <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center my-[10px] mt-20">
                <Button
                label="Verify"
                disabled={!otp}
                loading={false}
                width="w-full"
                buttonStyle="custom"
                height="h-[45px]"
                customClasses="bg-base-light dark:bg-base-dark hover:bg-base-light-hover dark:hover:bg-base-dark-hover text-white dark:text-default-light rounded-lg"
                onClick={handleSubmit}
                />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
