"use client";

import { useEffect } from "react";

/** Registers /sw.js (production only) once the page has loaded. */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) {
      return;
    }
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    };
    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);
  return null;
}
