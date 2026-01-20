import styles from './ProductList.module.scss';
import Product from '../Product/Product';
import { type ProductList } from './types';

const ProductList = ({ products }: ProductList) => {
  return (
    <ul className={styles.productsList}>
      {products.map((el) => (
        <Product {...el} key={el.id}/>
      ))}
    </ul>
  )
}

export default ProductList