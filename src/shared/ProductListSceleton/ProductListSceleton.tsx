import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './ProductListSceleton.module.scss';

const ProductListLoader = () => {
  return (
    <div className={styles.productListLoader}>
        {Array.from({length: 8}, (_, i) => i + 1).map((el) => (
            <div className={styles.productListLoaderItem} key={el}>
                <Skeleton height="260px" width="210px" borderRadius="40px" />
            </div> 
        ))}
    </div>
  )
};

export default ProductListLoader;