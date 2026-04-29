import { defineConfig } from "vite";

export default defineConfig({
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  server: {
    proxy: {
      "/socket.io": "http://localhost:8080"
    }
  },
  test: {
    environment: "node",
    include: ["../test/**/*.test.js"]
  }
});
