import { Metadata } from "next";
import styles from "./page.module.css";
import MovieList from "./components/MovieList";

export const metadata: Metadata = {
  title: "Mege Movie",
  description: "Test Project: Film Consultation Application",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <MovieList typeList={"popular"} listTitle={"Popular"} />

      <MovieList typeList={"top_rated"} listTitle={"Melhor avaliado"} />

      <MovieList typeList={"upcoming"} listTitle={"Em breve"} />
    </main>
  );
}