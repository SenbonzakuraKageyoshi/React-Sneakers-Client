import type { Message } from "../../shared/types/Message";
import type { CartProduct } from "../../shared/types/Products";
import { api } from "../api";

const namespace = '/orders';

class OrdersService {
    createOrder = async (products: CartProduct[]): Promise<Message> => {
        const { data } = await api.post<Message>(`${namespace}/create`, { products })

        return data;
    };
}

export const ordersService = new OrdersService();