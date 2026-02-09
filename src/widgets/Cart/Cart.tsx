import CartShadow from '../../features/Cart/CartShadow/CartShadow';
import CartTitle from '../../features/Cart/CartTitle/CartTitle';
import ResultItem from '../../features/Cart/ResultItem/ResultItem';
import CartMessage from '../../features/Cart/CartMessage/CartMessage';
import styles from './Cart.module.scss';
import { cartVariants } from '../../entities/Cart/data';
import CartProductList from '../../features/Cart/CartProductList/CartProductList';
import { useCart } from '../../hooks/useCart';

type Cart = {
  setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({ setCartIsOpened }: Cart) => {

  const { products, isSuccess, isLoading, isError, totalPrice, removeCartProduct, createOrder } = useCart();

  return (
    <>
    <CartShadow toggleIsOpened={setCartIsOpened}/>
    <div className={styles.cart}>
        <div className={styles.cartTitleWrapper}>
          <CartTitle title="Корзина"/>
        </div>
        {isError && <p>Error</p>}
        {/* {isLoading && <Loader/>} */}
        {isSuccess && <CartMessage setCartIsOpened={setCartIsOpened} {...cartVariants[1]}/>}
        {
          !isError && !isLoading && products.length
          ?
          <div className={styles.cartContent}>
            <CartProductList removeCartProduct={removeCartProduct} products={products}/>
            <div></div>
            <div className={styles.cartBottom}>
              <div>
                <ResultItem name='Итого:' value={totalPrice}/>
                <ResultItem name='Налог 5%:' value={totalPrice * 0.05}/>
              </div>
              <button className="button" style={{marginTop: '25px'}} onClick={createOrder}>
                Оформить заказ
              </button>
            </div>
          </div>
          :
          !isError && !isLoading && !isSuccess && <CartMessage setCartIsOpened={setCartIsOpened} {...cartVariants[0]}/>
        }
    </div>
    </>
  )
}

export default Cart