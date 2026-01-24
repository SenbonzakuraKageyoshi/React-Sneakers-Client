import { type CartProduct as CartProductType } from "../../../shared/types/Products"
import CartProduct from "../CartProduct/CartProduct"
import styles from './CartProductList.module.scss';

type CartProductList = {
  products: CartProductType[]
  removeCartProduct: (id: number) => void; 
};

const CartProductList = ({ products, removeCartProduct }: CartProductList) => {
  return (
    <ul className={styles.cartProductList}>
      {products.map((product) => (
        <CartProduct {...product} removeCartProduct={removeCartProduct} key={product.id}/>
      ))}
    </ul>
  )
}

export default CartProductList