'use client';

import Link from 'next/link';
import { FaHome, FaBriefcase, FaUserTie } from 'react-icons/fa';
import { BsFillRocketFill } from "react-icons/bs";

// Updated navigation items for MindLaunch pages with corrected icons
const navItems = {
  '/': { name: 'Home', icon: <FaHome size={18} /> },
  '/portfolio': { name: 'Portfolio', icon: <FaBriefcase size={18} /> },
  '/about': { name: 'About', icon: <FaUserTie size={18} /> },
  '/launchpad': { name: 'Launchpad', icon: <BsFillRocketFill  size={18} /> },
};

export function Navbar() {
  return (
    <aside className="fixed top-0 left-0 w-full tracking-tight text-center z-50">
      <nav
        className="flex justify-center items-center px-6 py-8 shadow-lg bg-black border-b border-gray-700"
        id="nav"
      >
        <div className="flex flex-row space-x-6">
          {Object.entries(navItems).map(([path, { name, icon }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all text-white text-lg font-medium flex items-center space-x-2 hover:text-gray-300 py-2 px-4 rounded-lg"
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
