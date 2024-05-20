import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    host: "0.0.0.0", // Specify the host to bind to
    proxy: {
      "/api": {
        target: "https://jobs-backend-api-mern-1.onrender.com/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
