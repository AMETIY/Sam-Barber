import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["react-icons"],
        },
      },
    },
    // Enable minification
    minify: "terser",
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize development server
  server: {
    // Enable HMR (Hot Module Replacement)
    hmr: true,
    // Optimize for faster refresh
    watch: {
      usePolling: false,
    },
  },
  // Optimize preview server
  preview: {
    port: 4173,
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-icons"],
  },
});
