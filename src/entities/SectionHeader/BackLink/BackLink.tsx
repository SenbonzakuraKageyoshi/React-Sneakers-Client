import styles from './BackLink.module.scss';

const BackLink = () => {
  return (
    <button className={styles.backLink} onClick={() => window.history.back()}>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 10.75L0.75 5.75L5.75 0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
  )
}

export default BackLink