"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../Header";
import OTPInput from "react-otp-input";
import Button from "../Button/Button";
import { useAppSelector, useAppDispatch } from "@/app/store/store";
import {

  useVerifyOtpMutation,
} from "@/app/features/auth/authService";

import { toast } from "react-toastify";

const VerifyCode = () => {
  const [otp, setOtp] = useState("");
  const { phoneNumber, isNewUser } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const [countdown, setCountdown] = useState(30);
  // const [otpExpired, setOtpExpired] = useState(false);

  const { mutateAsync: verifyOtp, isPending: isVerifying } =
    useVerifyOtpMutation();

  // Countdown timer for OTP expiration
  // useEffect(() => {
  //   if (countdown > 0) {
  //     const timer = setTimeout(() => {
  //       setCountdown(countdown - 1);
  //       if (countdown - 1 === 0) {
  //         setOtpExpired(true);
  //       }
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [countdown]);

  const handleSubmit = async () => {
    try {
      const response = await verifyOtp({
        phone_number: phoneNumber!,
        code: otp,
      });

      // Store tokens securely
      document.cookie = `auth-token=${response.tokens.access_token}; Path=/; Secure; SameSite=Lax; Max-Age=86400`;

      // Use window.location instead of router to ensure middleware runs
      router.push(isNewUser ? "/auth/signup" : "/chat");
    } catch (error) {
      // Handle actual errors
      toast.error(
        error instanceof Error ? error.message : "Verification failed"
      );
    }
  };
  // const handleResendOTP = async () => {
  //   if (countdown > 0) return;

  //   try {
  //     await resendOtp({ phone_number: phoneNumber! });
  //     setCountdown(30);
  //     setOtpExpired(false);
  //     setOtp("");
  //     toast.success("New OTP sent successfully!");
  //   } catch (error) {
  //     toast.error("Failed to resend OTP. Please try again.");
  //   }
  // };

  // Format phone number for display
  const formattedPhone = phoneNumber
    ? `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        5
      )}xx xxxx ${phoneNumber.slice(-2)}`
    : "";

  return (
    <div className="flex flex-col w-full h-full px-0 lg:pt-0">
      <div className="w-full text-left relative h-[unset] md:h-full flex flex-col ">
        <div className="text-left flex flex-col lg:items-start items-center gap-4 mb-[30px]">
          <Header text="Verify OTP" textSize="text-[50px] text-nowrap" />
          <p className="text-[#797979]">
            A 4-digit code was sent to +{formattedPhone} <br />
            Didn't get it?{" "}
            <span
              className={`${"text-[#18B1FF] cursor-pointer underline"}`}
              onClick={() => {} }
            >
              Resend Code <span>30s</span>
            </span>
          </p>
        </div>
        <div className="w-full flex gap-6 flex-col lg:items-start items-center justify-start text-black">
          <OTPInput
            containerStyle="justify-between gap-2"
            value={otp}
            onChange={setOtp}
            inputType="password"
            numInputs={6}
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
          <div className="flex flex-col lg:items-start items-center justify-between w-full gap-4 text-center lg:justify-center my-[10px] mt-2">
            <Button
              label={isVerifying ? "Verifying..." : "Verify"}
              disabled={!otp || isVerifying}
              loading={isVerifying}
              width="w-full lg:w-[360px]"
              buttonStyle="custom"
              height="h-[45px]"
              customClasses="bg-[#18B1FF] text-white rounded-lg cursor-pointer"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
