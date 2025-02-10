import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import pkg from './package.json'

import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [vue(), UnoCSS(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
