import { useOrders } from "../../hooks/useOrders"
import SectionHeader from "../../entities/SectionHeader/SectionHeader";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import { emptyDataCheck } from "../../features/EmptyDataCheck/EmptyDataCheck";
import OrdersItem from "../../entities/Orders/OrdersItem/OrdersItem";

const Orders = () => {

  const { orders, isLoading, isError } = useOrders();

  return (
    <>
    <SectionHeader title="Заказы"/>
    <FetchStatus isLoading={isLoading} isError={isError}/>
    {
    emptyDataCheck(isLoading, isError, orders)
    &&
    orders.map((el) => (
      <OrdersItem createdAt={el.createdAt} products={el.products} key={el.createdAt}/>
    ))
    }
    </>
  )
}

export default Orders