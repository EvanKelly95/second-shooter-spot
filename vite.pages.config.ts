import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/evan-kelly-photo-video/",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        photography: "photography/index.html",
        cinematography: "cinematography/index.html",
        about: "about/index.html",
        contact: "contact/index.html",
        weddings: "nj-wedding-photography-video/index.html",
      },
    },
  },
});
