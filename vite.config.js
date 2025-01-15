import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Sistema_De_Votacao/', 

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});
