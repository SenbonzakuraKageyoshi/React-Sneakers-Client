import styles from './ProductList.module.scss';
import Product from '../Product/Product';
import { type ProductList } from './types';

const ProductList = (props: ProductList) => {
  return (
    <ul className={styles.productsList}>
      {props.products.map((el) => (
        <Product {...el} 
          isFavorite={props.isFavorite} 
          showAddButton={props.showAddButton} 
          showAddFavoritesButton={props.showAddFavoritesButton} 
          favoritesButtonHandler={props.favoritesButtonHandler} 
          key={el.id}
        />
      ))}
    </ul>
  )
}

export default ProductList