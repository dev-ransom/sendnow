// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UpdateUserResponse, UserData } from './auth.interface';

interface AuthState {
  phoneNumber: string | null;
  isNewUser: boolean | null;
  otpVerified: boolean;
  selfData: UserData | null;
}

const initialState: AuthState = {
  phoneNumber: null,
  isNewUser: null,
  otpVerified: false,
  selfData: null
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
    setGetSelf: (state, action: PayloadAction<UserData>) => {
      state.selfData = action.payload;
    },
    clearAuthData: (state) => {
      state.phoneNumber = null;
      state.isNewUser = null;
      state.otpVerified = false;
    },
  },
});

export const { setPhoneNumber, setIsNewUser, setGetSelf, setOtpVerified, clearAuthData } = authSlice.actions;
export default authSlice.reducer;