"use client";

import Image from "next/image";
import Link from "next/link";
import { objects } from "@/assets/assets";
import type { Chapter } from "@/content/types";
import { useUsername } from "@/storage/useUsername";
import styles from "./FinishContent.module.css";

export function FinishContent({ chapter }: { chapter: Chapter }) {
  const name = useUsername();
  const { reward } = chapter;
  return (
    <>
      <h1 className={styles.title}>{name ? `¡Felicitaciones ${name}!` : "¡Felicitaciones!"}</h1>
      <p className={styles.lead}>Conseguiste una parte de: {reward.name}</p>
      <Image
        src={objects[reward.image]}
        alt={reward.name}
        width={240}
        height={240}
        unoptimized
        className={styles.object}
      />
      <p className={styles.text}>{reward.text}</p>
      <Link href="/eras" className={styles.button}>
        Elegir otra época
      </Link>
    </>
  );
}
