import React from 'react';
import styles from './form.module.css';

const SearchBar = () => {
  return (
    <form id={styles.form}>
      <span className={`material-symbols-outlined`}>search</span>
      <input type="search" name="search" id="search" placeholder="What are we going to watch today?" />
    </form>
  );
};

export default SearchBar;