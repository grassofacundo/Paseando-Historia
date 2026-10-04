import Image from "next/image";
import Link from "next/link";
import { icons } from "@/assets/assets";
import { UsernameForm } from "@/components/UsernameForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={icons.logo}
        alt="Pasea historias"
        width={320}
        height={160}
        unoptimized
        priority
        className={styles.logo}
      />
      <nav className={styles.menu} aria-label="Menú principal">
        <Link href="/play/intro" className={styles.option}>
          Tutorial
        </Link>
        <Link href="/eras" className={styles.option}>
          Elegir época histórica
        </Link>
        <Link href="/about" className={styles.option}>
          Sobre el proyecto
        </Link>
      </nav>
      <UsernameForm />
    </main>
  );
}
