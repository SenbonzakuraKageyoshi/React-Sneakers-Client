import { Product } from "../../shared/types/Product";
import { api } from "../api";

class CatalogService {
    getProducts = async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>('/products/get')

        return data;
    }
}

export const catalogService = new CatalogService();