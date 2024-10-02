import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean
  isAuthModalOpen: boolean
}

const initialState: AuthState = {
  isLoggedIn: false,
  isAuthModalOpen: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openAuthModal(state) {
      state.isAuthModalOpen = true
    },
    closeAuthModal(state) {
      state.isAuthModalOpen = false
    },
    login(state) {
      state.isLoggedIn = true
      state.isAuthModalOpen = false
    },
    logout(state) {
      state.isLoggedIn = false
    },
  },
})

export const { openAuthModal, closeAuthModal, login, logout } = authSlice.actions
export default authSlice.reducer
