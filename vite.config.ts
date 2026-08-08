import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
          vendor: ["react", "react-dom", "react-router-dom"],
          query: ["@tanstack/react-query"]
        }
      }
    }
  }
});
