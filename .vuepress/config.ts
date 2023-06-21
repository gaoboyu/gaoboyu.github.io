import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default defineUserConfig({
  title: "野美笔记",
  description: "多么伟大的作家也不过是在书写个人的片面而已",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "野美",
    authorAvatar: "/head.png",
    docsRepo: "https://gaoboyu.pages.dev",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    plugins: [
	  nprogressPlugin(),
	],
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blogs/comment/guide" },
      {
        text: "笔记",
        children: [
          { text: "ChatGPT", link: "/blogs/note/chatGPT/theme" },
          { text: "Midjourney", link: "/blogs/note/midjourney/" },
          { text: "StableDiffusion", link: "/blogs/note/stablediffusion/" },
        ],
      },
      {
        text: "行业",
        children: [
          { text: "零售", link: "/docs/industry/retail/theme" },
          { text: "酒店", link: "/docs/industry/hotel/" },
          { text: "票务", link: "/docs/industry/ticket/" },
        ],
      },
      {
        text: "文档",
        children: [
          { text: "会员", link: "/docs/means/member/" },
          { text: "商品", link: "/docs/means/commodity/" },
          { text: "促销", link: "/docs/means/promotion/" },
          { text: "交易", link: "/docs/means/transaction/" },
          { text: "订单", link: "/docs/means/order/" },
          { text: "资金", link: "/docs/means/fund/" },
          { text: "数据", link: "/docs/means/data/" },
          { text: "工具", link: "/docs/means/tools/" },
        ],
      },
      { text: "资源", link: "/docs/resources/guide" },
      { text: "分类", link: "/categories/reco/1/" },
      { text: "标签", link: "/tags/tag1/1/" },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
