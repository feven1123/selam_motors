'use client';

import React from 'react';

const companies = [
  {
    name: 'Selam Motors',
    logo: '/logos/selam-motors.png', // replace with actual path
    website: 'https://selammotors.com',
  },
  {
    name: 'Zemen Logistics',
    logo: '/logos/zemen-logistics.png',
    website: 'https://zemenlogistics.com',
  },
  {
    name: 'Abyssinia Auto',
    logo: '/logos/abyssinia-auto.png',
    website: 'https://abyssiniaauto.com',
  },
  {
    name: 'Ethio Spare Parts',
    logo: '/logos/ethio-spare-parts.png',
    website: 'https://ethiospareparts.com',
  },
];

export default function SisterCompanies() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Sister Companies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
            >
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="h-20 object-contain"
              />
              <p className="text-sm font-medium">{company.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
