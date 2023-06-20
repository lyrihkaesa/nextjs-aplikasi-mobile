import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const medicines = await prisma.medicine.findMany({});
  return NextResponse.json({ data: medicines });
};

export const POST = async (req: NextRequest) => {
  const { code, name, satuan, price, amount, expired, packaging, type } = await req.json();
  const medicine = await prisma.medicine.create({
    data: {
      code,
      name,
      satuan,
      price,
      amount,
      expired,
      packaging,
      type,
    },
  });

  return NextResponse.json({ data: medicine });
};

export const PUT = async (req: NextRequest) => {
  const { code, name, satuan, price, amount, expired, packaging, type } = await req.json();
  const param = req.nextUrl.searchParams;
  const id = Number(param.get('id'));
  const medicine = await prisma.medicine.update({
    where: {
      id: id,
    },
    data: {
      code,
      name,
      satuan,
      price,
      amount,
      expired,
      packaging,
      type,
    },
  });

  return NextResponse.json({ data: medicine });
};

export const DELETE = async (req: NextRequest) => {
  const param = req.nextUrl.searchParams;
  const id = Number(param.get('id'));
  try {
    await prisma.medicine.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus obat' });
  } catch (error) {
    return NextResponse.json({ message: 'Id obat tidak ada' }, { status: 500 });
  }
};
