import React from 'react';
import { Coins } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-6 border-b border-gray-800">
      <div className="flex items-center mb-4 md:mb-0">
        <Coins className="h-8 w-8 text-blue-500 mr-2" />
        <div>
          <h1 className="text-2xl font-bold text-white">CryptoTrack</h1>
          <p className="text-sm text-gray-400">Live Cryptocurrency Tracker</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 text-green-500 px-2 py-1 rounded-md bg-green-500/10">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm">Live Updates</span>
        </div>
        <div className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500">
          Real-Time
        </div>
      </div>
    </header>
  );
};

export default Header;