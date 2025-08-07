'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/TopBar';

interface Car {
  id: number;
  title: string;
  description: string;
  brand: string;
  status: string;
  createdAt: string;
  image: string;
  updatedAt: string;
  isFeatured?: boolean;
}

export default function CarsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'available' | 'sold' | 'featured'>('all');
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch('/api/cars');
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error('Error loading cars:', error);
      }
    }

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.title.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === 'all' ||
      (filter === 'available' && car.status === 'Available') ||
      (filter === 'sold' && car.status === 'Sold') ||
      (filter === 'featured' && car.isFeatured === true);

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Topbar />
      <Header />

      <main className="pt-20 bg-white">
        <section className="bg-gray-200 text- py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Car Listings</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse and search through our available, sold, and featured cars.
          </p>
        </section>

        <section className="bg-white py-10 px-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Search by title or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring focus:border-primary"
            />
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {['all', 'available', 'sold', 'featured'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as 'all' | 'available' | 'sold' | 'featured')}
                  className={`px-4 py-2 rounded border font-medium ${
                    filter === type
                      ? 'bg-blue-600 text-white bg-blue-600'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={
                      car.image && car.image.trim() !== ''
                        ? `/uploads/${car.image}`
                        : '/images/placeholder.jpg'
                    }
                    alt={car.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-1">{car.title}</h3>
                <p className="text-sm text-gray-500">{car.brand}</p>
                <p
                  className={`text-sm font-medium mt-2 ${
                    car.status === 'Sold'
                      ? 'text-red-600'
                      : car.status === 'Available'
                      ? 'text-green-600'
                      : 'text-blue-600'
                  }`}
                >
                  {car.status}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={`/Cars/${car.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-medium"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center text-gray-500 mt-10">No cars found.</div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
