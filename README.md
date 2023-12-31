# NextJS Aplikasi Mobile

Ini adalah project fullstack CRUD Medicine yang menggunakan:

- NextJS
- Prisma
- Tailwind CSS
- DaisyUI

## Syarat

Memasang [Git for Windows](https://git-scm.com/download/win) jika menggunakan Windows. Selanjutnya memasang NodeJS LTS 18.xx.xx, bisa menggunakan [Node Version Manager (NVM)](https://github.com/coreybutler/nvm-windows/releases).
Jika sudah memasang NVM, buka `git bash` dalam mode `Run As Administator`.

```bash
nvm install lts
```

```bash
nvm list
```

```bash
nvm use lts
```

Saya sarankan juga install `pnpm` upgrade dari `npm` supaya package yang sering dipakai dapat digunakan kembali tanpa harus mendownload ulang, menghemat `penyimpanan internal` akibat `node_module`

```bash
npm i -g pnpm
```

## Cara Menjalakannya

```bash
git clone https://github.com/lyrihkaesa/nextjs-aplikasi-mobile.git
```

### .env file

Sebelum itu, ganti nama file `.env.example` menjadi `.env` atau salin baru ganti nama.
Nyalakan `mysql` yang ada apada `XAMPP`, dan buat database dengan nama:

```text
kuliah_aplikasi_mobile_crud
```

- Nama diatas menyesuaikan dengan nama yang dibawah.
- Untuk usernamenya: root, dan password default: kosong.

```env
DATABASE_URL="mysql://root:@localhost:3306/kuliah_aplikasi_mobile_crud"
```

---

Sebelum itu install seluruh dependency dengan perintah berikut pada `git bash`

```bash
pnpm install
```

Jalankan perintah `git bash` dibawah untuk membuat tabel pada `schema.prisma` ke database:

```bash
npx prisma migrate dev
```

Jika sudah anda bisa menjalankan perintah dibawah, dan menjalankan <http://localhost:3000> pada browser.

```bash
pnpm run dev
```

- <http://localhost:3000/medicines>
- <http://localhost:3000/teachers>
  - API Spec [Teacher](docs/teacher.md)

---

## Membuka prisma studio

```bash
npx prisma studio
```

Tautan default prisma studio adalah <http://localhost:5555>

```bash
npx prisma studio --port 6969
```

Tautan port tidak default prisma studio adalah <http://localhost:6969>

### Membuat migrations sebelum di push ke database

```bash
npx prisma migrate dev --create-only
```

penamaan migrate saya adalah

```txt
create_table_medicine
```

---

## Postman

Siahkan download postman collection ini untuk uji coba:

- Postman [Colection NextJS Aplikasi Mobile v1.2](./docs/NextJS%20Aplikasi%20Mobile.postman_collection.json)
- Postman [Environment NextJS Aplikasi Mobile v1.2](<docs/NextJS Aplikasi Mobile.postman_environment.json>)
