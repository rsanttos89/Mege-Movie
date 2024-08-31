import { Metadata } from "next";
import styles from "./page.module.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Mege Movie",
  description: "Test Project: Film Consultation Application",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.body}>
        <h1>body</h1>
      </section>
    </main>
  );
}
