"use client";

import { useState } from "react";
import { eras } from "@/content/eras";
import { EraCard } from "./EraCard";
import { EraModal } from "./EraModal";
import styles from "./EraMenu.module.css";

export function EraMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.grid}>
        {eras.map((era) => (
          <EraCard key={era.id} era={era} onOpen={() => setOpen(true)} />
        ))}
      </div>
      {open && <EraModal onClose={() => setOpen(false)} />}
    </>
  );
}
