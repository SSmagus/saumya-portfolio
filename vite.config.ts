import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
  target: "client",
},

  vite: {

    server: {
      proxy: {
        "/leetcode": {
          target: "https://leetcode.com",
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/leetcode/, ""),
        },
      },
    },
  },
});