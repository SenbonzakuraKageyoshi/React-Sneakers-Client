import styles from './ResultItem.module.scss';
import type { ResultItem } from './types';


const ResultItem = ({ name, value }: ResultItem) => {
  return (
    <div className={styles.resultItem}>
        <div className={styles.resultItemName}>{name}</div>
        <div className={styles.resultItemValue}>{value}</div>
    </div>
  )
}

export default ResultItem