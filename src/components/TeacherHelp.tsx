import Image from "next/image";
import { characters } from "@/assets/assets";
import styles from "./TeacherHelp.module.css";

export function TeacherHelp() {
  return (
    <Image
      src={characters["profe-ayuda"]}
      alt=""
      width={600}
      height={900}
      unoptimized
      className={styles.teacher}
    />
  );
}
