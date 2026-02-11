import styles from './ResultItem.module.scss';
import { formatPrice } from '../../../shared/utils/formatPrice';

type ResultItem = {
    name: string;
    value: number;
}

const ResultItem = ({ name, value }: ResultItem) => {
  return (
    <div className={styles.resultItem}>
        <div className={styles.resultItemName}>{name}</div>
        <div className={styles.resultItemValue}>{formatPrice(value)}</div>
    </div>
  )
}

export default ResultItem