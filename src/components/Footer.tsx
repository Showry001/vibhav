import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-white">Vibha Infra</h3>
            </div>
            <p className="mb-4">
              Excellence in construction since 1998. Building tomorrow's landmarks with precision and innovation.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-yellow-500 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Commercial Construction", "Residential Projects", "Industrial Buildings", "Renovations", "Interior Design"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Projects", "Careers", "News", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "123 Construction Ave, Building City, BC 12345" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "info@vibhainfra.com" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Vibha Infra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}