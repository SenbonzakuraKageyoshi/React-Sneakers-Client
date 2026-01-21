import { useState } from 'react';
import CartShadow from '../../features/Cart/CartShadow/CartShadow';
import CartTitle from '../../features/Cart/CartTitle/CartTitle';
import ResultItem from '../../features/Cart/ResultItem/ResultItem';
import CartMessage from '../../features/Cart/CartMessage/CartMessage';
import styles from './Cart.module.scss';
import { cartVariants } from '../../entities/Cart/data';

type Cart = {
  toggleIsOpened: (value: boolean) => void;
}

const Cart = ({ toggleIsOpened }: Cart) => {

  const [products, setProducts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
    <CartShadow toggleIsOpened={toggleIsOpened}/>
    <div className={styles.cart}>
        <div className={styles.cartTitleWrapper}>
          <CartTitle title="Корзина"/>
        </div>
        {isSuccess && <CartMessage toggleIsOpened={toggleIsOpened} {...cartVariants[1]}/>}
        {
          products.length
          ?
          <div className={styles.cartContent}>
            <div></div>
            <div>
              <ResultItem name='Итого:' value={`21 498 руб.`}/>
              <ResultItem name='Налог 5%:' value={`1074 руб.`}/>
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