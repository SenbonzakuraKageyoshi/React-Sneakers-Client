import { favoritesService } from "../service/FavoritesService/FavoritesService";
import { useProductsFetch } from "./useProductsFetch";

export const useFavorites = () => {
    const getFavorites = async () => await favoritesService.getFavorites();

    const { products, isLoading, isError, setProducts } = useProductsFetch(getFavorites);

    const removeFromFavorites = async (id: number) => {
     await favoritesService.removeCartFavorites(id).then(() => {
      setProducts((prev) => prev!.filter((e) => e.id !== id))
     })
    };

    return {
        products,
        isLoading,
        isError,
        removeFromFavorites
    }
};