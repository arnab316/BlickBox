import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import movieReducer from './movieSlice'
import searchReducer from './searchSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    search: searchReducer
  },
})

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch