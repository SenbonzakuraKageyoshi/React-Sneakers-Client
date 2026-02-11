import CartTitle from '../CartTitle/CartTitle';
import styles from './CartMessage.module.scss';

type CartMessage = {
    title: string;
    text: string;
    image: string;
    setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartMessage = ({ title, text, image, setCartIsOpened }: CartMessage) => {
  return (
    <div className={styles.cartMessage}>
        <img src={image} width={120} height={120} alt="" className="cartMessageImg" />
        <div className={styles.carMessageTitleWrapper}>
            <CartTitle title={title}/>
        </div>
        <div className={styles.cartMessageText}>{text}</div>
        <div className={styles.cartMessageButtonWrapper}>
          <button className="button" onClick={() => setCartIsOpened(false)}>
            Вернуться назад
          </button>
        </div>
    </div>
  )
}

export default CartMessage