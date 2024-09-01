"use client";

import React, { useState, useEffect } from 'react';
import styles from './form.module.css';
import Link from 'next/link';

interface Movie {
  id: number;
  title: string;
}

interface ApiResponse {
  results: Movie[];
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length > 2) {
      const fetchMovies = async () => {
        setLoading(true);
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          }
        };

        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
          const data: ApiResponse = await response.json();
          setResults(data.results || []); // Garante que results seja um array
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    } else {
      setResults([]);
    }
  }, [query]);

  const handleLinkClick = () => {
    setQuery('');
  };

  return (
    <section id={styles.containerSearch}>
      <form id={styles.form}>
        <span className="material-symbols-outlined">search</span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="What are we going to watch today?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className={`${styles.results} ${results.length > 0 ? styles.resultsVisible : styles.resultsHidden}`}>
        {results.map(movie => (
          <div key={movie.id} className={styles.movie}>
            <Link href={`../details/${movie.id}`} onClick={handleLinkClick}>
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;