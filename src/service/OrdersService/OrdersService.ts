import type { Message } from "../../shared/types/Message";
import type{ Order } from "../../shared/types/Order";
import type { Product } from "../../shared/types/Product";
import { api } from "../api";

const namespace = '/orders';

class OrdersService {
    createOrder = async (products: Product[]): Promise<Message> => {
        const { data } = await api.post<Message>(`${namespace}/create`, { products })

        return data;
    };

    getOrders = async (): Promise<Order[]> => {
        const { data } = await api.get<Order[]>(`${namespace}/get`)

        return data;
    };
}

export const ordersService = new OrdersService();