import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 520,
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    host: "0.0.0.0", // Ensure the server is accessible externally
    strictPort: true, // Fail if the port is already in use
    hmr: {
      // timeout: 30000, // Increase timeout for hot module replacement
    },
  },
});
