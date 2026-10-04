import Image from "next/image";
import { objects } from "@/assets/assets";
import styles from "./StartOverlay.module.css";

export function StartOverlay({ onStart }: { onStart: () => void }) {
  return (
    <button type="button" className={styles.overlay} onClick={onStart}>
      <Image src={objects.book} alt="" width={240} height={240} unoptimized className={styles.book} />
      <span className={styles.label}>Comenzar</span>
    </button>
  );
}
