'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowUpRight } from 'lucide-react';

function StaircaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-1.5 items-end justify-center group ${className}`}>
      <span className="h-0.5 bg-current rounded-full w-6 transition-all duration-300"></span>
      <span className="h-0.5 bg-current rounded-full w-4.5 transition-all duration-300 group-hover:w-6"></span>
      <span className="h-0.5 bg-current rounded-full w-3 transition-all duration-300 group-hover:w-6"></span>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Ventures', href: '/ventures' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isHome = pathname === '/';
  const isLightNavbar = !isHome;

  return (
    <nav
      id="main-navbar"
      className={`absolute top-[10px] left-0 right-0 z-50 mx-[10px] rounded-2xl transition-all duration-300 ${
        isLightNavbar
          ? 'bg-brand-warm/85 border border-gray-200/50 backdrop-blur-md text-brand-charcoal'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          id="nav-logo"
          href="/"
          className={`font-extrabold text-2xl tracking-tighter transition-colors ${
            isLightNavbar ? 'text-brand-charcoal' : 'text-white'
          }`}
        >
          Investas<span className="text-brand-gold">Pro</span>
        </Link>
 
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                href={link.href}
                className={`font-semibold text-sm transition-all relative py-1 ${
                  isActive
                    ? 'text-brand-gold'
                    : isLightNavbar
                    ? 'text-brand-charcoal/75 hover:text-brand-gold'
                    : 'text-white/80 hover:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
 
        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            id="nav-cta-btn"
            href="/contact?type=partner"
            className="bg-brand-gold hover:bg-black hover:text-brand-gold text-black font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-1.5 transition-all duration-300 shadow-md transform hover:scale-[1.03]"
          >
            Partner With Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
 
        {/* Mobile Menu Toggle */}
        <button
          id="mobile-nav-toggle"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-inherit focus:outline-none"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <StaircaseIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden absolute top-[70px] left-0 right-0 border rounded-2xl p-6 shadow-xl animate-custom-fade-up z-40 mx-[10px] ${
            isLightNavbar 
              ? 'bg-brand-warm text-brand-charcoal border-gray-200/50' 
              : 'bg-brand-dark-card text-white border-white/5'
          }`}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-bold text-lg py-1 border-b ${
                    isActive 
                      ? 'text-brand-gold' 
                      : isLightNavbar 
                      ? 'text-brand-charcoal border-gray-200/20' 
                      : 'text-white border-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact?type=partner"
              onClick={() => setMobileOpen(false)}
              className={`text-center font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-4 ${
                isLightNavbar
                  ? 'bg-brand-charcoal text-white hover:bg-brand-gold hover:text-brand-charcoal'
                  : 'bg-brand-gold text-black hover:bg-white'
              }`}
            >
              Partner With Us
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
