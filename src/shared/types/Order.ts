import { Product } from "./Product";

export type Order = {
    id: number;
    createdAt: string;
    updatedAt: string;
    products: Product[]
}