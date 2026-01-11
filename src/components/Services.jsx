import React from 'react';

const ServiceItem = ({ title, desc }) => (
  <div className="px-6 py-8 first:pl-0 last:pr-0">
    <div className="w-12 h-12 bg-gray-100 rounded-full mb-6"></div> {/* Placeholder Cercle Gris */}
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-xs text-gray-500 leading-relaxed">
      {desc}
    </p>
  </div>
);

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-xs font-bold text-gray-800 mb-6 max-w-xs leading-relaxed">
        Mes compétences phares.
      </div>
      
      {/* Container avec bordures haut/bas */}
      <div className="border-t border-b border-gray-200">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <ServiceItem 
            title="Framework côté client" 
            desc="Designing modern, responsive interfaces with React, Tailwind CSS and Framer Motion. Creating intuitive experiences." 
          />
          <ServiceItem 
            title="UX/UI design" 
            desc="Designing modern, responsive interfaces with Figma. Creating intuitive experiences with clean design systems." 
          />
          <ServiceItem 
            title="Frameworks côté serveurs" 
            desc="Building robust backends with Node.js. Ensuring security, scalability and performance for your applications." 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;