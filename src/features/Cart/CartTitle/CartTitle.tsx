import styles from './CartTitle.module.scss';

const CartTitle = ({ title }: {title: string}) => {
  return (
    <div className={styles.cartTitle}>{title}</div>
  )
}

export default CartTitle