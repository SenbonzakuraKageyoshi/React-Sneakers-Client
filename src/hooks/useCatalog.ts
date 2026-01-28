import { useState, useEffect } from "react";
import { type Product } from "../shared/types/Products";
import { catalogService } from "../service/CatalogService/CatalogService";
import { useFetch } from "./useFetch";

export const useCatalog = () => {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const { isLoading, isError, setIsLoading, setIsError } = useFetch();

    const getProducts = async () => {
        return await catalogService.getProducts();
    };

    useEffect(() => {
        getProducts().then((data) => {
            setProductsList(data)
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }, []);

    return {
        productsList,
        isLoading,
        isError
    }
};