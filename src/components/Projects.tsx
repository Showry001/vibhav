import React from 'react';

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description: "25-story state-of-the-art office building"
  },
  {
    title: "Luxury Residences",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    description: "High-end apartment complex"
  },
  {
    title: "Shopping Mall",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    description: "Modern retail space development"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Latest Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of award-winning construction projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up-delay-${index + 1}`}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <span className="text-yellow-400 text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}