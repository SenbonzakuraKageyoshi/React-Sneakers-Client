import { useState, useEffect } from "react";
import type { Product } from "../shared/types/Product";
import { useFetch } from "./useFetch";

export const useProductsFetch = (requestFunction : () => Promise<Product[]>) => {

    const [products, setProducts] = useState<Product[]>([]);
    const { isLoading, isError, setIsLoading, setIsError } = useFetch();

    useEffect(() => {
        requestFunction()
        .then((data) => {
            setProducts(data)
            setIsLoading(false)
        })
        .catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }, []);

    return {
        products,
        isLoading,
        isError,
        setProducts
    }
};