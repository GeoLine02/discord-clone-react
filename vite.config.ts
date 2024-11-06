import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target: "https://discord-api-test-production.up.railway.app", // Target the correct server URL
        changeOrigin: true, // Changes the origin of the host header to match the target URL
        ws: true, // Ensures WebSocket requests are proxied
        secure: true, // Set to true if the target server uses HTTPS (recommended for production)
      },
    },
  },
});
