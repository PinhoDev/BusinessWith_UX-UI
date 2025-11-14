import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages project site: https://pinhodev.github.io/BusinessWith_UX-UI/
  base: "/BusinessWith_UX-UI/",
});
