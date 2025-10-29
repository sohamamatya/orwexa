"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50" style={{backgroundColor: 'rgba(18, 20, 29, 0.8)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-40 h-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Orweza"
                fill
                className="object-contain"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'transparent'}}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
