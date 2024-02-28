import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authorization/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});
