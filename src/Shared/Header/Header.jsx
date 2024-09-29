import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/src/Components/UI/Button/Button';
import Image from 'next/image';
import { MainLogo } from '@/src/Assets';
import Dropdown from '@/src/Components/UI/Dropdown/Dropdown';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menu items array
  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Shop',
      submenu: [
        { label: 'Shop 1', href: '/shop/1' },
        { label: 'Shop 2', href: '/shop/2' },
      ]
    },
    { name: 'Learning Zone', href: '/learning-zone' },
    { name: 'Events', href: '/events' },
    { name: 'Membership', href: '/membership' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about' },

  ];

  const handleMenuSelect = (item) => {
    if (item.href) {
      window.location.href = item.href;
    }
  };

  const renderMenuItem = (item, isMobile = false) => {
    if (item.submenu) {
      return (
        <Dropdown
          key={item.name}
          label={item.name}
          items={item.submenu}
          onSelect={handleMenuSelect}
          className="text-gray-700 hover:text-red-600"
          buttonClassName={`bg-transparent border-none shadow-none hover:bg-transparent focus:ring-0 ${isMobile ? 'w-full text-left' : ''}`}
          menuClassName={isMobile ? 'w-full' : ''}
        />
      );
    }
    return (
      <Link key={item.name} href={item.href} className="text-gray-700 hover:text-red-600">
        {item.name}
      </Link>
    );
  };

  return (
    <header className="py-4 px-6 bg-white shadow-md">
      <div className='flex justify-between items-center container'>
        <div className="flex items-center">
          <Link href="/">
            <Image src={MainLogo} alt="Happy Kids" width={100} height={40} className='w-full h-full' />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => renderMenuItem(item))}
        </nav>

        <div className="hidden md:block">
          <Button href="/join" variant="primary">Join Us Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-start px-6 space-y-4 py-6">
              {menuItems.map((item) => (
                <li key={item.name} className="w-full">
                  {renderMenuItem(item, true)}
                </li>
              ))}
              <li className="w-full">
                <Button href="/join" variant="primary" className="w-full">Join Us Now</Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;