import CartTitle from '../CartTitle/CartTitle';
import styles from './CartMessage.module.scss';
import type { CartMessage } from './type';

const CartMessage = ({ title, text, image }: CartMessage) => {
  return (
    <div className={styles.cartMessage}>
        <img src={image} width={120} height={120} alt="" className="cartMessageImg" />
        <div className={styles.carMessageTitleWrapper}>
            <CartTitle title={title}/>
        </div>
        <div className={styles.cartMessageText}>{text}</div>
    </div>
  )
}

export default CartMessage