import { Message } from "../../shared/types/Message";
import { Product } from "../../shared/types/Products";
import { api } from "../api";

class CatalogService {
    getProducts = async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>('/products/get')

        return data;
    }

    addToCart = async (ProductId: number): Promise<Message> => {
        const { data } =  await api.post<Message>('/cart/add', { ProductId })

        return data;
    };
}

export const catalogService = new CatalogService();