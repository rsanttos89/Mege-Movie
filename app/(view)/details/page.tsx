import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mege Movie Details",
};

export default function MovieDetails() {
  return (
    <main className={styles.main}>
      <h1>Page Details</h1>
    </main>
  );
}