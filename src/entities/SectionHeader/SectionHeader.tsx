import styles from './SectionHeader.module.scss';
import { type SectionHeader } from './types';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Search from '../../shared/Search/Search';

const SectionHeader = ({ title, search, onSearchInputHandler }: SectionHeader) => {
  return (
    <div className={styles.sectionHeader}>
        <SectionTitle title={title}/>
        {search !== undefined && onSearchInputHandler && <Search search={search} onSearchInputHandler={onSearchInputHandler}/>}
    </div>
  )
}

export default SectionHeader