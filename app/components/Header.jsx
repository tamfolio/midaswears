'use client';

import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, Globe, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Menu + Navigation */}
          <div className="flex items-center space-x-8">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="/men" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-300"
              >
                MEN
              </a>
              <a 
                href="/women" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-300"
              >
                WOMEN
              </a>
              <a 
                href="/archives" 
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-300"
              >
                ARCHIVES
              </a>
            </nav>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-black tracking-wider">
                MidasWears
              </h1>
            </a>
          </div>

          {/* Right Section - Search, Currency, Language, User, Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">SEARCH</span>
            </button>

            {/* Currency */}
            <button className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-4 h-3 bg-green-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <span className="hidden sm:inline">USD</span>
            </button>

            {/* Language */}
            <button className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">EN</span>
            </button>

            {/* User Account */}
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Cart */}
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {/* Cart Count Badge */}
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="/men" className="block text-lg font-medium text-gray-900">
              MEN
            </a>
            <a href="/women" className="block text-lg font-medium text-gray-900">
              WOMEN
            </a>
            <a href="/archives" className="block text-lg font-medium text-gray-900">
              ARCHIVES
            </a>
          </div>
        </div>
      )}
    </header>
  );
}