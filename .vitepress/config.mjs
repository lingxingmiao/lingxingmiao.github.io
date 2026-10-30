import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qingmang's Docs",
  description: "项目文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: '代码 AGPL-3.0 · 模型 CC BY-NC 4.0 · 帕鲁素材 © Pocketpair, Inc.',
      copyright: '本页由 AI 编写'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lingxingmiao' }
    ]
  }
})
