// File: app/api/cars/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET: fetch all cars
export async function GET() {
  try {
    const cars = await prisma.cars.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(cars);
  } catch (error) {
    console.error('GET cars error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST: add new car
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, brand, status, image } = body;

    // Validation
    if (!title || !description || !brand || !status || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newCar = await prisma.cars.create({
      data: {
        title,
        description,
        brand,
        status,
        image,
      },
    });

    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.error('POST /api/cars error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT: update existing car
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, brand, status, image } = body;

    if (!id || !title || !description || !brand || !status || !image) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const updated = await prisma.cars.update({
      where: { id: Number(id) },
      data: { title, description, brand, status, image },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PUT /api/cars error:', error);
    return NextResponse.json({ error: 'Failed to update car' }, { status: 500 });
  }
}

// DELETE car
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');

  const id = idParam ? parseInt(idParam, 10) : null;

  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'Invalid or missing car ID' }, { status: 400 });
  }

  try {
    await prisma.cars.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Car deleted' }, { status: 200 });
  } catch (error) {
    console.error('DELETE car error:', error);
    return NextResponse.json({ error: 'Failed to delete car' }, { status: 500 });
  }
}
