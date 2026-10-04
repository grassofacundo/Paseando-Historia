import styles from "./NameTag.module.css";

type Props = { name: string; side: "left" | "right"; color: string };

/** Hidden when the name is blank (narration screens). */
export function NameTag({ name, side, color }: Props) {
  const label = name.trim();
  if (!label) return null;
  return (
    <div
      className={`${styles.tag} ${side === "right" ? styles.right : styles.left}`}
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
}
