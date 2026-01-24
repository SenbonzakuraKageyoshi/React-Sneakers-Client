import { useState, useEffect } from "react";
import { type CartProduct } from "../shared/types/Products";
import { cartService } from "../service/CartService/CartService";
import { ordersService } from "../service/OrdersService/OrdersService";

type useCart = [
    products: null | CartProduct[],
    isSuccess: boolean,
    totalPrice: number,
    removeCartProduct: (id: number) => void,
    createOrder: () => void,
]

export const useCart = (): useCart => {
    const [products, setProducts] = useState<null | CartProduct[]>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        getCartProducts().then((data) => setProducts(data));
    }, [])

    const totalPrice = products?.reduce((accumulator, product) => accumulator + product.Product.price, 0) || 0;

    const getCartProducts = async () => {
      return await cartService.getCartProducts()
    };

    const removeCartProduct = async (id: number) => {
     await cartService.removeCartProduct(id).then(() => {
      setProducts((prev) => prev!.filter((e) => e.id !== id))
     })
    };

    const createOrder = async () => {
      await ordersService.createOrder(products!).then(() => {
        setProducts(null)
        setIsSuccess(true)
      })
    }

    return [
        products,
        isSuccess,
        totalPrice,
        removeCartProduct,
        createOrder
    ]
};