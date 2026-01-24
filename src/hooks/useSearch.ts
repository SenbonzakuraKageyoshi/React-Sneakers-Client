import { useState } from "react";
import { Product } from "../shared/types/Products";

export type useSearch = [string, (value: string) => void, null | Product[]]

export const useSearch = (products: null | Product[]): useSearch => {
    const [search, setSearch] = useState('');

    const onSearchInputHandler = (value: string) => {
        setSearch(value)
    }

    const filteredProducts = products?.filter((el) => el.title.toLowerCase().includes(search.trim().toLowerCase())) || null;

    return [
        search,
        onSearchInputHandler,
        filteredProducts
    ]
}