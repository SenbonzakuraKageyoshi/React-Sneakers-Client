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
import { ordersService } from '../../service/OrdersService/OrdersService';


type Cart = {
  toggleIsOpened: (value: boolean) => void;
}

const Cart = ({ toggleIsOpened }: Cart) => {

  const [products, setProducts] = useState<null | CartProduct[]>(null);
  const [isSuccess, setIsSuccess] = useState(false);

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
      setProducts(null)
      setIsSuccess(true)
    })
  }

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
          !isSuccess && <CartMessage toggleIsOpened={toggleIsOpened} {...cartVariants[0]}/>
        }
    </div>
    </>
  )
}

export default Cart