"use client";

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import styles from './footerMenu.module.css';
import ThemeToggle from '../ThemeToggle';

const FooterMenu = () => {
  const pathname = usePathname();

  return (
    <footer id={styles.footer}>
      <menu id={styles.menu}>
        <Link href="/" title="Home">
          <button
            className={`${pathname === '/' ? styles.activeLink : styles.link} 
            material-symbols-outlined ${styles.button}`}>live_tv</button>
        </Link>

        <ThemeToggle />

        <Link href="/favorites" title="Favorites" >
          <button
            className={`${pathname === '/favorites' ? styles.activeLink : styles.link} 
            material-symbols-outlined ${styles.button}`}>favorite</button>
        </Link>

        <button
          className={`material-symbols-outlined ${styles.button}`}>
          account_circle
        </button>

        <button
          className={`material-symbols-outlined ${styles.button}`}>
          logout
        </button>
      </menu>
    </footer>
  );
};

export default FooterMenu;