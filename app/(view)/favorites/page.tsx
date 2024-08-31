import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mege Movie Favorites",
};

export default function MovieFavorites() {
  return (
    <main className={styles.main}>
      <h1>Page Favorites</h1>
    </main>
  );
}