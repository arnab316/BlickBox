import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import AuthModal from './components/AuthModal/AuthModal'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
useEffect(() =>{
  const token = localStorage.getItem('token');
  if (token) {
    setIsLoggedIn(true);
  }
})
  const handleLoginClick = () => setIsAuthModalOpen(true)
  const handleLogin = async(data: { username: string, password: string }) => {
    console.log('Logging in with', data)
    try {
      const response = await axios.post('http://localhost:4001/api/v1/login', data);
      localStorage.setItem('token', response.data.data.data.token); // Save token
      setIsLoggedIn(true);
      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Login error:', error?.response.data);
      const errorMessage = error?.response?.data?.error?.message || 'Login failed';
      throw new Error(errorMessage);
    }

  }
  const handleSignup = async(data: { fullName: string, username: string, password: string }) => {
    try {
      const response = await axios.post('http://localhost:4001/api/v1/register', data);
      console.log('Signup successful:', response.data);
      setIsLoggedIn(true); //  login state based on the response
      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Signup error:', error);
    }
    


  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick} onLogout={handleLogout} />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        {/* Movie Details Route */}
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
      <AuthModal 
      isOpen={isAuthModalOpen}
       onOpenChange={setIsAuthModalOpen}
        onLogin={handleLogin} 
        onSignup={handleSignup} />
    </Router>
  )
}

export default App
