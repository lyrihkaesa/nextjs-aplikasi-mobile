import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const medicines = await prismaClient.medicine.findMany({});
  return NextResponse.json({ data: medicines });
};

export const POST = async (req: NextRequest) => {
  const { code, firebase_key, name, price } = await req.json();
  try {
    const medicine = await prismaClient.medicine.create({
      data: {
        code,
        firebase_key,
        name,
        price,
      },
    });

    return NextResponse.json({ data: medicine }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Kode medicine mungkin sudah digunakan' }, { status: 400 });
  }
};
