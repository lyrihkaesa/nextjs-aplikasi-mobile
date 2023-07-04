import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const id = params.id;
  const guru = await prismaClient.guru.findUnique({
    where: {
      nip: id,
    },
  });

  if (!guru) {
    return NextResponse.json(
      {
        error: 'No guru code found',
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: guru });
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    let json = await req.json();
    const guru = await prismaClient.guru.update({
      where: {
        nip: id,
      },
      data: {
        nip: json.nip,
        nama: json.nama,
        status: json.status,
        gaji: json.gaji,
      },
    });

    return NextResponse.json({ data: guru });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No guru code found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    await prismaClient.guru.delete({
      where: {
        nip: id,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus pegawai' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No guru code found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
