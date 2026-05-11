"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020b1a] border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1">
                <Image src="/logo.png" alt="Varnaya EXIM Logo" fill className="object-contain" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-wide">
                VARNAYA EXIM
              </span>
            </div>
            <p className="text-gray-warm text-sm max-w-sm mb-6 leading-relaxed">
              Born golden. Traded global. Premium Turmeric and agricultural commodities exported worldwide from the heartland of Karnataka.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/varnaya-exim" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:varnayaexim@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/917483540440" target="_blank" rel="noreferrer" aria-label="Phone / WhatsApp" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-warm text-sm hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="#products" className="text-gray-warm text-sm hover:text-gold transition-colors">Our Products</Link></li>
              <li><Link href="#global-reach" className="text-gray-warm text-sm hover:text-gold transition-colors">Global Reach</Link></li>
              <li><Link href="#contact" className="text-gray-warm text-sm hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-warm">
              <li>Gokak, Belagavi District</li>
              <li>Karnataka – 591307, India</li>
              <li className="pt-2">varnayaexim@gmail.com</li>
              <li>+91 7483540440</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Varnaya EXIM. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
