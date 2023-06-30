import { prismaClient } from '@/app/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const id = params.id;
  const teacher = await prismaClient.teacher.findUnique({
    where: {
      employee_code: id,
    },
  });

  if (!teacher) {
    return NextResponse.json(
      {
        error: 'No Teacher with the Provide Employee Code Found',
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: teacher });
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    let json = await req.json();

    const teacher = await prismaClient.teacher.update({
      where: {
        employee_code: id,
      },
      data: {
        employee_code: id,
        employee_name: json.employee_name,
        position: json.position,
      },
    });

    return NextResponse.json({ data: teacher });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No Teacher with the Provide Employee Code Found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    await prismaClient.teacher.delete({
      where: {
        employee_code: id,
      },
    });
    return NextResponse.json({ message: 'Berhasil menghapus pegawai' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'No Teacher with the Provide Employee Code Found' }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
