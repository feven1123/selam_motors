'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Topbar from '@/components/TopBar'; 

interface Car {
  id: number;
  title: string;
  description: string;
  brand: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
}

export default function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const res = await fetch('/api/cars');
        const data: Car[] = await res.json();
        const foundCar = data.find((c) => c.id === Number(id));
        setCar(foundCar || null);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCar();
  }, [id]);

  if (!car) {
    return (
      <>
        <Topbar />
        <Header />
        <main className="min-h-screen pt-28 text-center">
          <h1 className="text-2xl text-gray-600">Car not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Topbar />
      <Header />
      <main className="pt-20 max-w-4xl mx-auto p-4">
        {/* Car Image */}
        <div className="relative w-full h-64 rounded overflow-hidden shadow mb-6">
          <Image
            src={car.image || '/images/placeholder.jpg'}
            alt={car.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Car Details */}
        <h1 className="text-3xl font-bold mb-2">{car.title}</h1>
        <p className="mb-2 text-gray-700">{car.description}</p>
        <p className="mb-2 font-semibold">Brand: {car.brand}</p>
        <p className="mb-6">
          Status: <span className="font-medium">{car.status}</span>
        </p>

        {/* Visit Request Form */}
        <h2 className="text-2xl font-semibold mb-4">Send a Visit Request</h2>

        <form
          action="https://formsubmit.co/favumail20@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_subject"
            value={`Visit request for ${car.title}`}
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/Cars"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name *"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email *"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message *"
            className="w-full border px-3 py-2 rounded"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Request
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
