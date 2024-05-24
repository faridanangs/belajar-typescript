Belajar Typescript Dasar

//// Kenapa kita menggunakan typescriptnya di development bukan di dependenci
    biasanya typescript di gunakan di mode development, karna kode typescript
    akan di compile lagi menjadi code javascript

// 1. Menambah Typescript
    - npm i --save-dev typescript

// 2. SetUp Typescript project
    - npx tsc --init
    - semua configurasi akan di buat di file tsconfig.json
    - ubah "module" dari "commonjs" menjadi "ES6"

// Tidak perlu menambah type seperti .js | .ts karna nanti ketika
    di compile tidak error
    #  Contoh: import { sayHello } from "../src/say-hello"


// Include dan Excelude
    - secara default file ts akan coba dikompilasi oleh Typescript,
    kadang" kita tidak membutuhkan hal tersebut
    - misal kita hanya ingin melakukan kompilasi untuk kode program, dan tidak butuh
    melakukan kompilasi untuk kode unit tersebut
    - kita bisa menambahkan Include dan Excelude pada tsconfig.json


/// Declarasi Variable
    - Typescript bisa secara otomatis mendeteksi tipe data yang sedang di gunakan,
    tapi jiga bisa menentukan secara eksplisit mengggunakan
    # Contoh: const namaVariable :typeData = value;


//// Babel Typescript
    - untuk menjalankan unit test, kita menggunakan Jest dan Babel
    - banyak programer yang mengeluh karna proses development lambat karna harus di kompilasi terlebih dahulu
    - oleh karna itu, kita harus secara regular melakukan pengecekan menggunakan PRINTAH: npx tsc
    - untuk memastikan tidak ada kode Typescript kita yang bermasalah

    * Jika kita mengubah nilai dari yang sebelumnya string menjadi angka
        dan ketika kita melakukan testing maka dia tidak error karna kodenya akan 
        di kompile ke js dulu baru di test
    * Oleh karna itu kita bisa menggunakan npx tsc untuk memastikan bahwa kode ts kita tidak bermasalah


//// Typescript Compiler
    - untuk menjalankan Typescript Compiler secara terus menerus, kita bisa
    menggunakan PRINTAH: npx tsc --watch
    - perintah di atas akan menjalankan npx compiler ketika terjadi perubahan pada kode kita

//// Declarasi Type Data Array
    - Di Ts tipe data Array bisa menggunakan tanda TipeData[] atay Array<TipeData>
    # Contoh: const names: string[] = ['sman','suki','kiki'];

  /// Read Only Array
  - di TS, kita bisa membuat type Array readOnly(tidak bisa di ubah) dengan menggunakan
  tipe data *ReadonlyArray<Typedata>
  # Contoh: const hobbies: ReadonlyArray<string> = ['makan','joging'];

  /// Tuple
  - Pada kasus tuple bersifat read only(tidak bisa di ubah), kita bisa tambahkan kata kunci read only
  - tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah di tentukan
    # Contoh: const person: readonly [string, string] = ['tem', 'lep'];

/// Union Type
    - pada kasus ketika kita ingin membuat variable yg bisa berubah bentuk tipe data, kita bisa memberi tahunya 
     menggunakan union type
    - ecara otomatis Typescript akan memperbolehkan kita untuk mengubah tipe datanya,
     namun sesuai dengan yang sudah di tentukan di union typenya
    
    # Contoh: let sample :number | string | boolean = 'usman';
              sample = 10;
              sample = true;
    
/// Alias TYpe Untuk onion TYpe
    # Contoh: export type ID = string | boolean

/// Object TYpe
    # Contoh: const data: {id: number, name: string} = {id:1, name: "usman"}

/// Optional Type
    - saat membuat atribute secara default harus di isi semuanya
    - jika kita tidak mau mengisi atributnya kita bisa menggunakan tanda ? untuk menandakan
      bahwa itu adalah optional

/// Enum
    - secara default, enum di TypeScipt akan di konversi menjadi tipe data number
    - kadang kita ingin mengubahnya dari number menjadi string, kita bisa melakukan hal itu
       ketika membuat enumnya
    # Contoh: 
        export enum CustomerType {
            Gold = "Gold",
            Silver = "Silver"
        }
    * Jka tidak seperti contoh di atas maka nilai defaulnya akan menjadi number