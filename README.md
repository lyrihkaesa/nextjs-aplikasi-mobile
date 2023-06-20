# CRUD Medicine

Ini adalah project fullstack CRUD Medicine yang menggunakan:

- NextJS
- Prisma
- Tailwind CSS
- DaisyUI

## Cara Menjalakannya

```bash
git clone
```

Sebelum itu, ganti nama file `.env.example` menjadi `.env` atau salin baru ganti nama.
Nyalakan `mysql` yang ada apada `XAMPP`, dan buat database dengan nama:

```text
kuliah_aplikasi_mobile_crud
```

Nama diatas menyesuaikan dengan nama yang dibawah.

Untuk usernamenya: root, dan password default: kosong.

```env
DATABASE_URL="mysql://root:@localhost:3306/kuliah_aplikasi_mobile_crud"
```

Jalankan perintah dibawah untuk membuat tabel pada schema.prisma ke database:

```bash
npx prisma migrate dev
```

Jika sudah anda bisa menjalankan perintah dibawah, dan menjalankan [http://localhost:3000](http://localhost:3000) pada browser.

```bash
pnpm run dev
```

### Membuat migrations sebelum di push ke database

```bash
npx prisma migrate dev --create-only
```

### Membuka prisma studio

```bash
npx prisma studio
```
