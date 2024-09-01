"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './movieList.module.css';
import Image from 'next/image';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieListProps {
  typeList: string;
  listTitle: string;
}

const MovieList: React.FC<MovieListProps> = ({ typeList, listTitle }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzMyOWYwYWZmY2JlYWUwMzQ5MDJiMDk3MjM3OGUxOSIsIm5iZiI6MTcyNTE4Njk5Ni44NjMzMzUsInN1YiI6IjY2ZDQ0MjM1OWQ1OWViYzI5ZDQ1OTFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3JZO_WotFfYWhvUqHIJUB2FmrAJt3w2e8QQcJLZC1sg'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${typeList}?language=en-US&page=${page}`, options);
        const data = await response.json();
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [typeList, page]);

  useEffect(() => {
    if (loading) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (lastMovieElementRef.current) {
      observerRef.current.observe(lastMovieElementRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loading]);

  return (
    <section id={styles.cardMovie}>
      <h1>{listTitle}</h1>
      <ul>
        {movies.map((movie, index) => (
          <li
            key={movie.id}
            style={{ marginBottom: '20px', listStyleType: 'none' }}
            ref={index === movies.length - 1 ? lastMovieElementRef : null}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={movie.title}
              width={185}
              height={278} // Proporções da imagem do filme
              style={{ borderRadius: '4px' }}
            />
            <div className={styles.boxText}>
              <h2>{movie.title}</h2>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
      {loading && <p>Loading more movies...</p>}
    </section>
  );
};

export default MovieList;