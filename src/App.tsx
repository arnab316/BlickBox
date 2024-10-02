// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import AuthModal from './components/AuthModal/AuthModal'
import { useState } from 'react'
import './App.css'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleLoginClick = () => setIsAuthModalOpen(true)
  const handleLogin = (data: { username: string, password: string }) => {
    console.log('Logging in with', data)
    setIsLoggedIn(true)
    setIsAuthModalOpen(false)
  }
  const handleSignup = (data: { fullName: string, username: string, password: string }) => {
    console.log('Signing up with', data)
    setIsLoggedIn(true)
    setIsAuthModalOpen(false)
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
