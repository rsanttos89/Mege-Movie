import React from 'react';

import styles from './header.module.css';
import SearchBar from '../SearchBar';
import ThemeToggle from '../ThemeToggle';

const Header = () => {

  return (
    <header id={styles.header}>
      <div className={styles.boxLeft}>
        <SearchBar />
      </div>

      <div className={styles.boxRight}>
        <button className={`material-symbols-outlined`}>account_circle</button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;