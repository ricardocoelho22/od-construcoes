// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ricardocoelho22.github.io",
  base: "/od-construcoes/",
  vite: {
    plugins: [tailwindcss()],
  },
});
