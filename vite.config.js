import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // This helps resolve paths on Netlify
  plugins: [react()]
})
