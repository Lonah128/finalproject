// src/App.jsx
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="font-sans text-neutralDark bg-neutralLight">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
