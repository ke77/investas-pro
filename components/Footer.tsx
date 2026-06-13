'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Send, Facebook, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="main-footer" className="w-full md:w-auto mx-0 md:mx-[10px] mb-0 md:mb-[10px] rounded-none md:rounded-3xl overflow-hidden bg-[#1A1A1A] text-[#FDFCFB] relative border-t md:border border-white/5 shadow-2xl mt-24">
      {/* Decorative backdrop mesh */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B41A] rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 pt-20 pb-12">
        {/* Core Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Info and Branding */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="font-extrabold text-3xl tracking-tighter text-white">
              Investas<span className="text-[#F4B41A]">Pro</span>
            </Link>
            <p className="text-white/70 font-normal leading-relaxed text-sm max-w-sm">
              We are on a mission to change the dynamics of Ghana&apos;s future through diversified investments, innovative solutions, and entrepreneurial empowerment.
            </p>
            
            {/* Custom Social Icons with elegant borders */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com/investaspro_gh"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-[#F4B41A] hover:text-black hover:border-transparent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/investaspro_gh"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F4B41A] hover:bg-[#F4B41A] hover:text-black hover:border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/233500050924"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-[#F4B41A] hover:text-black hover:border-transparent transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B41A]">
              Ecosystem
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              <li>
                <Link href="/" className="hover:text-[#F4B41A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F4B41A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ventures" className="hover:text-[#F4B41A] transition-colors">
                  Our Ventures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4B41A] transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Subsidiaries & Focus areas */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B41A]">
              Subsidiaries
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              <li>
                <Link href="/ventures#staflinc" className="hover:text-[#F4B41A] transition-colors">
                  Staflinc International
                </Link>
              </li>
              <li>
                <Link href="/ventures#illa-farms" className="hover:text-[#F4B41A] transition-colors">
                  iLLa Farms & Foods
                </Link>
              </li>
              <li>
                <Link href="/ventures#real-estate" className="hover:text-[#F4B41A] transition-colors">
                  Real Estate Investments
                </Link>
              </li>
              <li>
                <Link href="/ventures#education" className="hover:text-[#F4B41A] transition-colors">
                  Financial Literacy Hub
                </Link>
              </li>
              <li>
                <Link href="/ventures#healthcare" className="hover:text-[#F4B41A] transition-colors flex items-center gap-1.5">
                  e-Health Ventures <span className="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded">Planning</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Updates */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4B41A]">
              Stay Updated
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Get corporate insights and notice of upcoming investment pools.
            </p>
            {subscribed ? (
              <div className="bg-white/5 border border-[#F4B41A]/30 rounded-xl p-4 flex gap-2.5 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#F4B41A] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-[#F4B41A]">Subscribed!</h5>
                  <p className="text-[11px] text-white/50">You have joined our visionary insights letter.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F4B41A] transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 text-[#F4B41A] hover:text-white top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Middle Details: Location & Reach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-10 border-b border-white/10 text-white/80">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-[#F4B41A]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-white/40">Location</p>
              <p className="text-sm font-semibold">Accra, Ghana</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-[#F4B41A]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-white/40">Send Email</p>
              <a href="mailto:investas24@gmail.com" className="text-sm font-semibold hover:text-[#F4B41A] transition-colors">
                investas24@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-[#F4B41A]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-white/40">Telephone</p>
              <a href="tel:+233500050924" className="text-sm font-semibold hover:text-[#F4B41A] transition-colors">
                +233 50 005 0924
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright and legal details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Investas Pro Ghana. Visionary Growth. Local Intelligence.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-[#F4B41A] transition-colors">
              Our Vision
            </Link>
            <Link href="/ventures" className="hover:text-[#F4B41A] transition-colors">
              Our Investments
            </Link>
            <Link href="/contact" className="hover:text-[#F4B41A] transition-colors">
              Partner Deck
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
