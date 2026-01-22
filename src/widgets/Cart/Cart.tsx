import { useEffect, useState } from 'react';
import CartShadow from '../../features/Cart/CartShadow/CartShadow';
import CartTitle from '../../features/Cart/CartTitle/CartTitle';
import ResultItem from '../../features/Cart/ResultItem/ResultItem';
import CartMessage from '../../features/Cart/CartMessage/CartMessage';
import styles from './Cart.module.scss';
import { cartVariants } from '../../entities/Cart/data';
import CartProductList from '../../features/Cart/CartProductList/CartProductList';
import { cartService } from '../../service/CartService/CartService';
import { type CartProduct } from '../../shared/types/Products';


type Cart = {
  toggleIsOpened: (value: boolean) => void;
}

const Cart = ({ toggleIsOpened }: Cart) => {

  const [products, setProducts] = useState<null | CartProduct[]>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const getCartProducts = async () => {
    return await cartService.getCartProducts()
  };

  const totalPrice = products?.reduce((accumulator, product) => accumulator + product.Product.price, 0) || 0;

  useEffect(() => {
    getCartProducts().then((data) => setProducts(data));
  }, [])

  return (
    <>
    <CartShadow toggleIsOpened={toggleIsOpened}/>
    <div className={styles.cart}>
        <div className={styles.cartTitleWrapper}>
          <CartTitle title="Корзина"/>
        </div>
        {isSuccess && <CartMessage toggleIsOpened={toggleIsOpened} {...cartVariants[1]}/>}
        {
          products?.length
          ?
          <div className={styles.cartContent}>
            <CartProductList products={products}/>
            <div></div>
            <div>
              <ResultItem name='Итого:' value={totalPrice}/>
              <ResultItem name='Налог 5%:' value={totalPrice * 0.05}/>
            </div>
          </div>
          :
          !isSuccess && <CartMessage toggleIsOpened={toggleIsOpened} {...cartVariants[0]}/>
        }
    </div>
    </>
  )
}

export default Cart