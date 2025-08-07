'use client';

import React from 'react';

const steps = [
  {
    title: 'Browse Available Cars',
    description: 'Explore a variety of vehicles and find the one that fits your style and budget.',
    icon: '🚗',
  },
  {
    title: 'Connect With Our Team',
    description: 'Reach out to us for pricing, details, and personalized support.',
    icon: '🤝',
  },
  {
    title: 'Visit and See the Car',
    description: 'Schedule a visit to view the car in person before making any payment.',
    icon: '👀',
  },
  {
    title: 'Finalize Your Choice',
    description: 'Confirm your selection and prepare for pickup or personal arrangement.',
    icon: '✅',
  },
  
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
