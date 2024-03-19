import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    rollupOptions: {
      input: {
        public: resolve(__dirname, './public.html'),
        admin: resolve(__dirname, './admin.html'),
      },
      output: [
        {
          name: "public",
          dir: "dist_public",
        },
        {
          name: "admin",
          dir: "dist_admin",
        }
      ]
    },
  },
})
