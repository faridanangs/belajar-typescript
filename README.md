Belajar TypeScript Dasar
Kenapa Menggunakan TypeScript di Development Bukan di Dependency
Biasanya TypeScript digunakan di mode development karena kode TypeScript akan dikompilasi menjadi kode JavaScript.

Menambah TypeScript
Jalankan perintah:
sh
Copy code
npm i --save-dev typescript
Setup Proyek TypeScript
Inisialisasi proyek TypeScript:
sh
Copy code
npx tsc --init
Semua konfigurasi akan dibuat di file tsconfig.json.
Ubah nilai "module" dari "commonjs" menjadi "ES6" di file tsconfig.json.
Penanganan TypeScript File
Tidak perlu menambah tipe seperti .js atau .ts karena ketika dikompilasi tidak akan error.

Contoh:
typescript
Copy code
import { sayHello } from "../src/say-hello";
Include dan Exclude
Secara default, semua file .ts akan dikompilasi oleh TypeScript. Namun, kita bisa mengatur file mana yang perlu atau tidak perlu dikompilasi.

Misalnya, kita hanya ingin mengkompilasi kode program dan tidak butuh mengkompilasi kode unit test.
Kita bisa menambahkan pengaturan include dan exclude di tsconfig.json.
Deklarasi Variabel
TypeScript bisa otomatis mendeteksi tipe data yang digunakan, namun kita juga bisa menentukan tipe data secara eksplisit.

Contoh:
typescript
Copy code
const namaVariable: typeData = value;
Babel TypeScript
Untuk menjalankan unit test, kita menggunakan Jest dan Babel.

Banyak programmer yang mengeluh karena proses development lambat karena harus dikompilasi terlebih dahulu.
Oleh karena itu, kita harus secara rutin melakukan pengecekan dengan perintah:
sh
Copy code
npx tsc
Ini untuk memastikan tidak ada kode TypeScript yang bermasalah.
Catatan
Jika kita mengubah nilai dari string menjadi angka dan melakukan testing, tidak akan ada error karena kode dikompilasi ke JavaScript dulu baru diuji.
Oleh karena itu, kita bisa menggunakan npx tsc untuk memastikan kode TypeScript kita tidak bermasalah.
TypeScript Compiler
Untuk menjalankan TypeScript Compiler secara terus menerus, kita bisa menggunakan perintah:

sh
Copy code
npx tsc --watch
Perintah ini akan menjalankan compiler setiap kali ada perubahan pada kode kita.

Deklarasi Tipe Data Array
Di TypeScript, tipe data Array bisa menggunakan format TipeData[] atau Array<TipeData>.

Contoh:
typescript
Copy code
const names: string[] = ['sman', 'suki', 'kiki'];
Read-Only Array
Di TypeScript, kita bisa membuat Array yang read-only (tidak bisa diubah) dengan menggunakan tipe data ReadonlyArray<TipeData>.

Contoh:
typescript
Copy code
const hobbies: ReadonlyArray<string> = ['makan', 'joging'];
Tuple
Pada kasus tuple yang bersifat read-only, kita bisa tambahkan kata kunci readonly.

Tuple adalah tipe data Array, di mana panjang array dan tipe data di tiap indeks sudah ditentukan.
Contoh:
typescript
Copy code
const person: readonly [string, string] = ['tem', 'lep'];
Union Type
Ketika kita ingin membuat variabel yang bisa berubah tipe data, kita bisa menggunakan union type.

TypeScript akan memperbolehkan kita untuk mengubah tipe datanya sesuai yang sudah ditentukan di union type.
Contoh:
typescript
Copy code
let sample: number | string | boolean = 'usman';
sample = 10;
sample = true;
Alias Type untuk Union Type
Contoh:
typescript
Copy code
export type ID = string | boolean;
Object Type
Contoh:
typescript
Copy code
const data: {id: number, name: string} = {id: 1, name: "usman"};
Optional Type
Saat membuat atribut, secara default harus diisi semuanya. Jika kita tidak mau mengisi atributnya, kita bisa menggunakan tanda ? untuk menandakan bahwa itu adalah optional.

Enum
Secara default, enum di TypeScript akan dikonversi menjadi tipe data number. Kadang kita ingin mengubahnya menjadi string, kita bisa melakukan hal itu ketika membuat enum.

Contoh:
typescript
Copy code
export enum CustomerType {
    Gold = "Gold",
    Silver = "Silver"
}
Jika tidak seperti contoh di atas, nilai defaultnya akan menjadi number.
