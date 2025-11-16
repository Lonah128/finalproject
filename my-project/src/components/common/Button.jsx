// src/components/common/Button.jsx
import React from 'react';

export default function Button({ children, onClick, variant }) {
  let base = "px-6 py-2 rounded font-semibold transition";
  let style = variant === "secondary" 
    ? "bg-secondary text-white hover:bg-secondary/80" 
    : variant === "outline" 
      ? "border border-primary text-primary hover:bg-primary hover:text-white" 
      : "bg-primary text-white hover:bg-primary/80";

  return (
    <button onClick={onClick} className={`${base} ${style}`}>
      {children}
    </button>
  );
}
