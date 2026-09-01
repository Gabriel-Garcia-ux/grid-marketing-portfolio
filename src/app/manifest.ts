import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grid Marketing — Portfólio Criativo",
    short_name: "Grid Marketing",
    description: "Portfólio de Gabriel Garcia: edição de vídeos, design e growth marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#d2c5b6",
    theme_color: "#171411",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
