"use client";
import { useFormik } from "formik";

import { useRouter } from "next/navigation";
import { useSignupMutation } from "../features/auth/authService";
import { useAppDispatch } from "../store/store";
import { setIsNewUser, setPhoneNumber } from "../features/auth/authSlice";
import { signupSchema } from "@/validationSchemas";

const PhoneVerificationForm = () => {
  const { mutateAsync, isPending } = useSignupMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      countryCode: "+234",
      phoneNumber: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const cleanedPhoneNumber = values.phoneNumber
          .replace(/\D/g, "")
          .replace(/^0+/, "");
        if (cleanedPhoneNumber.length !== 10) {
          throw new Error("Phone number must be 10 digits");
        }
        const countryCodeWithoutPlus = values.countryCode.replace("+", "");
        const fullPhoneNumber = `${countryCodeWithoutPlus}${cleanedPhoneNumber}`;
        dispatch(setPhoneNumber({ phone: fullPhoneNumber }));
        const response = await mutateAsync({ phone_number: fullPhoneNumber });
        dispatch(setIsNewUser(response.new_user));
        router.push("/auth/verify-email");
      } catch (error) {}
    },
  });

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, "");
    const withoutLeadingZero = digitsOnly.replace(/^0+/, "");
    formik.setFieldValue("phoneNumber", withoutLeadingZero);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Enter Your Phone Number</h1>
      <p className="text-[#797979] mb-6">
        We'll send you an OTP to verify your number.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <div className="flex">
            <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
              {formik.values.countryCode}
            </div>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="8012345678"
              onChange={handlePhoneNumberChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={10}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting || isPending}
          className="w-full bg-[#18B1FF] text-white py-2 px-4 cursor-pointer rounded-md hover:bg-[#18b2ffe1] focus:outline-none focus:ring-2 focus:ring-[#18b2ffe8] focus:ring-offset-2 disabled:opacity-50"
        >
          {isPending ? "Sending..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default PhoneVerificationForm;
