"use client";

import { useState } from "react";
import { eras } from "@/content/eras";
import type { Era } from "@/content/types";
import { EraCard } from "./EraCard";
import { EraModal } from "./EraModal";
import styles from "./EraMenu.module.css";

export function EraMenu() {
  const [openEra, setOpenEra] = useState<Era | null>(null);
  return (
    <>
      <div className={styles.grid}>
        {eras.map((era) => (
          <EraCard key={era.id} era={era} onOpen={() => setOpenEra(era)} />
        ))}
      </div>
      {openEra && <EraModal era={openEra} onClose={() => setOpenEra(null)} />}
    </>
  );
}
