// src/services/auth/signupService.ts
import requestNew from "@/app/utils/requestNew";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { LogoutResponse, ResendOtpRequest, ResendOtpResponse, SignupRequest, SignupResponse,  } from "./auth.interface";
import Cookies from "js-cookie";

export const signUpUser = (data: SignupRequest) => {
  const response = requestNew<SignupResponse>({
    url: "api/v1/users/user",
    method: "POST",
    data,
  });
  return response;
};

export const useSignupMutation = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: signUpUser,
  });
};

export const resendOtp = async (data: ResendOtpRequest): Promise<ResendOtpResponse> => {
  try {
    const response = await requestNew<ResendOtpResponse>({
      url: "api/v1/users/resend-otp",
      method: "POST",
      data,
      requiresAuth: false,
    });

    if (!response.success) {
      throw new Error(response.message || "Failed to resend OTP");
    }

    return response;
  } catch (error) {
    const errorMessage =
      (error as { message?: string })?.message || "Failed to resend OTP";
    throw new Error(errorMessage);
  }
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


export const verifyOtp = async (data: { phone_number: string; code: string }) => {
  const response = await requestNew<{
    message: string;
    tokens: { access_token: string; refresh_token: string };
  }>({
    url: "api/v1/users/verify-otp",
    method: "POST",
    data,
    requiresAuth: false,
  });

  if (!response.tokens?.access_token) {
    throw new Error(response.message || "Verification failed");
  }

  // Store tokens properly
  Cookies.set('auth-token', response.tokens.access_token, { 
    expires: 1, // 1 day
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

  Cookies.set('refresh-token', response.tokens.refresh_token, {
    expires: 7, // 7 days
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

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


// features/auth/authService.ts
export const logoutUser = async (): Promise<LogoutResponse> => {
  const refreshToken = Cookies.get('refresh-token');
  
  if (!refreshToken) {
    throw new Error('No active session found');
  }

  const response = await requestNew<LogoutResponse>({
    url: 'api/v1/users/logout',
    method: 'POST',
    data: { refresh_token: refreshToken },
  });

  return response;
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      // Clear all auth-related cookies and storage
      Cookies.remove('auth-token', { path: '/' });
      Cookies.remove('refresh-token', { path: '/' });
      localStorage.removeItem('signup_phone');
      
      // Redirect to login
      window.location.href = '/auth/login';
    },
    onError: (error: Error) => {
      toast.error(error.message || "Logout failed");
      // Force cleanup anyway
      Cookies.remove('auth-token', { path: '/' });
      Cookies.remove('refresh-token', { path: '/' });
    },
  });
};