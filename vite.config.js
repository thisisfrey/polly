import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/polly/', // Adjust to match your GitHub Pages repository path
  build: {
    outDir: 'dist', // Default output directory for Vite builds
  },
})
