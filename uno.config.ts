import { defineConfig, presetWebFonts, presetWind } from 'unocss'

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
  extendTheme: [
    (theme) => {
      return theme
    },
  ],
})
