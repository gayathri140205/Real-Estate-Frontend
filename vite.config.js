import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://real-estate-backend-1-mixa.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
