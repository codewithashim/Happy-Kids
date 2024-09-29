import { FooterLogo } from '@/src/Assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const menuItems = [
    { name: 'Shop', href: '#' },
    { name: 'Learning Zone', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Membership', href: '#' },
    { name: 'Blogs', href: '#' },
  ];

  return (
    <footer className="bg-blue-50 text-gray-700 py-10">
      <div className="mx-auto container ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 gap-6 md:space-y-0">

          {/* Logo and About */}
          <div className="md:w-1/3">
            <Link href="/">
              <Image src={FooterLogo} alt="Happy Kids" width={200} height={100} />
            </Link>

            <p className="mt-4 text-base md:text-lg">
              At Happy Kids, we offer a dynamic platform where children can explore, learn, and play. Our mission is to provide a seamless experience with engaging activities, exciting events, and expert guidance, all in one place to support every child's growth and happiness.
            </p>
          </div>

          {/* Services Links */}
          <div className="md:w-1/5">
            <h3 className="font-semibold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:w-1/5">
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <p>0123456789</p>
            <p>0123456789</p>
          </div>

          {/* Social Links */}
          <div className="md:w-1/5">
            <h3 className="font-semibold text-xl mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Divider */}
        <hr className="my-8 border-t border-gray-200" />

        {/* Bottom copyright section */}
        <div className="text-center">
          <p>&copy; 2024 Happy Kids | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
