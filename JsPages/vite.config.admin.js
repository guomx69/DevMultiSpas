import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:8070,
    //host:'192.168.0.225',
    strictPort:true,
    open:"/pages/admin.html"
 },
  base: "/admin/v1",
  build: {
    rollupOptions: {
      input: {
        admin: resolve(__dirname, './pages/admin.html'),
      },
      output: [
        {
          name: "admin",
          dir: "dist",
        }
      ]
    },
  },
})
