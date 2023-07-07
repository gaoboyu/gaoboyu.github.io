export const data = JSON.parse("{\"key\":\"v-043d72dc\",\"path\":\"/blogs/skill/2016/121501.html\",\"title\":\"first page in category2\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"first page in category2\",\"date\":\"2016/12/15\",\"tags\":[\"tag3\"],\"categories\":[\"category2\"]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/skill/2016/121501.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
