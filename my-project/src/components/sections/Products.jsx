// src/components/sections/Products.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../common/Card';

export default function Products() {
  const products = [
    {
      title: "Evening Dress",
      description: "Beautiful elegant evening dress.",
      image: "https://images.pexels.com/photos/32866677/pexels-photo-32866677.jpeg",
    },
    {
      title: "Casual Shirt",
      description: "Comfortable and stylish for daily wear.",
      image: "https://image.made-in-china.com/365f3j00NqEcYmgzgbkT/Latest-Fashion-Formal-Clothing-Business-Casual-Check-Short-Sleeve-Plaid-Iron-Dress-Shirts-for-Man.webp",
    },
    {
      title: "Running Shoes",
      description: "Lightweight and durable running shoes.",
      image: "https://images.pexels.com/photos/34809940/pexels-photo-34809940.jpeg",
    },
    {
      title: "Leather Handbag",
      description: "Stylish handbag made from genuine leather.",
      image: "https://images.pexels.com/photos/11031116/pexels-photo-11031116.png",
    },

    // 🔥 Added Products
    {
      title: "Denim Jacket",
      description: "Classic denim jacket perfect for any outfit.",
      image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    },
    {
      title: "Sports Watch",
      description: "Waterproof sports watch with modern features.",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    },
    {
      title: "Sunglasses",
      description: "UV-protected stylish sunglasses.",
      image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    },
    {
      title: "Winter Coat",
      description: "Warm and cozy winter coat for cold weather.",
      image: "https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg",
    },
    {

      title: "Backpack",
      description: "Durable and spacious travel backpack.",
      image: "https://images.pexels.com/photos/34794749/pexels-photo-34794749.jpeg ",
    },
    {
      title: "Heels",
      description: "Stylish high heels for special occasions.",
      image: "https://images.pexels.com/photos/1445697/pexels-photo-1445697.jpeg",
    },
  ];

  return (
    <SectionWrapper title="Products">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
