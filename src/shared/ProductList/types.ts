import { type Product } from "../types/Product";

export type ProductList = {
    products: Product[];
    showAddButton: boolean;
    showAddFavoritesButton: boolean;
    favoritesButtonHandler: (id: number) => void;
}