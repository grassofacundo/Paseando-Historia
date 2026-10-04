"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { eras as eraImages } from "@/assets/assets";
import { COMING_SOON } from "@/content/eras";
import type { Era } from "@/content/types";
import { percent } from "@/storage/progress";
import styles from "./EraCard.module.css";

const noopSubscribe = () => () => {};

function Completed({ chapterId }: { chapterId: string }) {
  const value = useSyncExternalStore(noopSubscribe, () => percent(chapterId), () => 0);
  return <>Completado {value}%</>;
}

export function EraCard({ era, onOpen }: { era: Era; onOpen: () => void }) {
  return (
    <button
      type="button"
      className={styles.card}
      disabled={!era.playable}
      aria-haspopup={era.playable ? "dialog" : undefined}
      onClick={era.playable ? onOpen : undefined}
    >
      <Image
        src={eraImages[era.image]}
        alt=""
        width={400}
        height={225}
        unoptimized
        className={styles.image}
      />
      <span className={styles.title}>{era.title}</span>
      <span className={styles.status}>
        {era.playable && era.chapterId ? <Completed chapterId={era.chapterId} /> : COMING_SOON}
      </span>
    </button>
  );
}
