import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // create separate chunks for vendor libraries. Improve app load performance
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 520,
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    host: "0.0.0.0", // Ensure the server is accessible externally
    strictPort: true, // Fail if the port is already in use
  },
});
