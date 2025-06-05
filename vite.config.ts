import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Do not use await/async for config on Render
export default defineConfig({
  root: path.resolve(__dirname, "client"),
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // Only use cartographer if running inside Replit
    process.env.REPL_ID ? require("@replit/vite-plugin-cartographer").cartographer() : null
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
