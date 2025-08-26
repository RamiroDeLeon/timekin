import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  define: {
    __API_BASE__: JSON.stringify(
      mode === 'development'
        ? ''
        : 'https://timekin-backend.onrender.com'
    ),
  },
}));
