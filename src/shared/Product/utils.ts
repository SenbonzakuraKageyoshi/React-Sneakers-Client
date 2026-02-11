import { cartService } from "../../service/CartService/CartService";
import { favoritesService } from "../../service/FavoritesService/FavoritesService";

const onAddToCartHandler = async (id: number) => await cartService.addToCart(id);

const onAddToFavoritesHandler = async (id: number) => await favoritesService.addToFavorites(id);

export {
    onAddToCartHandler,
    onAddToFavoritesHandler
}