import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' → funciona en GitHub Pages aunque el repo esté en una subruta
export default defineConfig({
  base: './',
  plugins: [vue()],
})
