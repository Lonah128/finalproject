// src/components/sections/Testimonials.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../common/Card';

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Sophia L.", 
      role: "Fashion Blogger", 
      feedback: "Vellura Fashion transformed my wardrobe! Every piece is premium quality.",
      image: "/images/testimonials/sophia.jpg"
    },
    { 
      name: "Ethan M.", 
      role: "Entrepreneur", 
      feedback: "The attention to detail and style is unmatched. I recommend Vellura to all my friends.",
      image: "/images/testimonials/ethan.jpg"
    },
    { 
      name: "Isabella R.", 
      role: "Stylist", 
      feedback: "Amazing collection with elegant designs. Shopping here is a delightful experience!",
      image: "/images/testimonials/isabella.jpg"
    },
  ];

  return (
    <SectionWrapper id="testimonials">
      <h3 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card 
            key={i} 
            title={t.name} 
            subtitle={t.role}
            description={t.feedback} 
            image={t.image}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
