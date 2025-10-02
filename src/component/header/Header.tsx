'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-2 border-[#262626] rounded-[12px] overflow-hidden mb-[20px] sm:mb-[50px]">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center bg-[#FF8D4D] p-4 rounded-l-[10px] h-full">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md">
              <img
                src="/images/shape.png"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="text-black font-semibold">Little Learners</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-end h-16">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center justify-center px-6 border-l border-[#262626] text-sm font-medium
                ${item.name === 'Academics' ? 'bg-[#FFEFE5] text-black' : ''}
                ${item.name === 'Contact' ? 'bg-[#FFAE80] text-black rounded-r-[10px]' : ''}
                ${item.name !== 'Academics' && item.name !== 'Contact' ? 'bg-white text-black' : ''}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle (custom hamburger icon) */}
        <div className="md:hidden flex items-center justify-center bg-[#FFEFE5] border-l border-[#262626] h-full w-16">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Custom Hamburger (like your image)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" d="M3 6h12M3 10h8M3 14h6" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#262626] bg-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                block px-4 py-3 border-b border-[#262626] text-sm font-medium
                ${item.name === 'Academics' ? 'bg-pink-100 text-black' : ''}
                ${item.name === 'Contact' ? 'bg-[#FF8D4D] text-white' : ''}
                ${item.name !== 'Academics' && item.name !== 'Contact' ? 'bg-white text-black' : ''}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
