"use client";
import { useUpdateUserMutation } from "@/app/features/auth/authService";
import { updateSchema } from "@/validationSchemas";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfileForm = () => {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { mutateAsync: createNewUser } = useUpdateUserMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: null as File | null,
    },
    validationSchema: updateSchema,
    onSubmit: (values) => {
      createNewUser({
        name: values.name,
        description: values.description,
        profile_picture: values.image as File,
      });
      router.push("/chat");
      console.log("Form submitted:", values);
      // You would typically send this data to your API here
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-[500px] w-full p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={formik.handleSubmit}>
        {/* Image Upload */}
        <div className="mb-6 flex flex-col items-center">
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="w-26 h-26 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/images/avatar.png"
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </label>
          <input
            id="image-upload"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {formik.touched.image && formik.errors.image && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.image}
            </div>
          )}
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#797979] mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* Description Field */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#18b2fff0]"
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.description}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={
            formik.isSubmitting ||
            !formik.values.name ||
            !formik.values.description ||
            !formik.values.image
          }
          className="w-full bg-[#18B1FF] cursor-pointer text-white py-2 px-4 rounded-md hover:bg-[#18b2fff1] focus:outline-none focus:ring-2 focus:ring-[#18b2fff0] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-no-drop"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
