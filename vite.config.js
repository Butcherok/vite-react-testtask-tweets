import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-react-testtask-tweets/",
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
