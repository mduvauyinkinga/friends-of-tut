import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import security from "vite-plugin-security";
import path from "path";
// import { VitePWA } from "vite-plugin-pwa";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  base: '/friends-of-tut/',
  server: {
    host: "localhost",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    security({
      csp: {
        reportOnly: false
      },
      referrerPolicy: "strict-origin-when-cross-origin"
    }),
// VitePWA removed to fix build - add back after npm update vite-plugin-pwa

  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

