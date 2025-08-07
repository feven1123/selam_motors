'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

interface Car {
  id: number;
  title: string;
  description: string;
  brand: string;
  status: 'Available' | 'Sold' | string;
  image: string;
}

export default function EditCarPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<Car>({
    id: Number(id),
    title: '',
    description: '',
    brand: '',
    status: 'Available',
    image: '',
  });

  useEffect(() => {
    async function fetchCar() {
      try {
        const res = await fetch('/api/cars');
        const data: Car[] = await res.json();
        const car = data.find((c) => c.id === Number(id));
        if (car) setFormData(car);
      } catch (error) {
        console.error('Failed to fetch car', error);
      }
    }
    fetchCar();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/cars', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to update car');
      router.push('/admin/cars');
    } catch (error) {
      alert('Error updating car');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Car</h1>

      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-gray-400 rounded text-sm text-gray-600 hover:bg-gray-100 mb-2"
      >
        <Plus className="w-4 h-4 mr-2" />
        Change Image
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      {formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full mb-4 border px-3 py-2 rounded"
      >
        <option value="Available">Available</option>
        <option value="Sold">Sold</option>
      </select>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Changes
      </button>
    </div>
  );
}
