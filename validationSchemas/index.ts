import * as Yup from "yup";
export const signupSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[1-9][0-9]+$/, "Must be only digits without leading zero")
      .min(10, "Must be at least 10 digits")
      .max(10, "Must be exactly 10 digits"),
})
  
export const updateSchema =  Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.mixed().required("Image is required"),
})