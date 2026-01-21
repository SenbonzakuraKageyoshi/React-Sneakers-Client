import styles from './CartShadow.module.scss';

type CartShadow = {
  toggleIsOpened: (value: boolean) => void;
}

const CartShadow = ({ toggleIsOpened }: CartShadow) => {
  return (
    <div className={styles.cartBackdrop} onClick={() => toggleIsOpened(false)}></div>
  )
}

export default CartShadow