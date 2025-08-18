import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Shivam-Gupta/', // Set base path for GitHub Pages
  plugins: [react()],
});
