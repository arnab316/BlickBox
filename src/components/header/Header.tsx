// src/components/Header/Header.tsx
import { BellRing, Search, LogOut } from 'lucide-react'
import { Button } from "../ui/button"

interface HeaderProps {
  isLoggedIn: boolean
  onLoginClick: () => void
  onLogout: () => void
}

const Header = ({ isLoggedIn, onLoginClick, onLogout }: HeaderProps) => (
  <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
    <div className="flex items-center space-x-4">
      <h1 className="text-2xl font-bold">Blickbox</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">TV Shows</a></li>
          <li><a href="#" className="hover:text-gray-300">Movies</a></li>
          <li><a href="#" className="hover:text-gray-300">New & Popular</a></li>
        </ul>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <Search className="w-5 h-5" />
      <BellRing className="w-5 h-5" />
      {isLoggedIn ? (
        <div className="flex items-center space-x-2">
          <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded" />
          <span>User</span>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      ) : (
        <Button onClick={onLoginClick}>Log In</Button>
      )}
    </div>
  </header>
)

export default Header
