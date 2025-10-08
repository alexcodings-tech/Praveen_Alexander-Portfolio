"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 px-6 py-3 backdrop-blur-md bg-black/30">
      <div className="flex items-center justify-between py-3">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl md:text-3xl font-bold">
            Praveen Alexander S
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md text-white hover:text-pink-600 transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300 ease-in-out" 
               style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24" 
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 
          'flex absolute top-16 left-0 right-0 flex-col bg-black/80 backdrop-blur-md p-4 rounded-b-lg shadow-lg max-h-[300px] opacity-100' : 
          'flex absolute top-16 left-0 right-0 flex-col bg-black/80 backdrop-blur-md p-4 rounded-b-lg shadow-lg max-h-0 opacity-0 overflow-hidden'} 
          md:flex md:static md:flex-row md:space-x-1 md:bg-transparent md:p-0 md:shadow-none md:max-h-full md:opacity-100`}>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education" onClick={(e) => scrollToSection(e, 'education')}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;