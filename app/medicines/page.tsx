import React from 'react';
import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import AddMedicine from './add-medicine';

const prisma = new PrismaClient();

const getMedicines = async () => {
  const res = await prisma.medicine.findMany({
    select: {
      id: true,
      code: true,
      name: true,
      satuan: true,
      price: true,
      amount: true,
      expired: true,
      packaging: true,
      type: true,
    },
  });
  return res;
};

const Medicine = async () => {
  const medicines = await getMedicines();

  return (
    <div>
      <div className="mb-2">
        <AddMedicine />
      </div>
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Satuan</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Tanggal Kadaluarsa</th>
            <th>Kemasan</th>
            <th>Tipe</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.code}</td>
              <td>{medicine.name}</td>
              <td>{medicine.satuan}</td>
              <td>{medicine.price && '0'}</td>
              <td>{medicine.amount}</td>
              <td>{medicine.expired && '0'}</td>
              <td>{medicine.packaging}</td>
              <td>{medicine.type}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicine;
