type ID = string | number
export type Category = {
    id: ID;
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    pice: number;
    description?: string;
    category: Category;
}