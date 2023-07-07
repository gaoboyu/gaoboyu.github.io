---
home: true
modules:
  #- Banner
  - BannerBrand
  #- Blog
  - MdContent
  #- Footer
banner: # banner 模块的配置
  heroText: 野美笔记
  tagline: 仅在这里书写我的片面之言而已
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /banner.jpg
  bgImageStyle:
    height: 450px
bannerBrand: # bannerBrand 模块的配置
  bgImage: '/bg.svg'
  title: 野美笔记
  description: 仅在这里书写我的片面之言而已
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Novel, link: '/docs/Novel/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'BrandGithub', link: 'https://github.com/recoluan' }
blog: # blog 模块的配置
  socialLinks: # 社交地址
    - { icon: 'BrandGithub', link: 'https://github.com/recoluan' }
footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2018
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---

