// src/components/common/SectionWrapper.jsx
import React from 'react';

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <section
      id={id}
      className={`container mx-auto px-6 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
