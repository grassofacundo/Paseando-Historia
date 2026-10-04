"use client";

import { useState } from "react";
import { saveUsername, useUsername } from "@/storage/useUsername";
import styles from "./UsernameForm.module.css";

export function UsernameForm() {
  const name = useUsername();
  const [value, setValue] = useState("");
  const hasName = !!name;

  function submit() {
    const trimmed = value.trim();
    if (!trimmed) return;
    saveUsername(trimmed);
    setValue("");
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.greeting} aria-live="polite">
        {hasName ? `¡Hola ${name}!` : ""}
      </p>
      <label htmlFor="username-input" className={styles.label}>
        {hasName ? `¿No sos ${name}? Cambiar nombre:` : "Decinos tu nombre:"}
      </label>
      <input
        id="username-input"
        type="text"
        className={styles.input}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        onBlur={submit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            submit();
          }
        }}
      />
    </div>
  );
}
