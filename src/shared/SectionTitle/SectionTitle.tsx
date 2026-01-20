import { type SectionTitle } from './types';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <div className={styles.sectionTitle}>{ title }</div>
  )
}

export default SectionTitle