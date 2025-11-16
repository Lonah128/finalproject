// src/components/layout/Navigation.jsx
import React from 'react';

export default function Navigation({ isMobile }) {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Stats", href: "#stats" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className={`${isMobile ? 'flex flex-col gap-4 p-4' : 'flex gap-6 items-center'}`}>
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.href}
            className="text-neutral-dark hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
