import styles from './SectionHeader.module.scss';
import { type SectionHeader } from './types';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Search from './Search/Search';
import BackLink from './BackLink/BackLink';

const SectionHeader = ({ title, search, onSearchInputHandler, showSearch }: SectionHeader) => {

  console.log(showSearch);
  
  return (
    <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderTitleWrapper}>
          {window.location.pathname !== '/' && <BackLink/>}
          <SectionTitle title={title}/>
        </div>
        {search !== undefined && onSearchInputHandler && showSearch && <Search search={search} onSearchInputHandler={onSearchInputHandler}/>}
    </div>
  )
}

export default SectionHeader