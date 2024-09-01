"use client";

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import styles from './sideMenu.module.css';

const SideMenu = () => {
  const pathname = usePathname();

  return (
    <aside id={styles.aside}>
      <menu id={styles.menu}>
        <Link href="/" title="Home" className={`${pathname === '/' ? styles.activeLink : styles.link}`}>
          <button
            id='home'
            className={`${pathname === '/' ? styles.activeLink : styles.link} 
            material-symbols-outlined ${styles.button}`}
          >live_tv</button>
          <label htmlFor="favorite">home</label>
        </Link>

        <Link href="/favorites" title="Favorites" className={`${pathname === '/favorites' ? styles.activeLink : styles.link}`}>
          <button
            id='favorite'
            className={`${pathname === '/favorites' ? styles.activeLink : styles.link} 
            material-symbols-outlined ${styles.button}`}
          >favorite</button>
          <label htmlFor="favorite">favorite</label>
        </Link>
      </menu>

      <button
        title="Logout"
        className={`material-symbols-outlined ${styles.button}`}>
        logout
      </button>
    </aside>
  );
};

export default SideMenu;