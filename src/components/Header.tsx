
import React from 'react';
import { MenuIcon, SearchIcon, EyeIcon, MaximizeIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm z-10">
      <div className="px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Content Moderation Center</h1>
            <nav className="hidden md:flex items-center space-x-6 text-gray-600">
              <a href="#" className="text-orange-600 font-semibold border-b-2 border-orange-600 pb-1">Content Moderation</a>
              <a href="#" className="hover:text-gray-800">ABC DEF</a>
              <a href="#" className="hover:text-gray-800">HELLO HI</a>
              <a href="#" className="hover:text-gray-800">XYZ ABC </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Navigatic" className="pl-9 pr-3 py-1.5 border rounded-md w-48 focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">W</div>
              <span className="text-gray-800">USER!</span>
              <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">in review</span>
            </div>
            <div className="text-xs text-gray-500">
              <span>asad  sfs :   50ms</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex justify-between items-center">
         <div className="text-xs text-gray-500">
            
         </div>
         <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-1">
                <span>Eye protection</span>
            </div>
            <div className="flex items-center space-x-1">
                <span className="font-mono text-orange-600 font-bold">751S</span>
            </div>
         </div>
      </div>
    </header>
  );
};

export default Header;
