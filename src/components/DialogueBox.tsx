import type { ReactNode } from "react";
import styles from "./DialogueBox.module.css";

type Props = {
  text: string;
  color: string;
  /** When provided the text area is a button that continues the game. */
  onClick?: () => void;
  children?: ReactNode;
};

export function DialogueBox({ text, color, onClick, children }: Props) {
  return (
    <div className={styles.box} style={{ backgroundColor: color }}>
      {onClick ? (
        <button type="button" className={styles.textButton} onClick={onClick}>
          <span className={styles.text}>{text}</span>
          <span className={styles.indicator} aria-hidden="true" />
        </button>
      ) : (
        <p className={styles.text}>{text}</p>
      )}
      {children}
    </div>
  );
}
