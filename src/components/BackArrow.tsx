import Image from "next/image";
import Link from "next/link";
import { icons } from "@/assets/assets";
import styles from "./BackArrow.module.css";

export function BackArrow() {
  return (
    <Link href="/" aria-label="Volver" className={styles.link}>
      <Image src={icons["back-arrow"]} alt="" width={48} height={48} unoptimized />
    </Link>
  );
}
