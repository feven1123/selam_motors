'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Car {
  id: number;
  title: string;
  description: string;
  brand: string;
  status: string; // 'Available', 'Sold', etc.
  createdAt: string;
  updatedAt: string;
  image: string;
  isFeatured?: boolean;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState([
    { title: 'Total Cars', value: 0 },
    { title: 'Available Cars', value: 0 },
    { title: 'Sold Cars', value: 0 },
    { title: 'Featured Cars', value: 0 },
  ]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch('/api/cars');
        if (!res.ok) throw new Error('Failed to fetch cars');
        const data: Car[] = await res.json();

        const total = data.length;
        const available = data.filter(c => c.status === 'Available').length;
        const sold = data.filter(c => c.status === 'Sold').length;
        const featured = data.filter(c => c.isFeatured).length;

        setStats([
          { title: 'Total Cars', value: total },
          { title: 'Available Cars', value: available },
          { title: 'Sold Cars', value: sold },
          { title: 'Featured Cars', value: featured },
        ]);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    }

    fetchCars();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-gray-600 text-md">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sample Sales Chart (dummy data, replace with your own later) */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { name: 'Jan', sales: 10 },
                { name: 'Feb', sales: 15 },
                { name: 'Mar', sales: 8 },
                { name: 'Apr', sales: 20 },
                { name: 'May', sales: 25 },
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
