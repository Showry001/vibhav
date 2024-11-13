import React from 'react';
import { Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <img
              className="w-8 h-8"
              src="https://photos.app.goo.gl/aZf36Sd8ZMKbop5h8"
            />
            <span className="text-2xl font-bold text-gray-900">
              Vibha Infra
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Services', href: '#services' },
              { name: 'Projects', href: '#projects' },
              { name: 'About', href: '#about' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-yellow-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
