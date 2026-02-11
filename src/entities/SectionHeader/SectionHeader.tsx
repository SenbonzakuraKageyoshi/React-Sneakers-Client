import styles from './SectionHeader.module.scss';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Search from './Search/Search';
import BackLink from './BackLink/BackLink';

type SectionHeader = {
    title: string;
    search?: string;
    onSearchInputHandler?: (value: string) => void;
    showSearch: boolean;
}

const SectionHeader = ({ title, search, onSearchInputHandler, showSearch }: SectionHeader) => {
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