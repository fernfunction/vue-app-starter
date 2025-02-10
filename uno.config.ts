import { defineConfig, presetWebFonts, presetWind, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [transformerDirectives()],
  extendTheme: [
    (theme) => {
      return theme
    },
  ],
})
