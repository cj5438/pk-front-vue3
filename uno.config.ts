// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    // method 2：针对于全局经常需要使用样式
    // 'router-link': 'text-white text-xl px-8 py-2 cursor font-300 hover:font-500'
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives()]
})
