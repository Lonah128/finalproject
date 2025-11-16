// src/components/sections/Products.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../common/Card';

export default function Products() {
  const products = [
    { title: "Elegant Dress", description: "Perfect for evening events." },
    { title: "Casual Shirt", description: "Comfortable and stylish for daily wear." },
    { title: "Luxury Jacket", description: "Premium outerwear for all seasons." },
  ];

  return (
    <SectionWrapper id="products">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => <Card key={i} title={p.title} description={p.description} />)}
      </div>
    </SectionWrapper>
  );
}
