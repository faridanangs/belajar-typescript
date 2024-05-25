export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nik: string;
}

// Fucntion Inteface
export interface SellerInteface{
    (id: number, name:string, address?:string):string
}