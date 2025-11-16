// src/components/sections/Contact.jsx
import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-6">Have questions or want to collaborate? Reach out to us!</p>
      <Button>Contact Us</Button>
    </SectionWrapper>
  );
}
