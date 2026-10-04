import Image from "next/image";
import { characters, type CharacterId } from "@/assets/assets";
import styles from "./CharacterSprite.module.css";

export function CharacterSprite({ character }: { character: CharacterId }) {
  return (
    <Image
      src={characters[character]}
      alt=""
      width={600}
      height={900}
      unoptimized
      priority
      className={styles.sprite}
    />
  );
}
