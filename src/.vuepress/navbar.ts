import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/Diary/",
  {
    text: "产品文档",
    icon: "scroll",
    prefix: "/Document/",
    children: [
      {
        text: "基础产品",
        icon: "lightbulb",
        prefix: "user/",
        children: [
          { text: "消费类用户", icon: "battery-full", link: "README" },
          { text: "商户类用户", icon: "battery-empty", link: "" },
        ],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "far fa-lightbulb", link: "" }],
      },
    ],
  },
  "/Notebook/",
  "/Novel/",
  "/Me",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
