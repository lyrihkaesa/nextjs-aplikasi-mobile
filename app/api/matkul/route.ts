import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const matkuls = await prismaClient.matkul.findMany({});
  return NextResponse.json({ data: matkuls });
};

export const POST = async (req: NextRequest) => {
  const { code, firebase_key, name, sks } = await req.json();
  try {
    const matkul = await prismaClient.matkul.create({
      data: {
        code,
        firebase_key,
        name,
        sks,
      },
    });

    return NextResponse.json({ data: matkul }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Kode matkul mungkin sudah digunakan' }, { status: 400 });
  }
};
