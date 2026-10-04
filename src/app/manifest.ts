import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Colours mirror --button-primary and --page-bg in globals.css.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pasea historias",
    short_name: "Pasea historias",
    lang: "es",
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#b8490f",
    background_color: "#e9dcc3",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
