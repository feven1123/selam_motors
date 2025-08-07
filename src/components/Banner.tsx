'use client';

import React, { useEffect, useState, CSSProperties } from 'react';
import './Banner.css';

const images = [
  '/images/22.png',
  '/images/33.png',
  '/images/65.png',
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-image 20s ease-in-out',
  };

  return (
    <div className="banner-container">
      <div className="banner-slide" style={backgroundStyle}>
        <div className="banner-content">
          <h1>Import Your Dream Car</h1>
          <p>Trusted, Affordable, and Modern Car Deals Across Ethiopia</p>
        </div>
      </div>
    </div>
  );
}
