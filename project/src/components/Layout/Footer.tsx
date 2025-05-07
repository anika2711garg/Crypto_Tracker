import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 border-t border-gray-800 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          <p>© 2025 CryptoTrack. All prices simulated for demonstration.</p>
          <p className="mt-1">Built with React, Redux Toolkit, and Tailwind CSS.</p>
        </div>
        
        <div className="flex space-x-4 items-center">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <div className="text-xs px-2 py-1 rounded-md bg-gray-800">
            Data refreshes every 2 seconds
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;