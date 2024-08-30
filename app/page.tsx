import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mege Movie",
  description: "Test Project: Film Consultation Application",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Movie</h1>
    </main>
  );
}
