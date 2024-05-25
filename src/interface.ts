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

// Extend Interface
export interface Empploye {
    id: number;
    name: string;
    division: string;
}

export interface Manager extends Empploye {
    numberOfEmpployed: number;
}

export interface Person{
    name:string,
    sapaDia(name:string):string;
}

