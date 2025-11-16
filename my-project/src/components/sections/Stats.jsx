// src/components/sections/Stats.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

export default function Stats() {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Exclusive Products" },
    { value: "25", label: "Global Partners" },
    { value: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <SectionWrapper id="stats" className="bg-neutralLight">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-primary mb-2">{s.value}</h3>
            <p className="text-neutralDark">{s.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
