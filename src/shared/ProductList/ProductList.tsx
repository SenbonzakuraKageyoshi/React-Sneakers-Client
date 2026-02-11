import styles from './ProductList.module.scss';
import Product from '../Product/Product';
import { type Product as ProductType } from "../types/Product";

type ProductList = {
    products: ProductType[];
    showAddButton: boolean;
    showAddFavoritesButton: boolean;
    favoritesButtonHandler: (id: number) => void;
    isFavorite: boolean;
}

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