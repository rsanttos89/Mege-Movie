"use client";

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../details.module.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  backdrop_path: string;
  popularity: number;
  homepage?: string;
  tagline?: string;
  genres?: { id: number; name: string }[];
  production_companies?: { id: number; name: string; logo_path?: string }[];
  runtime?: number;
  revenue?: number;
  budget?: number;
}

const MovieDetails = () => {
  const movieId = useParams<{ id: string; }>()
  console.log(movieId);

  const apiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzMyOWYwYWZmY2JlYWUwMzQ5MDJiMDk3MjM3OGUxOSIsIm5iZiI6MTcyNTE4Njk5Ni44NjMzMzUsInN1YiI6IjY2ZDQ0MjM1OWQ1OWViYzI5ZDQ1OTFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3JZO_WotFfYWhvUqHIJUB2FmrAJt3w2e8QQcJLZC1sg';
  
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId.id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey,
      },
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log('Dados do Filme:', data);
        setMovie(data);
      })
      .catch(err => console.error('Erro ao buscar os dados:', err));
  }, [apiKey, movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className={styles.img}
        />

        <div className={styles.cardInfo}>
          <h1>{movie.title}</h1>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${movie.budget?.toLocaleString()}</p>
          <p>Revenue: ${movie.revenue?.toLocaleString()}</p>
          <p>Tagline: {movie.tagline}</p>
          
          {movie.genres && (
            <div>
              <h2>Genres</h2>
              {movie.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;