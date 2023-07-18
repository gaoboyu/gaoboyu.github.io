import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "野美笔记",
  description: "仅在这里书写我的片面之言而已",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
