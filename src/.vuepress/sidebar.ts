import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
    "Me",
  ],
  "/Diary/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
    "Me",
  ],
  "/Document/": [
    "",
    {
      text: "用户",
      icon: "user",
      prefix: "user/",
      children: "structure",
    },
    {
      text: "会员",
      icon: "user-tie",
      prefix: "member/",
      children: "structure",
    },
    {
      text: "订单",
      icon: "book",
      prefix: "order/",
      children: "structure",
    },
    {
      text: "交易",
      icon: "book",
      prefix: "transaction/",
      children: "structure",
    },
    {
      text: "资金",
      icon: "book",
      prefix: "fund/",
      children: "structure",
    },
    {
      text: "促销",
      icon: "book",
      prefix: "promotional/",
      children: "structure",
    },
    
  ],
  "/AIGC/": [
    "",
    {
      text: "ChatGPT",
      icon: "laptop-code",
      prefix: "ChatGPT/",
      children: "structure",
    },
    {
      text: "Midjourney",
      icon: "book",
      prefix: "Midjourney/",
      children: "structure",
    },
    {
      text: "StableDiffusion",
      icon: "book",
      prefix: "StableDiffusion/",
      children: "structure",
    },
  ],
  "/Notebook/": [
    "",
    {
      text: "第一卷",
      icon: "laptop-code",
      prefix: "00/",
      link: "00/",
      children: "structure",
    },
    {
      text: "第二卷",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
  "/Novel/": [
    "",
    {
      text: "第一卷",
      icon: "laptop-code",
      prefix: "00/",
      link: "00/",
      children: "structure",
    },
    {
      text: "第二卷",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
