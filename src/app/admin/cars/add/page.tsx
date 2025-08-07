'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

export default function AddCarPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    brand: '',
    status: 'Available',
    image: '',
  });

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

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add car');
      }

      router.push('/admin/cars');
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error adding car: ${error.message}`);
      } else {
        alert('An unknown error occurred while adding the car.');
      }
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Car</h1>

      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-gray-400 rounded text-sm text-gray-600 hover:bg-gray-100 mb-2"
      >
        <Plus className="w-4 h-4 mr-2" />
        Choose Image
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
        <option value="Featured">Featured</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Car
      </button>
    </div>
  );
}
