import { useState, useEffect } from "react";
import type { Product } from "../shared/types/Product";
import { useFetch } from "./useFetch";
import { catalogService } from "../service/CatalogService/CatalogService";

export const useCatalog = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const { isLoading, isError, setIsLoading, setIsError } = useFetch();

    const getProducts = async () => {
        return await catalogService.getProducts();
      };

    useEffect(() => {
        getProducts()
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
        isError
    }
};