import { useState, useEffect } from "react";
import { type CartProduct } from "../shared/types/Products";
import { cartService } from "../service/CartService/CartService";
import { ordersService } from "../service/OrdersService/OrdersService";
import { useFetch } from "./useFetch";

export const useCart = () => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const { isLoading, isError, setIsLoading, setIsError } = useFetch();

    useEffect(() => {
        getCartProducts().then((data) => {
          setProducts(data)
          setIsLoading(false)
        }).catch(() => {
          setIsLoading(false)
          setIsError(true)
        })
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
        setProducts([])
        setIsSuccess(true)
      })
    }

    return {
      products,
      isSuccess,
      isLoading,
      isError,
      totalPrice,
      removeCartProduct,
      createOrder
    }
};