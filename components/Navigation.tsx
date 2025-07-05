'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'BLOGS', href: '/blogs' },
  { name: 'ARTICLES', href: '/articles' },
  { name: 'POEMS', href: '/poems' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'CONTACT US', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-chocolaty-dark/95 backdrop-blur-md border-b border-chocolaty">
      <div className="container mx-auto px-4">
        {/* Header with Logo over Background */}
        <div className="relative py-6">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1600')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="relative z-10 text-center">
            <Link href="/" className="text-3xl font-bold text-cream hover-glow transition-all duration-300">
              ManavInVerses
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex items-center justify-end py-4 border-t border-chocolaty">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-mocha hover-glow ${
                    pathname === item.href ? 'text-mocha' : 'text-beige'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mocha shadow-lg"
                      layoutId="navbar-indicator"
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mocha opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center justify-end py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-beige hover:text-mocha transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-chocolaty-medium border-t border-chocolaty"
          >
            <ul className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors hover:text-mocha ${
                      pathname === item.href ? 'text-mocha' : 'text-beige'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}