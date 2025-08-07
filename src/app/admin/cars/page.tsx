'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Car {
  id: number; // your schema uses Int id
  title: string;
  description: string;
  brand: string;
  status: 'Available' | 'Sold' | string; // allow other statuses as string
  image: string;
}

export default function CarsAdminPage() {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch('/api/cars');
        if (!res.ok) throw new Error('Failed to fetch cars');
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error('Error loading cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/cars?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete car');
      }

      setCars((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error('Failed to delete car:', error);
      if (error instanceof Error) {
        alert('Failed to delete car: ' + error.message);
      } else {
        alert('Failed to delete car: Unknown error');
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cars Management</h1>
        <button
          onClick={() => router.push('/admin/cars/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Car
        </button>
      </div>

      {loading ? (
        <p>Loading cars...</p>
      ) : cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded shadow overflow-hidden relative"
            >
              <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-3 py-1 rounded z-10">
                {car.status}
              </div>
              <img
                src={
                  car.image && car.image.trim() !== ''
                    ? `/uploads/${car.image}`
                    : '/images/placeholder.jpg'
                }
                alt={car.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{car.title}</h2>
                <p className="text-sm text-gray-600 mb-1">Brand: {car.brand}</p>
                <p className="text-sm text-gray-600 mb-4">{car.description}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => router.push(`/admin/cars/edit/${car.id}`)}
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="flex items-center text-red-600 hover:underline"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
