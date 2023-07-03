import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const id = params.id;
  const medicine = await prismaClient.medicine.findUnique({
    where: {
      code: id,
    },
  });

  if (!medicine) {
    return NextResponse.json(
      {
        error: 'No medicine code found',
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: medicine });
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    let { firebase_key, name, price } = await req.json();

    const medicine = await prismaClient.medicine.update({
      where: {
        code: id,
      },
      data: {
        code: id,
        firebase_key,
        name,
        price,
      },
    });

    return NextResponse.json({ data: medicine });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No medicine code found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    await prismaClient.medicine.delete({
      where: {
        code: id,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus pegawai' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No medicine code found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
