import styles from './EmptyMessage.module.scss';
import { Link } from 'react-router-dom';
import EmptyImage from '../../assets/png/empty.png';

type EmptyMessage = {
    title: string;
    message: string;
}

const EmptyMessage = ({ title, message }: EmptyMessage) => {
  return (
    <div className={styles.emptyMessage}>
        <img src={EmptyImage} alt="Пусто" width={70} height={70}/>
        <div className={styles.emptyMessageTitle}>{title}</div>
        <div className={styles.emptyMessageMessage}>{message}</div>
        <Link to={'/'} className="button">Вернуться назад</Link>
    </div>
  )
}

export default EmptyMessage