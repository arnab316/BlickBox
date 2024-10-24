// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import AuthModal from './components/AuthModal/AuthModal'
import { useState } from 'react'
import axios from 'axios';

import './App.css'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleLoginClick = () => setIsAuthModalOpen(true)
  const handleLogin = async(data: { username: string, password: string }) => {
    console.log('Logging in with', data)
    try {
      const response = await axios.post('http://localhost:4001/api/v1/login', data);
      console.log('Login successful:', response.data);
      setIsLoggedIn(true);
      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., show a notification)
    }

  }
  const handleSignup = async(data: { fullName: string, username: string, password: string }) => {
    try {
      const response = await axios.post('http://localhost:4001/api/v1/register', data);
      console.log('Signup successful:', response.data);
      setIsLoggedIn(true); // You may want to handle the login state based on the response
      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error (e.g., show a notification with the error message)
    }
    


  }
  const handleLogout = () => setIsLoggedIn(false)

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick} onLogout={handleLogout} />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        {/* Movie Details Route */}
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
      <AuthModal isOpen={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} onLogin={handleLogin} onSignup={handleSignup} />
    </Router>
  )
}

export default App
