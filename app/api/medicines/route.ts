import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const medicines = await prismaClient.medicine.findMany({});
  return NextResponse.json({ data: medicines });
};

export const POST = async (req: NextRequest) => {
  const { code, name, satuan, price, amount, expired, packaging, type } = await req.json();
  const medicine = await prismaClient.medicine.create({
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
  const medicine = await prismaClient.medicine.update({
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
    await prismaClient.medicine.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus obat' });
  } catch (error) {
    return NextResponse.json({ message: 'Id obat tidak ada' }, { status: 500 });
  }
};
