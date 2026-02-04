import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { ordersService } from "../service/OrdersService/OrdersService";
import { type Order } from "../shared/types/Order";

export const useOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const { isLoading, isError, setIsLoading, setIsError } = useFetch();

    const getOrders = async () => {
        return await ordersService.getOrders();
    };
    
    useEffect(() => {
        getOrders().then((data) => {
            setOrders(data)
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
            setIsError(true)
        })
    }, []);

    return {
        orders,
        isLoading,
        isError
    }
};