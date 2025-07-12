// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../features/auth/authSlice'; // Import your actual auth reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use the actual reducer, not a string
    // Add other reducers here
    // prompt: promptReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // Disable if you have non-serializable values
    })
});

// Optional: Set up listeners for RTK Query if you're using it
setupListeners(store.dispatch);

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;