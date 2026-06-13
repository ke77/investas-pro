'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-3 items-center">
      {/* Scroll to Top Button with smooth AnimatePresence transition */}
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.7, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: 'auto' }}
            exit={{ opacity: 0, scale: 0.7, height: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="flex items-center justify-center overflow-hidden"
          >
            <button
              id="scroll-to-top-button"
              onClick={scrollToTop}
              className="p-3.5 rounded-full shadow-lg bg-[#2A2A2A] hover:bg-[#3E3E3E] text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent WhatsApp Floating Action Button */}
      <a
        id="whatsapp-floating-button"
        href="https://wa.me/233500050924"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebd59] text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with Investas Pro Ghana on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white fill-white/10 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
