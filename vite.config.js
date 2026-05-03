import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        music: resolve(__dirname, 'pages/dotmusic.html'),
        infinity: resolve(__dirname, 'pages/infinitydot.html'),
        about: resolve(__dirname, 'pages/a-propos.html'),
        game: resolve(__dirname, 'pages/jeux.html'),
        projet: resolve(__dirname, 'pages/projet.html'),
      },
    },
  },
})