import { useOrders } from "../../hooks/useOrders"
import SectionHeader from "../../entities/SectionHeader/SectionHeader";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import OrdersItem from "../../entities/Orders/OrdersItem/OrdersItem";
import EmptyMessage from "../../shared/EmptyMessage/EmptyMessage";

const Orders = () => {

  const { orders, isLoading, isError } = useOrders();
  
  const dataIsFulfilled = !isError && !isLoading;

  return (
    <>
    <SectionHeader title="Заказы" showSearch={true}/>
    <FetchStatus isLoading={isLoading} isError={isError}/>
    {
    dataIsFulfilled && Boolean(orders.length)
    &&
    orders.map((el) => (
      <OrdersItem createdAt={el.createdAt} products={el.products} key={el.createdAt}/>
    ))
    }
    {
    dataIsFulfilled && !Boolean(orders.length)
    &&
    <EmptyMessage title="Заказов нет :(" message="Вы еще не совершали заказы" />
    }
    </>
  )
}

export default Orders