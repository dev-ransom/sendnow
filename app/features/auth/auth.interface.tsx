export interface VerifyOTPResponse {
  message: string;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
  
export interface AuthUser {
  id: string;
  // Add other user fields as needed
}

export interface SignupResponse {
  message: string;
  new_user: boolean;
}

export interface SignupRequest {
  phone_number: string;
}

export interface ResendOtpRequest {
  phone_number: string;
}

export interface ResendOtpResponse {
  message: string;
  success: boolean;
}

export interface VerifyOtpRequest {
  phone_number: string;
  code: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
}

export interface LogoutResponse {
  message: string;
  success: boolean;
}