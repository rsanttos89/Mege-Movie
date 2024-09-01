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

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId.id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log('Dados do Filme:', data);
        setMovie(data);
      })
      .catch(err => console.error('Erro ao buscar os dados:', err));
  }, [movieId]);

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