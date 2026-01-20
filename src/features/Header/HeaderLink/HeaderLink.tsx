import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderLink.module.scss';

type HeaderLink = {
  to: string;
  children: React.ReactNode
}

const HeaderLink = ({ to, children }: HeaderLink) => {
  return (
    <Link to={to} className={styles.headerLink}>
      { children }
    </Link>
  )
}

export default HeaderLink