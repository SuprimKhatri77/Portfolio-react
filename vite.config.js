import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    
  ],
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.webp','**/*.PNG'],
})