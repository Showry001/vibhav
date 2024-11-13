import React from 'react';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Trust Our Expertise?</h2>
            <p className="text-gray-600 mb-8">
              With decades of experience and a commitment to excellence, we've established ourselves as industry leaders in construction and development.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: CheckCircle, title: "Quality Guaranteed", text: "ISO 9001 certified construction processes" },
                { icon: Users, title: "Expert Team", text: "Highly skilled professionals and craftsmen" },
                { icon: Clock, title: "On-Time Delivery", text: "98% projects completed within deadline" },
                { icon: Award, title: "Award Winning", text: "Multiple industry awards for excellence" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                alt="Construction site"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <div className="text-white">
                  <p className="text-3xl font-bold">25+</p>
                  <p className="text-lg">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}