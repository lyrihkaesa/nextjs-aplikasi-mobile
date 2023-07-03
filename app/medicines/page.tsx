import React from 'react';
import AddMedicine from './add-medicine';
import { prismaClient } from '../utils/database';

const getMedicines = async () => {
  const res = await prismaClient.medicine.findMany({
    select: {
      code: true,
      firebase_key: true,
      name: true,
      price: true,
    },
  });
  return res;
};

const Medicine = async () => {
  const medicines = await getMedicines();

  return (
    <div>
      {/* <div className="mb-2">
        <AddMedicine />
      </div> */}
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Kode</th>
            <th>Nama</th>
            <th>Harga</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.firebase_key}</td>
              <td>{medicine.code}</td>
              <td>{medicine.name}</td>
              <td>{medicine.price !== null ? Number(medicine.price) : 0} </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicine;
