"use client";

import styles from './themeToggle.module.css';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`material-symbols-outlined`} id={styles.button}>
      {theme === 'light' ? 'dark_mode' : 'light_mode'}
    </button>
  );
};

export default ThemeToggle;