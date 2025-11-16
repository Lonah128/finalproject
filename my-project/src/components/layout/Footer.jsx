// src/components/layout/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutralDark text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Vellura Fashion</h3>
        <p className="mb-4">Premium fashion for every style. Join our community and stay stylish.</p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="hover:text-primary transition">Instagram</a>
          <a href="#" className="hover:text-primary transition">Facebook</a>
          <a href="#" className="hover:text-primary transition">Twitter</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Vellura Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
}
