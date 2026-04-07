import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}']
      },
      manifest: {
        short_name: "FOT",
        name: "Friends of TUT",
        description: "Student-led creative movement at Tshwane University of Technology",
        theme_color: "#FF6FA1",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "logo.jpeg",
            sizes: "192x192",
            type: "image/jpeg"
          },
          {
            src: "logo.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "maskable"
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
