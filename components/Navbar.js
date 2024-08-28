"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Image src="/Local_Baazaar.png" alt="Local_Baazaar" width={50} height={50} />
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-12">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/shop-registeration" className="text-white hover:text-gray-300">Shop Registration</Link>
          <Link href="#" className="text-white hover:text-gray-300" onClick={() => scrollToSection('about')}>About</Link>
          <Link href="#" className="text-white hover:text-gray-300" onClick={() => scrollToSection('about')}>Contact</Link>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <Link href="/" className="block text-white hover:text-gray-300 py-2">Home</Link>
        <Link href="/shop-registeration" className="block text-white hover:text-gray-300 py-2">Shop Registeration</Link>
        <Link href="#" className="block text-white hover:text-gray-300 py-2" onClick={() => scrollToSection('about')}>About</Link>
        <Link href="#" className="block text-white hover:text-gray-300 py-2" onClick={() => scrollToSection('about')}>Contact</Link>
      </div>
    </nav>
  );
}