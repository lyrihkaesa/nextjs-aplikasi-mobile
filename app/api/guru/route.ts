import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const gurus = await prismaClient.guru.findMany({});
  return NextResponse.json({ data: gurus });
};

export const POST = async (req: NextRequest) => {
  const json = await req.json();
  try {
    const guru = await prismaClient.guru.create({
      data: {
        nip: json.nip,
        nama: json.nama,
        status: json.status,
        gaji: json.gaji,
      },
    });

    return NextResponse.json({ data: guru }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Kode guru mungkin sudah digunakan' }, { status: 400 });
  }
};
