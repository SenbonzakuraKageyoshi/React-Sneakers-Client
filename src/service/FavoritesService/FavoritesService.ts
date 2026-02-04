import type { Message } from "../../shared/types/Message";
import type { Product } from "../../shared/types/Product";
import { api } from "../api";

const namespace = '/favorites';

class FavoritesService {
    getFavorites = async (): Promise<Product[]> => {
        const { data } = await api.get<Product[]>(`${namespace}/get`)
    
        return data;
    }
    
    addToFavorites = async (ProductId: number): Promise<Message> => {
        const { data } =  await api.post<Message>(`${namespace}/add`, { ProductId })

        return data;
    };

    removeCartFavorites = async (id: number): Promise<Message> => {
        const { data } = await api.post<Message>(`${namespace}/remove`, { id })

        return data;
    }
}

export const favoritesService = new FavoritesService();