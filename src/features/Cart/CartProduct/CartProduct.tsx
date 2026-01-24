import styles from './CartProduct.module.scss';
import CartProductPreview from '../../../assets/png/product.png';
import { type CartProduct as CartProductType } from '../../../shared/types/Products';
import { formatPrice } from '../../../shared/utils/formatPrice';
import { cartService } from '../../../service/CartService/CartService';

type CartProductFunctions = {
    removeCartProduct: (id: number) => void;
}

const CartProduct = ({ id, Product, removeCartProduct }: CartProductType & CartProductFunctions) => {
  return (
    <li className={styles.cartProduct}>
        <div className={styles.cartProductContent}>
            <img src={CartProductPreview} alt="" width={70} height={70} />
            <div className={styles.cartProductInfo}>
                <div className={styles.cartProductName}>{Product.title}</div>
                <p className={styles.cartProductPrice}>{formatPrice(Product.price)}</p>
            </div>
            <button className={styles.cartProductButton} onClick={() => removeCartProduct(id)}>
                <svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.13117 6.66688L5.68237 4.21808L8.13109 1.76936C9.07533 0.825117 7.61091 -0.639304 6.66666 0.304941L4.21795 2.75366L1.76914 0.304855C0.825107 -0.639181 -0.639264 0.82519 0.304772 1.76923L2.75358 4.21803L0.304858 6.66675C-0.639387 7.61099 0.825033 9.07541 1.76928 8.13117L4.218 5.68245L6.6668 8.13125C7.61096 9.07541 9.07533 7.61104 8.13117 6.66688Z"/>
                </svg>
            </button>
        </div>
    </li>
  )
}

export default CartProduct