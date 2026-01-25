import { useState, useEffect } from "react";
import { type Product } from "../shared/types/Products";
import { catalogService } from "../service/CatalogService/CatalogService";

type useCatalog = [Product[], boolean, boolean];

export const useCatalog = (): useCatalog => {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

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

    return [
        productsList,
        isLoading,
        isError
    ]
};