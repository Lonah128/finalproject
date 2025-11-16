// src/components/sections/About.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold text-center mb-6">About Vellura Fashion</h2>
      <p className="text-center text-lg max-w-2xl mx-auto">
        Vellura Fashion is dedicated to creating premium, sustainable, and unique clothing that reflects your personality and style. Our collections are designed with care, focusing on quality, originality, and elegance.
      </p>
    </SectionWrapper>
  );
}
