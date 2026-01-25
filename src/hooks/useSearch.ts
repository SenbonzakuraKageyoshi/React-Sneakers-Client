import { useState } from "react";
import { Product } from "../shared/types/Products";

export type useSearch = [string, (value: string) => void, Product[]]

export const useSearch = (products: Product[]): useSearch => {
    const [search, setSearch] = useState('');

    const onSearchInputHandler = (value: string) => {
        setSearch(value)
    }

    const filteredProducts = products.filter((el) => el.title.toLowerCase().includes(search.trim().toLowerCase()));

    return [
        search,
        onSearchInputHandler,
        filteredProducts
    ]
}