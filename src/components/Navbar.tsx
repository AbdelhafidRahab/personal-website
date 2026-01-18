"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Products", href: "/products" },
  { name: "Courses", href: "/courses" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tighter text-white relative z-50"
          onClick={() => setIsOpen(false)}
        >
          Abdelhafid Rahab
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-slate-300 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Dropdown */}
        <div className={`
            top-25 fixed inset-0 bg-black z-40 transform transition-transform duration-300 ease-in-out flex items-center justify-center md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-2xl font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};