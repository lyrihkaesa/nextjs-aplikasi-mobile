'use client';

import { useState } from 'react';

const AddMedicine = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button type="button" className="btn" onClick={handleModal}>
        Tambah Baru
      </button>
      <div className={isOpen ? 'modal modal-open overflow-y-auto' : 'modal'}>
        <div className="modal-box max-h-max m-auto">
          <h3 className=" font-bold text-lg">Menambahkan Obat</h3>
          <form action="">
            <div className="form-control w-full">
              <label htmlFor="code" className="label font-bold"></label>
              <input id="code" type="text" className="input input-bordered" placeholder="Kode obat" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="name" className="label font-bold"></label>
              <input id="name" type="text" className="input input-bordered" placeholder="Nama obat" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="satuan" className="label font-bold"></label>
              <input id="satuan" type="text" className="input input-bordered" placeholder="Satuan obat" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="price" className="label font-bold"></label>
              <input id="price" min={0} type="number" className="input input-bordered" placeholder="Harga obat" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="amount" className="label font-bold"></label>
              <input id="amount" min={0} type="number" className="input input-bordered" placeholder="Jumlah obat" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="packaging" className="label font-bold"></label>
              <input id="packaging" type="text" className="input input-bordered" placeholder="Packaging obat" />
            </div>
            <div className="form-control w-full">
              <label htmlFor="type" className="label font-bold"></label>
              <input id="type" type="text" className="input input-bordered" placeholder="Type obat" />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Batal
              </button>
              <button type="button" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
