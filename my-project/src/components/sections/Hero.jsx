// src/components/sections/Hero.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="bg-primary text-neutral-light flex flex-col items-center justify-center text-center py-32"
    >
      <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
        Welcome to Vellura Fashion
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Discover unique styles that define your personality and elegance.
      </p>
      <Button variant="accent" className="px-8 py-3">
        Shop Now
      </Button>
    </SectionWrapper>
  );
}
