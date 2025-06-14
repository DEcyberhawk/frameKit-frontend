import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // THIS FIXES asset path resolution on Netlify
  plugins: [react()],
});
