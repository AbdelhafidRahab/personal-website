"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Icons = {
  Home: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Projects: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  ),
  Contact: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Products: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-10"/></svg>
  ),
  Academy: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
};

const navLinks = [
  { name: "Home", href: "/", icon: Icons.Home },
  { name: "Projects", href: "/projects", icon: Icons.Projects },
  { name: "Contact", href: "/contact", icon: Icons.Contact },
  { name: "Products", href: "/products", icon: Icons.Products },
  { name: "Academy", href: "/academy", icon: Icons.Academy },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (href: string) => 
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between md:justify-center">
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`
                    flex items-center gap-2 text-sm font-medium transition-all duration-200 border-b-2 py-1
                    ${active 
                      ? "text-white border-white" 
                      : "text-neutral-400 border-transparent hover:text-neutral-200 hover:border-neutral-700"}
                  `}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button (Aligned Right) */}
        <div className="md:hidden flex w-full justify-end">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-neutral-300 hover:text-white transition-colors p-2"
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
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`
            fixed top-10 left-0 right-0 bottom-0 z-40 transform transition-transform duration-300 ease-in-out flex flex-col items-center justify-start pt-12 md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}>
          <ul className="flex flex-col items-center gap-2 w-full px-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name} className="w-full">
                  <Link 
                    href={link.href} 
                    className={`
                      flex items-center justify-center gap-4 text-xl font-medium py-4 rounded-xl transition-all
                      ${active 
                        ? "text-white bg-neutral-900 border border-neutral-800" 
                        : "text-neutral-500 bg-black/95 backdrop-blur-sm hover:text-white"}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-6 h-6" />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};