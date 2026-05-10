"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Global Reach", href: "#global-reach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1">
              <Image src="/logo.png" alt="Varnaya EXIM Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-tight text-white tracking-wide">
                VARNAYA EXIM
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-warm hover:text-gold transition-colors font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#rfq"
              className="px-6 py-2 bg-gradient-to-r from-gold-dark to-gold text-primary font-semibold rounded-full hover:shadow-[0_0_15px_rgba(199,154,66,0.6)] transition-all transform hover:-translate-y-0.5"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base text-gray-warm hover:text-gold py-2"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#rfq"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block text-center px-6 py-3 bg-gold text-primary font-semibold rounded-full w-full mt-4"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
