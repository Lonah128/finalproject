// src/components/sections/Features.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../common/Card';

export default function Features() {
  const features = [
    { title: "Premium Quality", description: "High-end fabrics and materials for lasting style." },
    { title: "Unique Designs", description: "Original designs that make you stand out." },
    { title: "Sustainable", description: "Eco-friendly production for a better future." },
  ];

  return (
    <SectionWrapper id="features" className="bg-neutral-light">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Our Features
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Card key={i} title={f.title} description={f.description} />
        ))}
      </div>
    </SectionWrapper>
  );
}
