import React from 'react';

import styles from './header.module.css';
import SearchBar from '../SearchBar';

const Header = () => {

  return (
    <header id={styles.header}>
      <div className={styles.boxLeft}>
        <SearchBar />
      </div>

      <div className={styles.boxRight}>
          <button className={`material-symbols-outlined`}>mark_email_unread</button>
          <button className={`material-symbols-outlined`}>account_circle</button>
      </div>
    </header>
  );
};

export default Header;