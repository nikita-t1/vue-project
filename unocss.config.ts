import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts, presetWind,
} from 'unocss'

export default defineConfig({
  presets: [
      presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],

  safelist: 'prose max-w-3xl prose-sm m-auto text-left my-20 px-4 dark:text-gray-400 text-gray-700'.split(' '),
})
