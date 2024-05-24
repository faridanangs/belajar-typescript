export enum CustomerType {
    Gold = "Gold",
    Platinum = "Platinum",
    Silver = "Silver"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType,
}