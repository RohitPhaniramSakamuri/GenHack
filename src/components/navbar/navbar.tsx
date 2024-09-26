import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import isaLogo from '@/Assets/ISALogo.png';
export default function Navbar() {
    return (
      <div className="w-full bg-fuchsia-900 shadow-md sticky top-11 z-50 rounded-full mx-6 backdrop-filter backdrop-blur-lg bg-opacity-60 firefox:bg-opacity-60">
        <nav id="navbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">
            <div className="flex items-center justify-between h-18">
              <div className="flex-1 flex lg:justify-center lg:space-x-14 xl:space-24">
                <a href="#" className="text-xl font-bold text-white px-3 py-3">
                <Image src={isaLogo} className="w-11 h-8" alt="ISA Logo"/>
                </a>
                <div className="justify-between hidden lg:ml-6 lg:flex lg:space-x-14 xl-space-24">
                <Link href="#prizepool" className="text-xl font-bold text-white hover:text-gray-700 px-3 py-4">
                  Prizes
                </Link>
                <Link href="#criteria" className="text-xl font-bold text-white hover:text-gray-700 px-3 py-4">
                  Criteria
                </Link>
                <Link href="#timeline" className="text-xl font-bold text-white hover:text-gray-700 px-3 py-4">
                  Timeline
                </Link>
                <Link href="#resources" className="text-xl font-bold text-white hover:text-gray-700 px-3 py-4">
                  Resources
                </Link>
                <Link href="#register" className="text-xl font-bold text-white hover:text-gray-700 px-3 py-4">
                  Register
                </Link>
                </div>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}
