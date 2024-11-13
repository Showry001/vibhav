import React from 'react';
import { Building2, HardHat, Shield, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-40 pb-16">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Building Tomorrow's Landmarks Today
          </h1>
          <p className="text-xl mb-8 text-gray-200 animate-slide-up-delay-1">
            With 25 years of excellence in construction, we transform visions into reality through innovative design and superior craftsmanship.
          </p>
          <div className="flex gap-4 animate-slide-up-delay-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Our Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-white">
          {[
            { icon: Building2, text: "500+ Projects", subtext: "Completed" },
            { icon: Trophy, text: "25+ Years", subtext: "Experience" },
            { icon: Shield, text: "100%", subtext: "Safety Record" },
            { icon: HardHat, text: "250+", subtext: "Expert Team" }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 bg-black/30 p-4 rounded-lg backdrop-blur-sm transform transition-all duration-500 animate-slide-up-delay-${index + 3}`}
            >
              <item.icon className="w-12 h-12 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold">{item.text}</div>
                <div className="text-gray-300">{item.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}