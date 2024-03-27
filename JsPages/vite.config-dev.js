//https://stackoverflow.com/questions/76848137/vite-serve-and-build-at-the-same-time
//https://stackoverflow.com/questions/74159670/vite-multiple-apps-with-same-source

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/main/v1",
  server:{
    port:8060,
    open:"/index.html"
  }
})
