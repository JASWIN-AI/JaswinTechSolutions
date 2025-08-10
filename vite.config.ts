import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Change this only if you DON'T have a custom domain
// For custom domain (jaswins.com), keep it as "/"
const BASE_PATH = "/";

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "client/dist"), // Output inside client
    emptyOutDir: true, // Clears old files before building
    assetsDir: "assets", // Keep assets organized
  },
});
