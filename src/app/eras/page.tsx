import { BackArrow } from "@/components/BackArrow";
import { EraMenu } from "@/components/EraMenu";
import styles from "./page.module.css";

export default function ErasPage() {
  return (
    <main className={styles.main}>
      <BackArrow />
      <EraMenu />
    </main>
  );
}
