import styles from './SectionHeader.module.scss';
import { type SectionHeader } from './types';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Search from '../../../shared/Search/Search';

const SectionHeader = ({ title, search, setSearch }: SectionHeader) => {
  return (
    <div className={styles.sectionHeader}>
        <SectionTitle title={title}/>
        <Search search={search} setSearch={setSearch}/>
    </div>
  )
}

export default SectionHeader