'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Topbar from '@/components/TopBar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Header />
      <div style={{ height: '80px' }} />
      <main className="min-h-screen bg-white">

        {/* Intro Section */}
        <section className="bg-gray-200 text- py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Selam Motors</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Bringing you quality vehicles from trusted sources with integrity and care.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto text-justify">
            Selam Motors is a leading vehicle import and sales company in Ethiopia, dedicated
            to connecting customers with a wide selection of quality cars sourced globally.
            Our mission is to provide a seamless and transparent buying experience, helping
            you drive your dream car home safely and confidently.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Why Choose Selam Motors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Wide Vehicle Selection</h3>
              <p className="text-gray-600">Access to cars from trusted markets like Japan, Dubai, and Europe.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Personalized Service</h3>
              <p className="text-gray-600">Expert support to help you find the perfect car within your budget.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Reliable Process</h3>
              <p className="text-gray-600">Transparent transactions and safe delivery to Ethiopia.</p>
            </div>
          </div>
        </section>

        {/* Image and Description Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
            <div className="flex-1">
              <Image
                src="/images/cars-showroom.jpg"
                alt="Selam Motors Vehicles"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Committed to Quality</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We thoroughly inspect all vehicles and ensure every car meets high standards
                before it reaches you, giving you peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* CEO's Message Section */}
        <section className="py-16 px-6 bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">Message from the CEO</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to Selam Motors! We are committed to delivering exceptional service
                and quality vehicles to our customers across Ethiopia. Your satisfaction drives us forward.
              </p>
              <p className="mt-6 font-semibold text-gray-700">— Mr. Yonas Alemu, CEO</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/ceo-mr-yonas.jpg"
                alt="CEO Mr. Yonas Alemu"
                width={350}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sister Companies Section */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Sister Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
              {[
                { name: 'Selam Logistics', logo: '/images/sister1.png' },
                { name: 'Zemen Transport', logo: '/images/sister2.png' },
                { name: 'Abyssinia Auto Parts', logo: '/images/sister3.png' },
                { name: 'Ethio Car Care', logo: '/images/sister4.png' },
                { name: 'Selam Financial Services', logo: '/images/sister5.png' },
                { name: 'Selam Insurance', logo: '/images/sister6.png' },
              ].map((company) => (
                <div key={company.name} className="flex flex-col items-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={64}
                    height={64}
                    className="object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-gray-700">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
