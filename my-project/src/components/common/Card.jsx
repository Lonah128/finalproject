// src/components/common/Card.jsx
import React from 'react';

export default function Card({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />}
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-neutralDark">{description}</p>
    </div>
  );
}
