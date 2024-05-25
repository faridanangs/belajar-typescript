# Belajar Typescript Dasar

## Kenapa kita menggunakan typescriptnya di development bukan di dependenci
biasanya typescript di gunakan di mode development, karna kode typescript
akan di compile lagi menjadi code javascript

1. Menambah Typescript
```sh
     npm i --save-dev typescript
```

2. SetUp Typescript project
```sh
     npx tsc --init 
```
3. semua configurasi akan di buat di file tsconfig.json
4. ubah "module" dari "commonjs" menjadi "ES6" di dalam file tsconfig.json

## Tidak perlu menambah type seperti .js | .ts ketika import karna nanti ketika di compile tidak error
```sh
import { sayHello } from "../src/say-hello"
```

## Include dan Excelude
- Secara default file ts akan coba dikompilasi oleh Typescript,kadang" kita tidak membutuhkan hal tersebut.
- Misal kita hanya ingin melakukan kompilasi untuk kode program, dan tidak butuh melakukan kompilasi untuk kode unit tersebut.
- Kita bisa menambahkan Include dan Excelude pada tsconfig.json


## Declarasi Variable
- Typescript bisa secara otomatis mendeteksi tipe data yang sedang di gunakan, tapi juga bisa menentukan secara eksplisit mengggunakan.
```
const namaVariable :typeData = value;
```


## Babel Typescript
- untuk menjalankan unit test, kita menggunakan Jest dan Babel
- banyak programer yang mengeluh karna proses development lambat karna harus di kompilasi terlebih dahulu
- oleh karna itu, kita harus secara regular melakukan pengecekan menggunakan PRINTAH: npx tsc
- untuk memastikan tidak ada kode Typescript kita yang bermasalah

*Jika kita mengubah nilai dari yang sebelumnya string menjadi angka dan ketika kita melakukan testing maka dia tidak error karna kodenya akan di kompile ke js dulu baru di test. Oleh karna itu kita bisa menggunakan npx tsc untuk memastikan bahwa kode ts kita tidak bermasalah*


## Typescript Compiler
- untuk menjalankan Typescript Compiler secara terus menerus, kita bisa menggunakan PRINTAH: npx tsc --watch
- perintah di atas akan menjalankan npx compiler ketika terjadi perubahan pada kode kita

## Declarasi Type Data Array
- Di Ts tipe data Array bisa menggunakan tanda TipeData[] atay Array<TipeData>
```
const names: string[] = ['sman','suki','kiki'];
```

## Read Only Array
- di TS, kita bisa membuat type Array readOnly(tidak bisa di ubah) dengan menggunakan tipe data **ReadonlyArray<Typedata>**
```
const hobbies: ReadonlyArray<string> = ['makan','joging'];
```
  
## Tuple
- Pada kasus tuple bersifat read only(tidak bisa di ubah), kita bisa tambahkan kata kunci read only
- tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah di tentukan

```
const person: readonly [string, string] = ['tem', 'lep'];
```

## Union Type
- pada kasus ketika kita ingin membuat variable yg bisa berubah bentuk tipe data, kita bisa memberi tahunya menggunakan union type
- ecara otomatis Typescript akan memperbolehkan kita untuk mengubah tipe datanya, namun sesuai dengan yang sudah di tentukan di union typenya

```    
let sample :number | string | boolean = 'usman';
sample = 10;
sample = true;
```
    
## Alias TYpe Untuk union TYpe
Contoh: ```export type ID = string | boolean```

## Object TYpe
### Contoh:
```
const data: {id: number, name: string} = {id:1, name: "usman"}
```

## Optional Type
- saat membuat atribute secara default harus di isi semuanya
- jika kita tidak mau mengisi atributnya kita bisa menggunakan tanda ? untuk menandakan bahwa itu adalah optional
### Contoh:
```
export type Product = {
    id: ID;
    name: string;
    pice: number;
    description?: string;
    category: Category;
}
```

## Enum
- secara default, enum di TypeScipt akan di konversi menjadi tipe data number
- kadang kita ingin mengubahnya dari number menjadi string, kita bisa melakukan hal itu ketika membuat enumnya
### Contoh: 
```
export enum CustomerType {
            Gold = "Gold",
            Silver = "Silver"
        }
```
***Jka tidak seperti contoh di atas maka nilai defaulnya akan menjadi number***

## Interface
- interface lebih mudah di kembangkan daripada Type
- kebanyakan programer Typscript akan menggunakan Interface di banding Type jika type datanya komplek
- dan cara penggunaanya sama dengan type
```
export interface Seller {
    id: number;
    name: string;
    address?: string;
}
```

## Readonly Properties
- jika kita sudah menaruh readonly di dalam propertiesnya maka dia tidak bisa di ubah
```
export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nik: string;
}
```

## Function Interface
- dengan function interface kita bisa membuat function di dalam variabel, dan kita bisa dengan mudah menggunakan interface tersebut.

```

export interface SellerInteface{
    (id: number, name:string, address?:string):string
}

const seller: SellerInteface = (id: number, name:string,address?:string) : string =>{
     const seller = {
          id: id,
          name: name,
          address: address,
     }
     return JSON.stringify(seller)
     }

     console.log(seller(1,"usman","sesele"))
```

## Extending Interface
- Interface bisa melakukan extending ke interface lain
- secara otomatis attribute interface yang di lanjutkan dimiliki oleh interface tersebut
- ini membuat kita lebih mudah ketika membuat tipe data yang kompleks

```
export interface Empploye {
    id: number;
    name: string;
    division: string;
}

export interface Manager extends Empploye {
    numberOfEmpployed: number;
}
```

## Function Di Interface
- kita bisa menambahkan function di dalam interface sebagai atribute
```
interface Person{
     name:string,
     sapaDia(name:string):string;
}

const person:Person = {
     name: "usman",
     sapaDia(name:string):string{
     return `halo ${name} my name is ${this.name}`
     }
}

console.log(person.sapaDia("joko"));
console.log(person.name)
```