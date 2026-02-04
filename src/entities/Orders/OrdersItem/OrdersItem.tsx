import { type Product } from '../../../shared/types/Product';
import ProductList from '../../../shared/ProductList/ProductList'
import styles from './OrdersItem.module.scss'

type OrdersItem = {
    createdAt: string;
    products: Product[]
}

const OrdersItem = ({ createdAt, products }: OrdersItem) => {
  return (
    <div className={styles.ordersItem}>
    <div className={styles.orderData}>Дата заказа: {createdAt.split('T')[0]}</div>
    <ProductList products={products} showAddButton={false} showAddFavoritesButton={false}/>
    </div>
  )
}

export default OrdersItem