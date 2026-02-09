import type { Message } from "../../shared/types/Message";
import type { Product } from "../../shared/types/Product";
import { api } from "../api";

const namespace = '/cart';

class CartService {
    getCartProducts = async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>(`${namespace}/get`)

        return data;
    }

    getCartPrice = async (): Promise<{price: number}> => {
        const { data } = await api.get<{price: number}>(`${namespace}/get-price`)

        return data;
    }

    addToCart = async (ProductId: number): Promise<Message> => {
        const { data } =  await api.post<Message>(`${namespace}/add`, { ProductId })

        return data;
    };

    removeCartProduct = async (id: number): Promise<Message> => {
        const { data } = await api.post<Message>(`${namespace}/remove`, { id })

        return data;
    }
}

export const cartService = new CartService();