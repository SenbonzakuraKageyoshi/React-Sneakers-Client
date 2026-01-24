import type { Message } from "../../shared/types/Message";
import type { CartProduct } from "../../shared/types/Products";
import { api } from "../api";

const namespace = '/cart';

class CartService {
    getCartProducts = async (): Promise<CartProduct[]> => {
        const { data } = await api.get<CartProduct[]>(`${namespace}/get`)

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