import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const totalCars = await prisma.cars.count();
    const available = await prisma.cars.count({ where: { status: "Available" } });
    const sold = await prisma.cars.count({ where: { status: "Sold" } });
    const featured = await prisma.cars.count({ where: { status: "Featured" } });

    return NextResponse.json({
      stats: [
        { title: 'Total Cars', value: totalCars },
        { title: 'Available Cars', value: available },
        { title: 'Sold Cars', value: sold },
        { title: 'Featured Cars', value: featured },
      ],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load dashboard data' }, { status: 500 });
  }
}
