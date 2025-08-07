'use client';

import React from 'react';

const reasons = [
  {
    icon: '⭐',
    title: 'Trusted Quality',
    description: 'We carefully select vehicles to ensure top quality and reliability.',
  },
  {
    icon: '🤝',
    title: 'Personalized Support',
    description: 'Our team is here to assist you at every step with friendly guidance.',
  },
  {
    icon: '🚀',
    title: 'Fast & Secure Process',
    description: 'We streamline your experience to get your dream car quickly and safely.',
  },
  {
    icon: '🌍',
    title: 'Nationwide Reach',
    description: 'We deliver vehicles safely across Ethiopia with expert handling.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
