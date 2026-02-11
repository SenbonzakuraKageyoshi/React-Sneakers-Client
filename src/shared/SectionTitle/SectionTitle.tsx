import styles from './SectionTitle.module.scss';

type SectionTitle = {
    title: string;
}

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <div className={styles.sectionTitle}>{ title }</div>
  )
}

export default SectionTitle