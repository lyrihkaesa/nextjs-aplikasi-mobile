import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const teachers = await prismaClient.teacher.findMany({});
  return NextResponse.json({ data: teachers });
};

export const POST = async (req: NextRequest) => {
  const { employee_code, firebase_key, employee_name, position } = await req.json();
  try {
    const teacher = await prismaClient.teacher.create({
      data: {
        employee_code,
        firebase_key,
        employee_name,
        position,
      },
    });

    return NextResponse.json({ data: teacher }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'kode pegawai mungkin sudah digunakan' }, { status: 400 });
  }
};

export const PUT = async (req: NextRequest) => {
  const { firebase_key, employee_name, position } = await req.json();
  const param = req.nextUrl.searchParams;
  const employee_code = param.get('employee_code');
  if (employee_code === undefined && employee_code === null) {
    return NextResponse.json({ message: 'kode pegawai tidak ada' }, { status: 400 });
  }
  try {
    const teacher = await prismaClient.teacher.update({
      where: {
        employee_code: employee_code!,
      },
      data: {
        employee_code: employee_code!,
        firebase_key,
        employee_name,
        position,
      },
    });
    return NextResponse.json({ data: teacher });
  } catch (error) {
    return NextResponse.json({ error: 'kode pegawai tidak ada' }, { status: 400 });
  }
};

export const DELETE = async (req: NextRequest) => {
  const param = req.nextUrl.searchParams;
  const employee_code = param.get('employee_code');
  if (employee_code === undefined && employee_code === null) {
    return NextResponse.json({ message: 'kode pegawai tidak ada' }, { status: 400 });
  }
  try {
    await prismaClient.teacher.delete({
      where: {
        employee_code: employee_code!,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus pegawai' });
  } catch (error) {
    return NextResponse.json({ error: 'kode pegawai tidak ada' }, { status: 400 });
  }
};
