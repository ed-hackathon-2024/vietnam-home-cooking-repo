'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navbarConfig } from '@/config/navbar-config';

export const FinanceHelperNavbar = () => {
  const { menuItems } = navbarConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock user data
  const user = {
    name: 'John Doe',
    level: 5,
    avatar: '/path-to-avatar.jpg', // Replace with the actual path to the avatar
  };

  return (
    <div className='shadow-md bg-erste-blue rounded-[0.25rem] py-3 px-6 transition-transform duration-300 ease-in-out'>
      <div className='flex items-center'>
        {/* Menu Items - Aligned to the start */}
        <div className='flex items-center gap-6'>
          {/* Hamburger Menu for Mobile */}
          <div
            className='block lg:hidden cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='block w-6 h-[2px] bg-white mb-[6px] transition-all'></span>
            <span className='block w-6 h-[2px] bg-white mb-[6px] transition-all'></span>
            <span className='block w-6 h-[2px] bg-white'></span>
          </div>

          {/* Navigation Links */}
          <div className='hidden lg:flex gap-6'>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='text-white font-medium relative group'
              >
                {item.label}
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Spacer to push user profile to the right */}
        <div className='flex-grow'></div>

        {/* User Profile Section - Aligned to the end */}
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 relative'>
            <Image
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              layout='fill'
              className='rounded-full object-cover border-2 border-white'
            />
          </div>
          <div>
            <p className='text-white text-sm font-medium'>{user.name}</p>
            <p className='text-gray-300 text-xs'>Level: {user.level}</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-[60px] left-0 w-full bg-erste-blue text-center py-4 lg:hidden'>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='block text-white py-2 font-medium hover:underline'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
