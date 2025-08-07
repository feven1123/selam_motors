'use client';

import React from 'react';

const features = [
  {
    icon: '🔧',
    title: 'Complete Inspection',
    description: 'Every vehicle undergoes a thorough multi-point inspection for quality assurance.',
  },
  {
    icon: '🛠️',
    title: 'Free Maintenance',
    description: 'Enjoy complimentary maintenance services within the first 6 months.',
  },
  {
    icon: '📋',
    title: 'Detailed Documentation',
    description: 'We provide full documentation to ensure hassle-free ownership transfer.',
  },
  {
    icon: '🚗',
    title: 'Test Drive',
    description: 'Schedule a test drive to experience your car before finalizing.',
  },
];

export default function YourCarComesWith() {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Your Car Comes With</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
