// import { useState, useEffect } from 'react';
import { CircleUser, LogOut } from 'lucide-react';
import { Button } from "../ui/button";

interface UserProfileProps {
  userName: string;
  lastLogin: string;
  onLogout: () => void;
}

const UserProfile = ({ userName, lastLogin, onLogout }: UserProfileProps) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 px-4 z-10">
      <div className="flex items-center space-x-2 mb-2">
        <CircleUser className="w-8 h-6 rounded" />
        <div>
          <h3 className="text-lg font-semibold">{userName}</h3>
          <p className="text-xs text-gray-500">Last login: {lastLogin}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={onLogout}>
        <LogOut className="h-4 w-4 mr-2" />
        <span>Log out</span>
      </Button>
    </div>
  );
};

export default UserProfile;
