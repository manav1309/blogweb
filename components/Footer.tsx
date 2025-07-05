'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  // Don't show footer on contact page
  if (pathname === '/contact') {
    return null;
  }

  return (
    <footer className="relative bg-chocolaty-dark overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-amber-600/30 to-orange-500/30 pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream">ManavInVerses</h3>
            <p className="text-beige mb-6 leading-relaxed">
              A creative sanctuary where thoughts become words, and words become worlds. 
              Join me on this literary journey through the depths of human experience.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-beige hover:text-mocha transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-beige hover:text-mocha transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-beige hover:text-mocha transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blogs"
                  className="text-beige hover:text-mocha transition-colors duration-300 hover-glow"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-beige hover:text-mocha transition-colors duration-300 hover-glow"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/poems"
                  className="text-beige hover:text-mocha transition-colors duration-300 hover-glow"
                >
                  Poems
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-beige hover:text-mocha transition-colors duration-300 hover-glow"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-mocha" />
                <span className="text-beige">manavpuri2013@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-mocha" />
                <span className="text-beige">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-mocha" />
                <span className="text-beige">New York, NY</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-chocolaty-light hover:bg-mocha text-cream px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-chocolaty mt-8 pt-8 text-center text-beige">
          <p>&copy; 2024 ManavInVerses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}