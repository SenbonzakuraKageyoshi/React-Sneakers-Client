import CartShadow from '../../features/Cart/CartShadow/CartShadow';
import CartTitle from '../../features/Cart/CartTitle/CartTitle';
import ResultItem from '../../features/Cart/ResultItem/ResultItem';
import CartMessage from '../../features/Cart/CartMessage/CartMessage';
import styles from './Cart.module.scss';
import CartEmpty from '../../assets/png/cart-empty.png';

const Cart = () => {
  return (
    <>
    <CartShadow/>
    <div className={styles.cart}>
        <div className={styles.cartTitleWrapper}>
          <CartTitle title="Корзина"/>
        </div>
        <CartMessage title='Корзина пустая' text='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.' image={CartEmpty}/>
        {/* <div className={styles.cartContent}>
          <div></div>
          <div>
            <ResultItem name='Итого:' value={`21 498 руб.`}/>
            <ResultItem name='Налог 5%:' value={`1074 руб.`}/>
          </div>
        </div> */}
    </div>
    </>
  )
}

export default Cart