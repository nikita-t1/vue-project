import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import Shiki from 'markdown-it-shiki'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue({
          include: [/\.vue$/, /\.md$/],
      }),

      Unocss(),

      Markdown({
          headEnabled: true,
          frontmatter: true,
          exposeFrontmatter: true,
          wrapperComponent: "wrapper",
          wrapperClasses: 'prose max-w-3xl prose-sm m-auto text-left my-20 px-4 dark:text-gray-400 text-gray-700',
          markdownItOptions: {
              html: true,
              linkify: true,
              typographer: true,
              breaks: true,
              xhtmlOut: true,
          },
          markdownItSetup(md) {

              // https://prismjs.com/
              md.use(Shiki, {
                  theme: {
                      light: 'min-light',
                      dark: 'one-dark-pro',
                  },
              })

          },
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
          extensions: ['vue', 'md'],
      }),
  ]
})
