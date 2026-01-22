import type { CartProduct } from "../../shared/types/Products";
import { api } from "../api";

class CartService {
    getCartProducts = async (): Promise<CartProduct[]> => {
        const { data } = await api.get<CartProduct[]>('/cart/get')

        return data;
    }
}

export const cartService = new CartService();