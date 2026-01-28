import styles from './SectionHeader.module.scss';
import { type SectionHeader } from './types';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import Search from '../../../shared/Search/Search';

const SectionHeader = ({ title, search, onSearchInputHandler }: SectionHeader) => {
  console.log('hdr')
  return (
    <div className={styles.sectionHeader}>
        <SectionTitle title={title}/>
        <Search search={search} onSearchInputHandler={onSearchInputHandler}/>
    </div>
  )
}

export default SectionHeader