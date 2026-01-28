import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- IMPORTANTE

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- OBRIGATÓRIO: É ISSO QUE FAZ O SITE FICAR ESTILIZADO
  ],
})