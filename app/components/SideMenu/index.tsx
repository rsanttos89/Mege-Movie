"use client";

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import styles from './sideMenu.module.css';

const SideMenu = () => {
  const pathname = usePathname();

  return (
    <aside id={styles.aside}>
      <button title="Logo Mege Movie" className={`material-symbols-outlined ${styles.home} ${styles.button}`}>flutter</button>

      <menu id={styles.menu}>
        <Link href="/" title="Home">
          <button
            className={`${pathname === '/' ? styles.activeLink : styles.link} 
            material-symbols-outlined ${styles.button}`}>live_tv</button>
        </Link>
        <Link href="/favorites" title="Favorites" >
          <button
            className={`${pathname === '/favorites' ? styles.activeLink : styles.link} 
            material-symbols-outlined ${styles.button}`}>favorite</button>
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