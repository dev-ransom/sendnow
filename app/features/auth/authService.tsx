// src/services/auth/signupService.ts
import requestNew from "@/app/utils/requestNew";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import {
  LogoutResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  SignupRequest,
  SignupResponse,
  UpdatesUserAttributesRequest,
  UpdateUserResponse,
} from "./auth.interface";

export const signUpUser = (data: SignupRequest) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = requestNew<SignupResponse>({
    url: "api/v1/users/user",
    method: "POST",
    data: formData,
  });
  return response;
};

export const updatesUserAttributes = async (
  data: UpdatesUserAttributesRequest
) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, value);
    }
  });
  const response = await requestNew<UpdateUserResponse>({
    url: "api/v1/users/user",
    method: "PATCH",
    data: formData,
  });
  return response;
};

export const useSignupMutation = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: signUpUser,
  });
};

export const useUpdateUserMutation = () => {
  return useMutation<UpdateUserResponse, Error, UpdatesUserAttributesRequest>({
    mutationFn: updatesUserAttributes,
  });
};

export const resendOtp = async (data: ResendOtpRequest) => {
  const response = await requestNew<ResendOtpResponse>({
    url: "api/v1/users/resend-otp",
    method: "POST",
    data,
    requiresAuth: false,
  });
  return response;
};

export const useResendOtpMutation = () => {
  return useMutation({
    mutationFn: resendOtp,
    onSuccess: (data) => {
      toast.success(data.message || "OTP resent successfully!");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to resend OTP");
    },
  });
};

export const verifyOtp = async (data: {
  phone_number: string;
  code: string;
}) => {
  const response = await requestNew<{
    message: string;
    tokens: { access_token: string; refresh_token: string };
  }>({
    url: "api/v1/users/verify-otp",
    method: "POST",
    data,
    requiresAuth: false,
  });

  // Store tokens properly
  localStorage.setItem(
    "access-token",
    JSON.stringify(response.tokens.access_token)
  );
  localStorage.setItem(
    "refresh-token",
    JSON.stringify(response.tokens.refresh_token)
  );

  return response;
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => {
      toast.success("Verification successful!");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};


// features/auth/authService.ts
export const logoutUser = async (): Promise<LogoutResponse> => {
  const refreshToken = JSON.parse(
    localStorage.getItem("refresh-token") ?? "null"
  ) as string;

  if (!refreshToken) {
    throw new Error("No active session found");
  }
  const response = await requestNew<LogoutResponse>({
    url: "api/v1/users/logout",
    method: "POST",
    data: { refresh_token: refreshToken },
  });

  return response;
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      // Clear all auth-related cookies and storage
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      localStorage.removeItem("signup_phone");
      Cookies.remove('auth-token')
    },
    onError: (error: Error) => {
      toast.error(error.message || "Logout failed");
      // Force cleanup anyway
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      localStorage.removeItem('auth-token')
      Cookies.remove("auth-token");
    },
  });
};
