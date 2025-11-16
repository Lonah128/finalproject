// src/components/layout/Header.jsx
import React, { useState } from 'react';
import Navigation from './Navigation';
import Button from '../common/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-heading text-primary">
          Vellura
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Navigation />
          <Button variant="primary">Shop Now</Button>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-primary font-bold focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-neutral-light shadow-md">
          <Navigation isMobile />
          <div className="p-4">
            <Button variant="primary" className="w-full">
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
