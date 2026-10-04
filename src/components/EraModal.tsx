"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { choices } from "@/assets/assets";
import { eraChoices } from "@/content/eras";
import styles from "./EraModal.module.css";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function EraModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Move focus in on open, restore it to the previously focused element on close.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => previous?.focus();
  }, []);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (items.length === 0) {
      e.preventDefault();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === dialogRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="era-modal-title"
        tabIndex={-1}
        className={styles.dialog}
        onKeyDown={onKeyDown}
      >
        <h2 id="era-modal-title" className={styles.heading}>
          Revolución de Mayo
        </h2>
        <div className={styles.choices}>
          {eraChoices.map((choice) => (
            <div key={choice.id} className={styles.choice}>
              <Image
                src={choices[choice.image]}
                alt=""
                width={300}
                height={300}
                unoptimized
                className={styles.pic}
              />
              <p className={styles.text}>{choice.text}</p>
              {choice.playable && choice.chapterId ? (
                <Link href={`/play/${choice.chapterId}`} className={styles.button}>
                  {choice.buttonLabel}
                </Link>
              ) : (
                <button type="button" className={styles.button} disabled>
                  {choice.buttonLabel}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
