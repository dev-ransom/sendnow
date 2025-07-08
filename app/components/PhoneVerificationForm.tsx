"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

const PhoneVerificationForm = () => {
  const formik = useFormik({
    initialValues: {
      countryCode: "+234",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be at least 10 digits")
        .max(11, "Must be 11 digits or less"),
    }),
    onSubmit: (values) => {
      const fullPhoneNumber = `${values.countryCode}${values.phoneNumber}`;
      console.log("Submitting:", fullPhoneNumber);
      // Handle OTP sending logic here
    },
  });

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
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          disabled={formik.isSubmitting}
          className="w-full bg-[#18B1FF] text-white py-2 px-4 cursor-pointer rounded-md hover:bg-[#18b2ffe1] focus:outline-none focus:ring-2 focus:ring-[#18b2ffe8] focus:ring-offset-2 disabled:opacity-50"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default PhoneVerificationForm;
