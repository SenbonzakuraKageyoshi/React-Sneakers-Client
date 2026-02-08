import styles from './ProductList.module.scss';
import Product from '../Product/Product';
import { type ProductList } from './types';

const ProductList = ({ products, showAddButton, showAddFavoritesButton, favoritesButtonHandler }: ProductList) => {
  return (
    <ul className={styles.productsList}>
      {products.map((el) => (
        <Product {...el} showAddButton={showAddButton} showAddFavoritesButton={showAddFavoritesButton} favoritesButtonHandler={favoritesButtonHandler} key={el.id}/>
      ))}
    </ul>
  )
}

export default ProductList