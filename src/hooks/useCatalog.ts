import { useState, useEffect } from "react";
import { type Product } from "../shared/types/Products";
import { catalogService } from "../service/CatalogService/CatalogService";

type useCatalog = [null | Product[]];

export const useCatalog = () => {
    const [productsList, setProductsList] = useState<null | Product[]>(null);

    const getProducts = async () => {
        return await catalogService.getProducts();
    };

    useEffect(() => {
        getProducts().then((data) => setProductsList(data))
    }, []);

    return [
        productsList
    ]
};