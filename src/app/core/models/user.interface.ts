import { Product } from "./product.interface";


export interface User {
    name: string;
    email: string;
    password: string;
    role: string;
    cart: Product[];
    createdAt: Date;
    updatedAt: Date
}