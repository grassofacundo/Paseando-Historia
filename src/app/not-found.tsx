import Image from "next/image";
import Link from "next/link";
import { backgrounds, characters } from "@/assets/assets";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.root} style={{ backgroundImage: `url(${backgrounds.error404})` }}>
      <div className={styles.stage}>
        <div className={styles.stageInner}>
          <Image
            src={characters["raul-404"]}
            alt=""
            width={600}
            height={900}
            unoptimized
            priority
            className={styles.sprite}
          />
          <div className={styles.tag}>Raúl 404</div>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.box}>
          <p className={styles.text}>Nos quedamos sin diálogos</p>
          <Link href="/" className={styles.link}>
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
