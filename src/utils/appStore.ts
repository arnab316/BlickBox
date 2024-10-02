import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

// Create and export the store
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
