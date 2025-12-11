import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Shivam-Gupta/', // Ensures correct asset paths for GitHub Pages
});
