import { BellRing,  LogOut } from 'lucide-react'
import { Button } from "../ui/button"
import MovieSearch from "../MovieSearch/MovieSearch"
import { CircleUser } from 'lucide-react';
import { useState } from'react';
import UserProfile from "../UserProfile/UserProfile";
interface Movie {
  title: string;
  id: string;
  image: string;
  genre: string[];
}
interface HeaderProps {
  isLoggedIn: boolean
  onLoginClick: () => void
  onLogout: () => void
  onSearch: (query: string) => void;
  searchResults: Movie[]
}

const Header = ({ isLoggedIn, onLoginClick, onLogout, onSearch, searchResults }: HeaderProps) => {
  
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const handleUserIconClick = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
  };

  return(
  <header className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
    <div className="flex items-center space-x-4">
      <h1 className="text-2xl font-bold">Blickbox</h1>
      <nav>
        <ul className="flex space-x-4">
          {['Home', 'Tv Shows', 'Movies','New & Popular'].map((item, index)=> (
            <li key={index}>
              <a href="#" className="hover:text-gray-300">{item}</a>
              </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      {/* <Search className="w-5 h-5" /> */}
      <MovieSearch onSearch={onSearch} searchResults={searchResults} />
      <BellRing className="w-5 h-5" />
      {isLoggedIn ? (
        <div className="flex items-center space-x-2">
          <CircleUser className="w-8 h-6 rounded"/>
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
)}

export default Header
