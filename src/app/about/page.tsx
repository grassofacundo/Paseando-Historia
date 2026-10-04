import { BackArrow } from "@/components/BackArrow";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <BackArrow />
      <h1 className={styles.title}>Sobre el proyecto</h1>
      <p className={styles.line}>Desarrollado por Facundo Grasso, año 2018</p>
      <p className={styles.line}>Cursando desarrollo de software 2do año. Escuela Urquiza</p>
    </main>
  );
}
