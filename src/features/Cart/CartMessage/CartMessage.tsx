import CartTitle from '../CartTitle/CartTitle';
import styles from './CartMessage.module.scss';
import type { CartMessage } from './type';

const CartMessage = ({ title, text, image, toggleIsOpened }: CartMessage) => {
  return (
    <div className={styles.cartMessage}>
        <img src={image} width={120} height={120} alt="" className="cartMessageImg" />
        <div className={styles.carMessageTitleWrapper}>
            <CartTitle title={title}/>
        </div>
        <div className={styles.cartMessageText}>{text}</div>
        <div className={styles.cartMessageButtonWrapper}>
          <button className="button" onClick={() => toggleIsOpened(false)}>
            Вернуться назад
          </button>
        </div>
    </div>
  )
}

export default CartMessage