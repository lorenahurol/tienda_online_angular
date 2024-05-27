import { User } from "./user.interface";

export interface Product {
    _id: string,
    name: string,
    description: string;
    price: number;
    stock: number;
    department: string;
    available: boolean;
    owner: User;

    createdAt: Date;
    updatedAt: Date;
}