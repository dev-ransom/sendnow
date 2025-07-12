// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  phoneNumber: string | null;
  isNewUser: boolean | null;
  otpVerified: boolean;
}

const initialState: AuthState = {
  phoneNumber: null,
  isNewUser: null,
  otpVerified: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<{ phone: string }>) => {
      state.phoneNumber = action.payload.phone;
    },
    setIsNewUser: (state, action: PayloadAction<boolean>) => {
      state.isNewUser = action.payload;
    },
    setOtpVerified: (state, action: PayloadAction<boolean>) => {
      state.otpVerified = action.payload;
    },
    clearAuthData: (state) => {
      state.phoneNumber = null;
      state.isNewUser = null;
      state.otpVerified = false;
    },
  },
});

export const { setPhoneNumber, setIsNewUser, setOtpVerified, clearAuthData } = authSlice.actions;
export default authSlice.reducer;