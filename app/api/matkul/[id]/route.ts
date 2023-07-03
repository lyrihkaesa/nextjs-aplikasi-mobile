import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const id = params.id;
  const matkul = await prismaClient.matkul.findUnique({
    where: {
      code: id,
    },
  });

  if (!matkul) {
    return NextResponse.json(
      {
        error: 'No matkul code found',
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: matkul });
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    let { firebase_key, name, sks } = await req.json();

    const matkul = await prismaClient.matkul.update({
      where: {
        code: id,
      },
      data: {
        code: id,
        firebase_key,
        name,
        sks,
      },
    });

    return NextResponse.json({ data: matkul });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No matkul code found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    await prismaClient.matkul.delete({
      where: {
        code: id,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus pegawai' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No matkul code found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
